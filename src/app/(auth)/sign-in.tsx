import { Stack } from "expo-router";

import { AuthScreen } from "@/components/AuthScreen";

export default function SignIn() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <AuthScreen mode="sign-in" />
    </>
  );
}
