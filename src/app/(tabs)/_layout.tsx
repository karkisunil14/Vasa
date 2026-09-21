import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Tabs } from "expo-router/js-tabs";

import { CustomTabBar } from "@/components/CustomTabBar";

export default function TabsLayout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Tabs tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="learn"
          options={{
            title: "Learn",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "book" : "book-outline"} size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="ai-teacher"
          options={{
            title: "AI Teacher",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "school" : "school-outline"} size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "chatbubble" : "chatbubble-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
