import { isClerkAPIResponseError, useSignIn, useSignUp, useSSO } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthInput } from "@/components/AuthInput";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SocialAuthButton } from "@/components/SocialAuthButton";
import { VerificationModal } from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { colors } from "@/theme";

type AuthMode = "sign-up" | "sign-in";
type SocialProvider = "google" | "facebook" | "apple";

type AuthScreenProps = {
  mode: AuthMode;
};

const COPY: Record<
  AuthMode,
  {
    title: string;
    subtitle: string;
    cta: string;
    footerPrompt: string;
    footerAction: string;
    footerHref: "/sign-up" | "/sign-in";
  }
> = {
  "sign-up": {
    title: "Create your account",
    subtitle: "Start your language journey today ✨",
    cta: "Sign Up",
    footerPrompt: "Already have an account?",
    footerAction: "Log in",
    footerHref: "/sign-in",
  },
  "sign-in": {
    title: "Welcome back",
    subtitle: "Continue your language journey 👋",
    cta: "Log In",
    footerPrompt: "Don't have an account?",
    footerAction: "Sign up",
    footerHref: "/sign-up",
  },
};

const OAUTH_STRATEGY: Record<SocialProvider, "oauth_google" | "oauth_facebook" | "oauth_apple"> =
  {
    google: "oauth_google",
    facebook: "oauth_facebook",
    apple: "oauth_apple",
  };

