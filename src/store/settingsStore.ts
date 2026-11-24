import { create } from "zustand"
import { persist, createJSONStorage} from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

type Unit = "kg" | "lb" ;

type SettingsState = {
  unit: Unit;
  setUnit: (unit: Unit) => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      unit: "kg",
      setUnit: (unit) => set({ unit }),
    }),
    {
      name: "settings-storage", // clé utilisée dans AsyncStorage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);