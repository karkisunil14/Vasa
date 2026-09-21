import { Stack } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 px-6">
        <View className="flex-row items-center justify-center gap-2 pt-4">
          <Image
            source={images.mascotLogo}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
          <Text className="h2 text-ink">muolingo</Text>
        </View>

        <View className="mt-10">
          <Text className="h1 text-ink">Your AI language</Text>
          <Text className="h1 text-primary">teacher.</Text>
          <Text className="body-lg text-muted mt-3">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="flex-1 items-center justify-end">
          <View className="relative mb-10 aspect-square w-full items-center justify-center">
            <View className="absolute left-0 top-[6%] rounded-2xl bg-[#EFF6FD] px-4 py-2">
              <Text className="body-md text-ink">Hello!</Text>
            </View>
            <View className="absolute right-0 top-0 rounded-2xl bg-[#F6F6FD] px-4 py-2">
              <Text className="body-md italic text-[#0000EF]">¡Hola!</Text>
            </View>
            <View className="absolute right-[4%] top-[42%] rounded-2xl bg-[#FCF3EE] px-4 py-2">
              <Text className="body-md text-[#E70000]">你好!</Text>
            </View>

            <Image
              source={images.mascotWelcome}
              style={{ width: "85%", height: "85%" }}
              resizeMode="contain"
            />
          </View>
        </View>

        <TouchableOpacity
          className="relative mb-6 flex-row items-center justify-center rounded-full bg-primary py-4"
          activeOpacity={0.85}
        >
          <Text className="h4 text-white">Get Started</Text>
          <Text
            className="h4 text-white"
            style={{ position: "absolute", right: 24 }}
          >
            ›
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
