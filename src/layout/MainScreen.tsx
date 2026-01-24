import React from "react";
import Screen from "./Screen";
import AnimatedBackground from "@/components/Background/AnimatedBackground";

interface MainScreenProps {
  children: React.ReactNode;
}

/**
 * MainScreen component - wrapper for the main application screen
 * Uses the base Screen component with main-screen styling
 */
const MainScreen: React.FC<MainScreenProps> = ({ children }) => {
  return (
    <Screen className="main-screen">
      <AnimatedBackground />
      {children}
    </Screen>
  );
};

export default MainScreen;
