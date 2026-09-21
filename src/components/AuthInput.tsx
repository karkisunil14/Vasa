import type { ReactNode } from "react";
import type { KeyboardTypeOptions, TextInputProps } from "react-native";
import { Text, TextInput, View } from "react-native";

import { colors } from "@/theme";

type AuthInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: TextInputProps["autoCapitalize"];
  secureTextEntry?: boolean;
  rightElement?: ReactNode;
};

export function AuthInput({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "sentences",
  secureTextEntry = false,
  rightElement,
}: AuthInputProps) {
  return (
    <View className="rounded-2xl border border-border px-4 py-2.5">
      <Text className="caption text-muted">{label}</Text>
      <View className="mt-1 flex-row items-center">
        <TextInput
          className="body-lg text-ink flex-1"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.muted}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
        />
        {rightElement}
      </View>
    </View>
  );
}
