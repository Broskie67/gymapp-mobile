import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "./button";
import { TextLink } from "../components/textLink";
import { useState } from "react";
import { Host, Checkbox } from '@expo/ui';

export function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    console.log({ email, password });
  };

  const keepSigned = () => {
    console.log({ rememberMe })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput 
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput 
        style={styles.input}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="current-password"   
        textContentType="password"
      />
      <View style={styles.row}>
        <Host matchContents>
          <Checkbox label="Remember me" value={rememberMe} onValueChange={setRememberMe}/>
        </Host>
        <TextLink href="/" style={styles.forgot}>Forgot password</TextLink> 
      </View>
      <Button title="Sign in" onPress={handleSubmit} fullWidth style={{ marginTop: 24 }}/>

      <Text style={styles.footer}>
        Don't have an account?{' '}
        <TextLink href="/signUp" style={styles.link} >Sign Up</TextLink>
      </Text>
        

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  label: { fontSize: 13, color: '#888', marginBottom: 6, marginTop: 18 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  forgot: {
    color: '#000', 
    fontWeight: '600', 
    flexShrink: 0
  },
  footer:{
    fontSize: 13,
    color: '#888',
    textAlign: 'right',
    marginTop: 18,
  },
  link: { color: '#000', fontWeight: '700' }

});