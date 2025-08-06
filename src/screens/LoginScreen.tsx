import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { useAuthStore } from '../store/useAuthStore';
import { Image } from 'react-native';

export default function LoginScreen() {
  const login = useAuthStore(state => state.login);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await login();
    setLoading(false);
  };

  return (
    <ImageBackground
      source={require('../assets/loginBG.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View style={styles.inner}>
          <Image
            source={require('../assets/PawUnoIcon.png')}
            style={styles.logo}
          />

          <TextInput
            placeholder="Email"
            placeholderTextColor="#ccc"
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ccc"
            style={styles.input}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Log In</Text>
            )}
          </TouchableOpacity>

          <Text style={styles.or}>───────── OR ─────────</Text>

          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.socialButtonContent}>
              <Image
                source={require('../assets/google.png')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton]}>
            <View style={styles.socialButtonContent}>
              <Image
                source={require('../assets/facebook.jpg')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  inner: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 32,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(30, 30, 30, 0.85)',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 18,
    borderColor: '#555',
    borderWidth: 1,
    fontSize: 16,
    color: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: '#4f46e5',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  or: {
    color: 'white',
    marginVertical: 20,
  },
  socialButton: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 14,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  socialText: {
    color: '#111',
    fontSize: 15,
    fontWeight: '500',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  socialButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
