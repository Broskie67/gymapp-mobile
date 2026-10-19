import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../common/button";
import { TextLink } from "../common/textLink";
import { useAuthStore } from "@/store/authStore";
import { ApiError } from "@/api/clients";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type SignUpData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignUpForm() {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignUpData>({
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit: SubmitHandler<SignUpData> = async (data) => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full name</Text>
      <Controller
        control={control}
        name="name"
        rules={{
          required: "Name is required"
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input]}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType="default"
            autoCapitalize="words"
            autoCorrect={false}
            autoComplete="name"
            textContentType="name"
            returnKeyType="next"
          />
        )}
      />
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
            style={[styles.input]}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
        )}
      />
      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        name="password"
        rules={{ required: "Password is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={styles.passwordWrapper}
          >
            <TextInput
              style={styles.passwordInput}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="current-password"
              textContentType="password"
            />
          </View>
        )}
      />
      <Text style={styles.label}>Confirm password</Text>
      <Controller
        control={control}
        name="confirmPassword"
        rules={{ required: "Confirm password is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={styles.passwordWrapper}
          >
            <TextInput
              style={styles.passwordInput}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="current-password"
              textContentType="password"
            />
          </View>
        )}
      />

      <Button
        title={isSubmitting ? "Signing in..." : "Sign Up"}
        onPress={handleSubmit(onSubmit)}
        fullWidth
        style={{ marginTop: 24 }}
      />

      <Text style={styles.footer}>
        Already have an account?{" "}
        <TextLink href="/signIn" style={styles.link}>
          Sign In
        </TextLink>
      </Text>
    </View>
  )
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

