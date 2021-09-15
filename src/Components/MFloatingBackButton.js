import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { width } from "styled-system";

const MFloatingButton = ({ icon, onPress, style }) => {
  return (
    <TouchableOpacity
      style={{
        ...style,
        width: 45,
        height: 45,
        position: "absolute",
        backgroundColor: "#FC6011",
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <FontAwesome name="long-arrow-left" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default MFloatingButton;
