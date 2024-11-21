import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { NASM_BLUE } from '@/constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const name = await AsyncStorage.getItem('userName');
        setUserName(name);
      } catch (error) {
        console.error('Error loading user info:', error);
      }
    };

    loadUserInfo();
  }, []);

  const handleLogout = async () => {
    try {
      // Clear all stored data
      await AsyncStorage.multiRemove(['userToken', 'userName']);
      setUserName(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  if (!userName) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ThemedText style={styles.title}>Welcome to MyPTbookApp</ThemedText>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push('/login')}>
              <ThemedText style={styles.buttonText}>Login</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push('/register')}>
              <ThemedText style={styles.buttonText}>Register</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ThemedText style={styles.welcomeTitle}>Welcome back,</ThemedText>
        <ThemedText style={styles.userName}>{userName}</ThemedText>

        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}>
          <ThemedText style={styles.buttonText}>Logout</ThemedText>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  welcomeTitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  userName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,  // Add space before logout button
  },
  buttonContainer: {
    width: '100%',
    gap: 20,
  },
  button: {
    backgroundColor: NASM_BLUE,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 200,  // Ensure minimum width for the logout button
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#DC3545',  // Red color for logout
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