function getMessage(error: unknown, fallback = "Something went wrong. Please try again.") {
  if (isClerkAPIResponseError(error)) {
    return error.errors[0]?.longMessage ?? error.errors[0]?.message ?? fallback;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return fallback;
}

export function AuthScreen({ mode }: AuthScreenProps) {
  const router = useRouter();
  const copy = COPY[mode];

  const { signIn, errors: signInErrors, fetchStatus: signInFetchStatus } = useSignIn();
  const { signUp, errors: signUpErrors, fetchStatus: signUpFetchStatus } = useSignUp();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [verifyError, setVerifyError] = useState<string | null>(null);
  const [socialLoading, setSocialLoading] = useState<SocialProvider | null>(null);

  const submitting =
    mode === "sign-up" ? signUpFetchStatus === "fetching" : signInFetchStatus === "fetching";
  const verifyLoading = submitting;

  const goHome = (decorateUrl: (url: string) => string) => {
    const target = decorateUrl("/");
    if (Platform.OS === "web" && target.startsWith("http")) {
      window.location.href = target;
      return;
    }
    router.replace("/");
  };

  const handleSubmit = async () => {
    setFormError(null);

    if (mode === "sign-up") {
      const { error } = await signUp.password({ emailAddress: email, password });
      if (error) {
        setFormError(
          signUpErrors.fields.emailAddress?.message ??
            signUpErrors.fields.password?.message ??
            getMessage(error),
        );
        return;
      }

      const { error: sendError } = await signUp.verifications.sendEmailCode();
      if (sendError) {
        setFormError(getMessage(sendError));
        return;
      }

      setVerifying(true);
      return;
    }

    const { error } = await signIn.emailCode.sendCode({ emailAddress: email });
    if (error) {
      setFormError(signInErrors.fields.identifier?.message ?? getMessage(error));
      return;
    }

    setVerifying(true);
  };

  const handleVerify = async (code: string): Promise<boolean> => {
    setVerifyError(null);

    if (mode === "sign-up") {
      const { error } = await signUp.verifications.verifyEmailCode({ code });
      if (error) {
        setVerifyError(signUpErrors.fields.code?.message ?? getMessage(error));
        return false;
      }

      const { error: finalizeError } = await signUp.finalize({
        navigate: ({ decorateUrl }) => goHome(decorateUrl),
      });
      if (finalizeError) {
        setVerifyError(getMessage(finalizeError));
        return false;
      }

      setVerifying(false);
      return true;
    }

    const { error } = await signIn.emailCode.verifyCode({ code });
    if (error) {
      setVerifyError(signInErrors.fields.code?.message ?? getMessage(error));
      return false;
    }

    const { error: finalizeError } = await signIn.finalize({
      navigate: ({ decorateUrl }) => goHome(decorateUrl),
    });
    if (finalizeError) {
      setVerifyError(getMessage(finalizeError));
      return false;
    }

    setVerifying(false);
    return true;
  };

  const handleSocialAuth = async (provider: SocialProvider) => {
    setFormError(null);
    setSocialLoading(provider);

    try {
      const { createdSessionId, setActive, signUp } = await startSSOFlow({
        strategy: OAUTH_STRATEGY[provider],
      });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
        return;
      }

      if (signUp?.status === "missing_requirements") {
        setFormError(
          "This account needs a bit more info to finish signing up. Please continue with email instead.",
        );
      }
      // No createdSessionId and no missing requirements → user cancelled the browser flow; do nothing.
    } catch (error) {
      setFormError(getMessage(error));
    } finally {
      setSocialLoading(null);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingBottom: 24 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            hitSlop={12}
            className="mt-2 h-10 w-10 items-center justify-center"
          >
            <Ionicons name="chevron-back" size={26} color={colors.ink} />
          </TouchableOpacity>

          <View className="mt-4">
            <Text className="h1 text-ink">{copy.title}</Text>
            <Text className="body-lg text-muted mt-2">{copy.subtitle}</Text>
          </View>

          <View className="relative items-center justify-center py-6">
            <Ionicons
              name="sparkles"
              size={18}
              color={colors.warning}
              style={{ position: "absolute", left: "16%", top: "4%" }}
            />
            <Ionicons
              name="sparkles"
              size={16}
              color={colors.accentBlue}
              style={{ position: "absolute", right: "14%", top: "8%" }}
            />
            <Ionicons
              name="sparkles"
              size={14}
              color={colors.streak}
              style={{ position: "absolute", right: "22%", bottom: "6%" }}
            />
            <Image
              source={images.mascotWelcome}
              style={{ width: 160, height: 160 }}
              resizeMode="contain"
            />
          </View>

          <View className="gap-4">
            <AuthInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="alex@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {mode === "sign-up" && (
              <AuthInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                rightElement={
                  <TouchableOpacity onPress={() => setShowPassword((v) => !v)} hitSlop={8}>
                    <Ionicons
                      name={showPassword ? "eye-off-outline" : "eye-outline"}
                      size={20}
                      color={colors.muted}
                    />
                  </TouchableOpacity>
                }
              />
            )}
          </View>

          {formError && (
            <Text className="body-sm text-error mt-3">{formError}</Text>
          )}

          <View className="mt-6">
            <PrimaryButton
              title={copy.cta}
              onPress={handleSubmit}
              loading={submitting}
              disabled={!email || (mode === "sign-up" && !password)}
            />
          </View>

          {mode === "sign-up" && <View nativeID="clerk-captcha" />}

          <View className="my-6 flex-row items-center gap-3">
            <View className="h-px flex-1 bg-border" />
            <Text className="body-sm text-muted">or continue with</Text>
            <View className="h-px flex-1 bg-border" />
          </View>

          <View className="gap-3">
            <SocialAuthButton
              provider="google"
              onPress={() => handleSocialAuth("google")}
              loading={socialLoading === "google"}
              disabled={socialLoading !== null}
            />
            <SocialAuthButton
              provider="facebook"
              onPress={() => handleSocialAuth("facebook")}
              loading={socialLoading === "facebook"}
              disabled={socialLoading !== null}
            />
            <SocialAuthButton
              provider="apple"
              onPress={() => handleSocialAuth("apple")}
              loading={socialLoading === "apple"}
              disabled={socialLoading !== null}
            />
          </View>

          <View className="flex-1 items-center justify-end pb-2 pt-6">
            <Text className="body-md text-muted">
              {copy.footerPrompt}{" "}
              <Text
                className="body-md text-primary"
                onPress={() => router.replace(copy.footerHref)}
              >
                {copy.footerAction}
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={verifying}
        email={email}
        loading={verifyLoading}
        error={verifyError}
        onClose={() => setVerifying(false)}
        onSubmit={handleVerify}
      />
    </SafeAreaView>
  );
}
