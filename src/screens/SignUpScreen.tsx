import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../navigation/types';
import { commonLoginSignup as styles } from '../styles/commonLoginSignup';

export default function SignUpScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

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
            placeholder="Full Name"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={form.fullName}
            onChangeText={text => setForm({ ...form, fullName: text })}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#ccc"
            style={styles.input}
            keyboardType="email-address"
            value={form.email}
            onChangeText={text => setForm({ ...form, email: text })}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ccc"
            style={styles.input}
            secureTextEntry
            value={form.password}
            onChangeText={text => setForm({ ...form, password: text })}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#ccc"
            style={styles.input}
            secureTextEntry
            value={form.confirmPassword}
            onChangeText={text => setForm({ ...form, confirmPassword: text })}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.or}>───────── OR ─────────</Text>

          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.socialButtonContent}>
              <Image
                source={require('../assets/google.png')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Sign up with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.socialButtonContent}>
              <Image
                source={require('../assets/facebook.jpg')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Sign up with Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.signUpText}>
              Already have an account?{' '}
              <Text style={styles.signUpLink}>Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
