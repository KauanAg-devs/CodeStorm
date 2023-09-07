import React from "react";
import { SafeAreaView, Text } from "react-native";
import Login from "./src/pages/login/Login";
export default function App(){
  return(
    <SafeAreaView style={{flex: 1}}>
      <Login />
    </SafeAreaView>
  )
}
