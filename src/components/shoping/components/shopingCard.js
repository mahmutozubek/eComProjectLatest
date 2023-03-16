import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./shopingCard.style";
export default function ShopingCard({ item, deleteItem }) {
  return (
    <View style={styles.dataContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.shopingImage} source={{ uri: item.imageUrl }} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{item.name}</Text>
        <Text style={styles.textLocation}>{item.location}</Text>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 15, width: 15, marginTop: 2 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/477/477406.png",
            }}
          />
          <Text style={styles.textReview}>{item.review} review</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.deleteImageContainer}
        onPress={() => deleteItem(item)}
      >
        <Image
          style={styles.deleteImage}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/458/458594.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
