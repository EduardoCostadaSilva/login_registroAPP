import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, TextInput } from "react-native-paper";
import { Context } from "../context/authContext";
const SignIn = ({ navigation }) => {
  const { state, teste } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [texto, setTexto] = useState("");
  const [style, setStyle] = useState();

  function seguir() {
    if (!email || !password) {
      setTexto("Preencha os campos acima!!!");
      setStyle(styles.textinhomagico);
    } else if (email && password) {
      setTexto("Sucesso!!!");
      setStyle(styles.textinhomagico2);
      navigation.navigate("Home");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.login}>Login</Text>
      <TextInput
        style={styles.textInput}
        label="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        left={<TextInput.Icon icon="at" size={25} color="black" />}
      />
      <TextInput
        style={styles.textInput}
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        left={<TextInput.Icon icon="lock" size={25} color="black" />}
        secureTextEntry={showPassword}
        right={
          showPassword ? (
            <TextInput.Icon
              icon="eye"
              size={25}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          ) : (
            <TextInput.Icon
              icon="eye-off"
              size={25}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          )
        }
      />
      <Button mode="contained" style={styles.loginButton} onPress={seguir}>
        Login
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>
          Não tem uma conta?{" "}
          <Text style={styles.createAccountText}>Crie uma</Text>
        </Text>
      </TouchableOpacity>
      <Text style={style}>{texto}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: "40%",
    alignSelf: "center",
    width: "80%",
  },
  login: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    marginBottom: 10,
  },
  loginButton: {
    padding: 5,
    margin: 20,
    width: "50%",
    alignSelf: "center",
  },
  createAccountText: {
    fontWeight: "bold",
    color: "#6200ee",
  },
  textinhomagico: {
    marginTop: 60,
    color: "red",
    border: "2 red solid",
    borderRadius: 10,
    padding: 10,
  },
  textinhomagico2: {
    marginTop: 60,
    color: "green",
    border: "2 green solid",
    borderRadius: 10,
    padding: 10,
  },
});
export default SignIn;
