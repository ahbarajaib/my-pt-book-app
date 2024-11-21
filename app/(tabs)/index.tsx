import { StyleSheet, TouchableOpacity, SafeAreaView, View, Platform, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

const NASM_BLUE = '#004AAD';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.mainContainer}>
        <View style={styles.contentWrapper}>
          <View style={styles.headerContainer}>
            <ThemedText style={styles.title}>MY PT BOOK</ThemedText>
            <ThemedText style={styles.subtitle}>Your Personal Training Companion</ThemedText>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.loginButton]}
              onPress={() => router.push('/login')}>
              <ThemedText style={styles.loginButtonText}>LOGIN</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.registerButton]}
              onPress={() => router.push('/register')}>
              <ThemedText style={styles.registerButtonText}>REGISTER</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
    paddingBottom: 20,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: NASM_BLUE,
    marginBottom: 16,
    textAlign: 'center',
    includeFontPadding: false,
    padding: 0,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    includeFontPadding: false,
    padding: 0,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
    marginBottom: Platform.OS === 'ios' ? 40 : 20,
  },
  button: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButton: {
    backgroundColor: NASM_BLUE,
  },
  registerButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: NASM_BLUE,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
  registerButtonText: {
    color: NASM_BLUE,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
