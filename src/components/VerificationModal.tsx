import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import type { NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "@/theme";

const CODE_LENGTH = 6;
const EMPTY_DIGITS = Array<string>(CODE_LENGTH).fill("");

type VerificationModalProps = {
  visible: boolean;
  email?: string;
  loading?: boolean;
  error?: string | null;
  onClose: () => void;
  /** Resolves to `true` once the code is accepted, `false` if it was rejected. */
  onSubmit: (code: string) => Promise<boolean>;
};

export function VerificationModal({
  visible,
  email,
  loading = false,
  error,
  onClose,
  onSubmit,
}: VerificationModalProps) {
  const [digits, setDigits] = useState<string[]>(EMPTY_DIGITS);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const submit = async (fullCode: string) => {
    Keyboard.dismiss();
    const success = await onSubmit(fullCode);
    if (!success) {
      setDigits(EMPTY_DIGITS);
      inputRefs.current[0]?.focus();
    }
  };

  const handleChangeDigit = (text: string, index: number) => {
    const value = text.replace(/[^0-9]/g, "");

    // Support pasting the full code into any box.
    if (value.length > 1) {
      const pasted = value.slice(0, CODE_LENGTH).split("");
      const next = [...EMPTY_DIGITS];
      pasted.forEach((digit, i) => {
        next[i] = digit;
      });
      setDigits(next);

      if (pasted.length === CODE_LENGTH) {
        submit(pasted.join(""));
      } else {
        inputRefs.current[pasted.length]?.focus();
      }
      return;
    }

    const next = [...digits];
    next[index] = value;
    setDigits(next);

    if (value && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (next.every((digit) => digit !== "")) {
      submit(next.join(""));
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (event.nativeEvent.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleClose = () => {
    setDigits(EMPTY_DIGITS);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
      onShow={() => {
        setDigits(EMPTY_DIGITS);
        inputRefs.current[0]?.focus();
      }}
    >
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Pressable style={styles.backdrop} onPress={handleClose}>
          <Pressable className="mx-6 w-full max-w-sm rounded-3xl bg-white px-6 pb-8 pt-5">
            <View className="flex-row justify-end">
              <TouchableOpacity onPress={handleClose} hitSlop={12}>
                <Ionicons name="close" size={22} color={colors.muted} />
              </TouchableOpacity>
            </View>

            <Text className="h2 text-ink text-center">Check your email</Text>
            <Text className="body-md text-muted mt-2 text-center">
              We sent a 6-digit verification code{email ? ` to ${email}` : ""}. Enter it
              below to continue.
            </Text>

            <View className="mt-8 flex-row justify-center gap-2">
              {digits.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(node) => {
                    inputRefs.current[index] = node;
                  }}
                  value={digit}
                  onChangeText={(text) => handleChangeDigit(text, index)}
                  onKeyPress={(event) => handleKeyPress(event, index)}
                  keyboardType="number-pad"
                  maxLength={CODE_LENGTH}
                  editable={!loading}
                  selectTextOnFocus
                  textAlign="center"
                  className="h3 text-ink h-14 w-11 rounded-2xl border border-border"
                  style={error ? { borderColor: colors.error } : undefined}
                />
              ))}
            </View>

            {loading && (
              <ActivityIndicator color={colors.primary} style={{ marginTop: 16 }} />
            )}

            {error && !loading && (
              <Text className="body-sm text-error mt-4 text-center">{error}</Text>
            )}
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  backdrop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(13, 19, 43, 0.5)",
  },
});
