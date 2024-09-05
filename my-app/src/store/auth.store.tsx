// auth: 허가, 인증

import { create } from "zustand";

interface AuthState {
  user: string | null;
  isLogged: boolean;
  login: (user: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  isLogged: false,
  login: (user) => set({user}), //로그인 상태 설정
  logout: () => set({user: null})//로그아웃 상태 설정
}));

