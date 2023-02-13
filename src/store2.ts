import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearState {
  bears: number;
  increase?: (by: number) => void;
}

export const useToDoStore = create(
  persist<BearState>((set, get) => ({ bears: 0 }), { name: 'ToDoLocalStorage' })
);
