import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { NASM_BLUE } from '@/constants/Colors';

type HomepageProps = {
  userName: string;
  onLogout: () => void;
};

export function Homepage({ userName, onLogout }: HomepageProps) {
  console.log('Rendering Homepage with text:', 'Same text');
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <ThemedText style={styles.welcomeTitle}>Welcome back,</ThemedText>
        <ThemedText style={[styles.welcomeTitle, { backgroundColor: 'yellow' }]}>Same text</ThemedText>
        <ThemedText style={styles.userName}>{userName}</ThemedText>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        activeOpacity={0.8}
        onPress={onLogout}>
        <ThemedText style={styles.buttonText}>Logout</ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f0f0f0',
  },
  welcomeContainer: {
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    zIndex: 1,
  },
  welcomeTitle: {
    fontSize: 28,
    marginBottom: 8,
    color: '#004AAD',
    letterSpacing: 0.35,
    lineHeight: 34,
  },
  userName: {
    fontSize: 34,
    fontWeight: '600',
    marginBottom: 44,
    color: '#004AAD',
    letterSpacing: 0.37,
    lineHeight: 41,
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
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#DC3545',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: Platform.OS === 'ios' ? 17 : 16,
    fontWeight: '600',
    letterSpacing: 0.5,
    lineHeight: 22,
  },
}); 