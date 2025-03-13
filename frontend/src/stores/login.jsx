import { create } from "zustand";

const useLoginStep = create((set) => ({
  step: "email",
  setStep: (newStep) => set({ step: newStep }),
}));

const useEmail = create((set) => ({
  email: "",
  setEmail: (newEmail) => set({ email: newEmail }),
}));

export { useLoginStep, useEmail };
