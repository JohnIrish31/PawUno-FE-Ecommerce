import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  checkLoginStatus: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,

  login: async () => {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    set({ isLoggedIn: true });
  },

  logout: async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    set({ isLoggedIn: false });
  },

  checkLoginStatus: async () => {
    const value = await AsyncStorage.getItem('isLoggedIn');
    set({ isLoggedIn: value === 'true' });
  },
}));
