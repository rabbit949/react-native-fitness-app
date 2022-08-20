import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LogoutIcon, UserIcon } from "react-native-heroicons/outline";
import { auth } from "../Firebase";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.View
          className=" p-1 bg-purple-300  rounded-full"
          animation="bounceIn"
          duration={1500}>
          <Image
            source={{ uri: auth?.currentUser?.photoURL }}
            style={styles.logo}
            className="rounded-full"
          />
        </Animatable.View>
        <Text style={styles.titleHeader}>{auth?.currentUser?.displayName}</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Profile Settings</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => {}}>
            <LinearGradient
              colors={["#8860A2", "#C7B8F5"]}
              style={styles.signIn}>
              <Text style={styles.textSign}>Edit Profile</Text>
              <UserIcon style={{ marginLeft: 5 }} size={15} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => {}}>
            <LinearGradient
              colors={["#8860A2", "#C7B8F5"]}
              style={styles.signIn}>
              <Text style={styles.textSign}>Sign Out</Text>
              <LogoutIcon style={{ marginLeft: 10 }} size={15} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SettingsScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C7B8F5",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 70,
    paddingHorizontal: 40,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  titleHeader: {
    marginTop: 15,
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
