import { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Platform, StatusBar, Alert, View } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Colors, { NASM_BLUE } from '@/constants/Colors';
import { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = Platform.select({
    ios: 'http://127.0.0.1:5001/api',
    android: 'http://10.0.2.2:5001/api',
}) || 'http://127.0.0.1:5001/api';

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email,
                password
            });

            // Store the token and user info
            const { token, name } = response.data;
            await AsyncStorage.setItem('userToken', token);
            await AsyncStorage.setItem('userName', name);

            // Navigate to home screen
            router.replace('/(tabs)');
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            Alert.alert('Error', err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar />
            <ThemedView style={styles.container}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}>
                    <ThemedText style={styles.backButtonText}>← Back</ThemedText>
                </TouchableOpacity>

                <ThemedText type="title" style={styles.title}>Welcome Back</ThemedText>

                <ThemedView style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        placeholderTextColor="#999"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholderTextColor="#999"
                    />

                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <ThemedText style={styles.buttonText}>Login</ThemedText>
                    </TouchableOpacity>

                    <View style={styles.registerContainer}>
                        <ThemedText style={styles.registerText}>Don't have an account? </ThemedText>
                        <TouchableOpacity onPress={() => router.push('/register')}>
                            <ThemedText style={styles.registerLink}>Register</ThemedText>
                        </TouchableOpacity>
                    </View>
                </ThemedView>
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    backButton: {
        marginTop: 10,
        marginBottom: 20,
    },
    backButtonText: {
        fontSize: 18,
        color: NASM_BLUE,
    },
    title: {
        marginBottom: 40,
        textAlign: 'center',
    },
    formContainer: {
        gap: 20,
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 15,
        fontSize: 16,
        backgroundColor: 'white',
    },
    loginButton: {
        backgroundColor: NASM_BLUE,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    registerText: {
        fontSize: 16,
    },
    registerLink: {
        fontSize: 16,
        color: NASM_BLUE,
        fontWeight: '600',
    },
}); 