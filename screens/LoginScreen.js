import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LockClosedIcon, MailIcon } from "react-native-heroicons/outline";
import { auth } from "../Firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("Stack", {
          screen: "Home",
        });
      }
    });
    return unsubscribe;
  }, []);

  const logIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) =>
        Alert.alert("Invalid Credentials", "The email or password is invalid"),
      );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#C7B8F5" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <MailIcon size={20} color={"#8860A2"} />
          <TextInput
            placeholder="Enter Email"
            keyboardType="email-address"
            style={styles.textInput}
            autoCapitalize="none"
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <LockClosedIcon size={20} color={"#8860A2"} />
          <TextInput
            placeholder="Enter Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={true}
            type="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={logIn}>
            <LinearGradient
              style={styles.signIn}
              colors={["#8860A2", "#C7B8F5"]}>
              <Text style={[styles.textSign, { color: "#fff" }]}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.signIn,
              { borderColor: "#8860A2", borderWidth: 1, marginTop: 20 },
            ]}
            onPress={() => navigation.navigate("Register")}>
            <Text style={[styles.textSign, { color: "#8860A2" }]}>
              Register Account
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C7B8F5",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 34,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
    marginTop: 30,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
