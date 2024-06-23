import React, { useState } from 'react';
import { Alert, Button, Text } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../lib/supabase';
import { useAuth } from '../AuthProvider';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Logo = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: #000;
`;

const Dot = styled.Text`
  color: red;
`;

const Input = styled.TextInput`
  width: 80%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default function Login() {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error, data } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      Alert.alert('Login Error', error.message);
    } else {
      await login(data.session?.access_token ?? '');
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('Home');
    }
  };

  return (
    <Container>
      <Logo>
        <Dot>i</Dot>mpact
      </Logo>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </Container>
  );
}
