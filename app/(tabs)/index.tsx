import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Platform, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { NASM_BLUE } from '@/constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Homepage } from '@/components/Homepage';

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
          <View style={styles.logoContainer}>
            <Image 
              source={require('@/assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={() => router.push('/login')}>
              <ThemedText style={styles.buttonText}>Login</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.registerButton]}
              activeOpacity={0.8}
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
      <Homepage userName={userName} onLogout={handleLogout} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEF6FF',
    position: 'relative',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#EEF6FF',
  },
  logoContainer: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 400,
  },
  bottomButtonContainer: {
    width: '100%',
    gap: 16,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 44 : 32,
    left: 24,
    right: 24,
  },
  button: {
    backgroundColor: NASM_BLUE,
    minHeight: 44,
    paddingVertical: Platform.OS === 'ios' ? 16 : 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 6,
    elevation: 6,
  },
  registerButton: {
    backgroundColor: NASM_BLUE,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: Platform.OS === 'ios' ? 17 : 16,
    fontWeight: '600',
    letterSpacing: 0.5,
    lineHeight: 22,
  },
});
