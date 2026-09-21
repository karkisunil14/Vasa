import type { BottomTabBarProps } from "expo-router/js-tabs";
import { useState } from "react";
import { Pressable, Text, View, type LayoutChangeEvent } from "react-native";
import Animated, { useAnimatedStyle, withSpring } from "react-native-reanimated";

import { colors } from "@/theme";

const CIRCLE_SIZE = 48;
const BAR_HEIGHT = 64;

export function CustomTabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
  const [tabBarWidth, setTabBarWidth] = useState(0);
  const tabWidth = tabBarWidth / state.routes.length;

  const indicatorStyle = useAnimatedStyle(() => {
    if (!tabWidth) {
      return { opacity: 0 };
    }

    const centerX = tabWidth * state.index + tabWidth / 2;

    return {
      opacity: 1,
      transform: [
        {
          translateX: withSpring(centerX - CIRCLE_SIZE / 2, {
            damping: 16,
            stiffness: 160,
            mass: 0.6,
          }),
        },
      ],
    };
  }, [state.index, tabWidth]);

  const handleLayout = (event: LayoutChangeEvent) => {
    setTabBarWidth(event.nativeEvent.layout.width);
  };

  return (
    <View
      className="flex-row border-t border-border bg-white"
      style={{ height: BAR_HEIGHT + insets.bottom, paddingBottom: insets.bottom }}
      onLayout={handleLayout}
    >
      <Animated.View
        className="absolute rounded-full bg-primary"
        style={[
          {
            width: CIRCLE_SIZE,
            height: CIRCLE_SIZE,
            top: (BAR_HEIGHT - CIRCLE_SIZE) / 2,
            pointerEvents: "none",
          },
          indicatorStyle,
        ]}
      />

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const focused = state.index === index;
        const label = options.title ?? route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            accessibilityRole="tab"
            accessibilityLabel={label}
            accessibilityState={{ selected: focused }}
            className="flex-1 items-center justify-center gap-1"
          >
            {options.tabBarIcon?.({
              focused,
              color: focused ? "#FFFFFF" : colors.muted,
              size: 22,
            })}
            {!focused && <Text className="caption text-muted">{label}</Text>}
          </Pressable>
        );
      })}
    </View>
  );
}
