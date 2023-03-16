import React, { useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Onboardingitem from "./OnboardingItem";
import login from "../../login.json";
import { useState } from "react";
const { height, width } = Dimensions.get("window");
function Onboarding(props) {
  function navigateToSignIn() {
    props.navigation.navigate("SignInScreen");
  }

  const [list, setList] = useState(login);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={ref}
        data={list}
        renderItem={({ item }) => (
          <Animated.View style={{ height: 630 }}>
            <Onboardingitem item={item} />
          </Animated.View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex((x / width).toFixed(0));
        }}
        bounces={false}
        keyExtractor={(item) => item.u_id}
      />

      <View>
        <TouchableOpacity style={styles.button} onPress={navigateToSignIn}>
          <Text style={styles.textButton}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerDot}>
        {login.map((a, i) => {
          return (
            <View
              style={[
                styles.dot,
                {
                  backgroundColor: currentIndex == i ? "green" : "gray",
                  width: currentIndex == i ? 25 : 6,
                  height: currentIndex == i ? 10 : 6,
                  borderRadius: currentIndex == i ? 5 : 3,
                },
              ]}
              key={i.toString()}
            ></View>
          );
        })}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          style={styles.pn}
          onPress={() => {
            setCurrentIndex(currentIndex - 1);
            ref.current.scrollToIndex({
              animated: true,
              index: parseInt(currentIndex) - 1,
            });
          }}
        >
          <Text style={styles.textButton}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pn}
          onPress={() => {
            setCurrentIndex(currentIndex + 1);
            ref.current.scrollToIndex({
              animated: true,
              index: parseInt(currentIndex) + 1,
            });
          }}
        >
          <Text style={styles.textButton}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Onboarding;

const styles = StyleSheet.create({
  pn: {
    width: 150,
    backgroundColor: "orange",
    padding: 10,
  },
  container: {
    backgroundColor: "#e0e0e0",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: 50,
    marginHorizontal: 30,
    backgroundColor: "#00bfff",
    marginTop: 30,
  },
  textButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  containerDot: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    height: 64,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
});
