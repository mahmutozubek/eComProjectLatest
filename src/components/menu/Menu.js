import React, { useState } from "react";
import {
  View,
  ImageBackground,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

import ImageBg from "../imagebackground/imagebg";
import styles from "./Menu.style";
import Header from "../headerMenu/Header";
import avatarData from "../../avatardata.json";
import AvatarDataCard from "../avatarDataCard/AvatarDataCard";
import CardData from "../../cardata.json";
import MidCard from "../midCard/MidCard";
import BottomCardData from "../../bottomCard.json";
import BottomCard from "../bottomCard/BottomCard";
import Search from "../search/Search";
import ElementHeaders from "../element/elementcomponents/elementHeaders";

const image = { uri: "https://i.hizliresim.com/6ep42tk.png" };

function Menu({ navigation }) {
  function navigateToSideScreen() {
    navigation.navigate("SideScreen");
  }
  function navigateToShopingScreen() {
    navigation.navigate("ShopingScreen");
  }

  const renderMidCard = ({ item }) => <MidCard {...item} />;
  const renderBottomCard = ({ item }) => <BottomCard {...item} />;
  const renderAvatar = ({ item }) => <AvatarDataCard {...item} />;

  const [list, setList] = useState(
    CardData.filter((product) => product.categories === "Popular")
  );
  const DUMMY_CATEGORIES = [
    {
      id: 1,
      title: "Popular",
    },
    {
      id: 2,
      title: "Trending",
    },
    {
      id: 3,
      title: "Latest",
    },
    {
      id: 4,
      title: "Reated",
    },
    {
      id: 5,
      title: "Budget",
    },
  ];
  const filterProducts = (item) => {
    const filteredList = CardData.filter((x) => x.categories == item.title);
    setList(filteredList);
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={{
        padding: 10,
        margin: 3,
      }}
      onPress={() => filterProducts(item)}
    >
      <Text style={{ fontSize: 16, fontWeight: "700" }}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image} resizeMode="cover">
        <ScrollView>
          <View style={{ height: 80, marginBottom: 45 }}>
            <Header
              header="Discover"
              onPressShoping={navigateToShopingScreen}
              onPressDrawer={navigateToSideScreen}
            />
          </View>

          <Search />

          <FlatList
            data={avatarData}
            renderItem={renderAvatar}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator ={false}
            contentContainerStyle={{ paddingRight: 16, paddingLeft: 8 }}
          />
          <View style={styles.buttons}>
            <FlatList
              data={DUMMY_CATEGORIES}
              renderItem={renderCategory}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator ={false}
              scrollEnabled={false}
            />
          </View>

          <FlatList
            data={list}
            renderItem={renderMidCard}
            keyExtractor={(item) => item.id}
            numColumns={1}
            horizontal={true}
          />

          <FlatList
            data={BottomCardData}
            renderItem={renderBottomCard}
            numColumns={2}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default Menu;
