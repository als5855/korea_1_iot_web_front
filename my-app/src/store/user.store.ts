import { create } from "zustand";

interface User {
  id: number;
  name: string 
}

// # 회원 데이터에 대한  상태 정의
// >> 데이터(속성), 기능(메서드 - 추가, 수정, 삭제)
interface MemberState {
  members: User[];
  addMember: (member: User) => void;
  updateMember: (id: number, name: string) => void;
  deleteMember: (id: number) => void;
}

// # 전체 회원의 데이터에 대한 전역 상태 관리
export const useMemberStore = create<MemberState>(set => ({
  // 저장소의 초기 데이터 설정
  members: [],

  addMember: (member) => set(state => ({
    members: [...state.members, member]
  })),
  updateMember: (id,name) => set(state => ({
    members: state.members.map((user) => 
    user.id === id ? {...user,name } : user)
  })),
  deleteMember: (id) => {

  }
}));