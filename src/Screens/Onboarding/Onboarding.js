import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Animated,
  Image,
  Dimensions,
} from "react-native";

import { MStatusBar, MButton } from "../../Components";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Onboardings = [
  {
    title: "Find Food You Love",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur vitae massa a interdum. Nunc non nulla id purus dignissim lobortis",
    img: require("../../Assets/firstscreen.png"),
  },
  {
    title: "Fast Delivery",
    description:
      "Fast food delivery to your home, office wherever you are,easy and affordable",
    img: require("../../Assets/delivery.png"),
  },
  {
    title: "Live Tracking",
    description:
      " Real time tracking of your food on the app once you have placed your order",
    img: require("../../Assets/tracking.png"),
  },
];
const Onboarding = ({navigation}) => {
  const [completed, setCompleted] = useState(false);

  const scrollX = new Animated.Value(0);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / width) === Onboardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => {
      scrollX.removeListener();
    };
  }, []);

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {Onboardings.map((item, index) => (
          <View key={index} style={{ width: width }}>
            {/* <View style={{
                           flex:1,
                           alignItems:"center",
                           justifyContent:"center",
                           marginBottom:100
                       }}> */}
            <Image
              source={item.img}
              style={{
                resizeMode: "contain",
                width: "100%",
                height: height * 0.75,
              }}
            ></Image>

            <View style={{ position: "absolute", bottom: "15%" }}>
              <Text
                style={{ color: "#4A4B4D", fontSize: 28, textAlign: "center" }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: width,
                  fontSize: 13,
                  marginVertical: 10,
                  color: "#7C7D7E",
                }}
              >
                {item.description}
              </Text>
            </View>

            {!completed && (
              <MButton
                onPress={() => navigation.navigate("HomeScreen")}
                bgcolor={"#FC6011"}
                style={{ justifyContent: "center", marginTop: 20 ,position:"absolute",bottom:10,width:width*0.95}}
              >
                Get Started
              </MButton>
            )}
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, width);
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          flexDirection: "row",
        }}
      >
        {Onboardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 17, 10],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={index}
              style={{
                width: dotSize,
                opacity: opacity,
                height: dotSize,
                borderRadius: 50,
                backgroundColor: "#FC6011",
                marginHorizontal: 5,
              }}
            ></Animated.View>
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <MStatusBar />
      <View>{renderContent()}</View>

      <View
        style={{
          position: "absolute",
          bottom: height > 700 ? "30%" : "16%",
        }}
      >
        {renderDots()}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
