import { useAuth, useClerk, useUser } from "@clerk/expo";
import { Redirect } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 items-center justify-center gap-2 bg-background px-6">
      <Text className="h1 text-primary">lingua</Text>
      <Text className="body-md text-muted text-center">
        You&apos;re signed in
        {user?.primaryEmailAddress ? ` as ${user.primaryEmailAddress.emailAddress}` : ""}.
      </Text>
      <TouchableOpacity onPress={() => signOut()} className="mt-4">
        <Text className="h4 text-primary">Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}
