import { Checkbox, Host } from "@expo/ui";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../common/button";
import { TextLink } from "../common/textLink";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

type SignInData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInData>({
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  const onSubmit: SubmitHandler<SignInData> = async (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        name="password"
        rules={{ required: "Password is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={[
              styles.passwordWrapper,
              errors.password && styles.inputError,
            ]}
          >
            <TextInput
              style={styles.passwordInput}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="current-password"
              textContentType="password"
            />
            <Pressable
              onPress={() => setShowPassword((v) => !v)}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel={
                showPassword ? "Hide password" : "Show password"
              }
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#888"
              />
            </Pressable>
          </View>
        )}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}

      <View style={styles.row}>
        <Controller
          control={control}
          name="rememberMe"
          render={({ field: { onChange, value } }) => (
            <Host matchContents>
              <Checkbox
                label="Remember me"
                value={value}
                onValueChange={onChange}
              />
            </Host>
          )}
        />
        <TextLink href="/" style={styles.forgot}>
          Forgot password
        </TextLink>
      </View>

      <Button
        title={isSubmitting ? "Signing in..." : "Sign in"}
        onPress={handleSubmit(onSubmit)}
        fullWidth
        style={{ marginTop: 24 }}
      />

      <Text style={styles.footer}>
        Don't have an account?{" "}
        <TextLink href="/signUp" style={styles.link}>
          Sign Up
        </TextLink>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  label: { fontSize: 13, color: "#888", marginBottom: 6, marginTop: 18 },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 6,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },
  forgot: {
    color: "#000",
    fontWeight: "600",
    flexShrink: 0,
  },
  footer: {
    fontSize: 13,
    color: "#888",
    textAlign: "right",
    marginTop: 18,
  },
  link: {
    color: "#000",
    fontWeight: "700",
  },
  inputError: { borderColor: "#e53935" },
  error: { color: "#e53935", fontSize: 12, marginTop: 2 },
});
