import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface AnimationContextType {
  animation: boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [animation, setAnimation] = useState<boolean>(true);

  useEffect(() => {
    const item = localStorage.getItem("animation");
    if (item === null) {
      localStorage.setItem("animation", "true");
    } else {
      setAnimation(item === "true");
    }
  }, []);

  return (
    <AnimationContext.Provider value={{ animation }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
}
