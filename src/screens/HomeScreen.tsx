import React from 'react';
import { View, Button, Text } from 'react-native';
import { useAuthStore } from '../store/useAuthStore';

export default function HomeScreen() {
  const logout = useAuthStore(state => state.logout);

  return (
    <View>
      <Text>Welcome to Home Scree1q1n</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
