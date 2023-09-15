import React from "react";
import WelcomeRoutes from "./src/Routes/Welcome.Routes";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  })

  if (!fontsLoaded) {
    return null
  }

  const log = () => {
    console.log("hello")
  }

  // return <WelcomeRoutes />
  return (
    <WelcomeRoutes />
  )
}
