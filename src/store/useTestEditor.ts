import { create } from 'zustand';

type State = {
    count: number;
    increase: () => void;
    decrease: () => void;
};

export const useCount = create<State>((set) => ({
    count: 116,
    increase: () => set((s) => ({ count: s.count + 1 })),
    decrease: () => set((s) => ({ count: s.count - 1 })),
}));
