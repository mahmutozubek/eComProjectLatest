import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Header.style";
import { useNavigation } from "@react-navigation/native";

function Header({ header,}) {
  const navigation = useNavigation();
  function navigateToSideScreen() {
    navigation.navigate('SideScreen')
  }
  function navigateToShopingScreen() {
    navigation.navigate("ShopingScreen");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <TouchableOpacity onPress={navigateToSideScreen}>
          <Image
            style={styles.x}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/2516/2516745.png",
            }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Slice</Text>

        <TouchableOpacity title ="Open Drawer" onPress={navigateToShopingScreen}>
          <Image
            style={styles.x}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/743/743131.png",
            }}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>{header}</Text>
    </View>
  );
}

export default Header;
