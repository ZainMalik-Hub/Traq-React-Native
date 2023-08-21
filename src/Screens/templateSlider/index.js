import React, { useRef, useState } from "react";
import { View, ScrollView, Dimensions, Animated } from "react-native";
import ScreenWrapper from "../../Components/ScreenWrapper";
import styled from "styled-components/native";
import SmallHeader from "../../Components/SmallHeader";
import Hydration from "../../Components/Hydration";
import Result from "../../Components/result";
import ResultScreen from "../../Components/resultCom";
import Profile from "../../Components/profileCom";
const { width } = Dimensions.get("window");

import HomeScreen from "../HomeScreen";
import TestScreen from "../TestScreen";

const Slideshow = ({ navigation }) => {
  const photos = [
    {
      component: <HomeScreen navigation={navigation} />,
    },
    {
      component: <TestScreen navigation={navigation} />,
    },
    {
      component: (
        <MainContainer>
          <SmallHeader navigation={navigation} />

          <Container>
            <Message>Please turn on device</Message>
          </Container>
        </MainContainer>
      ),
    },
    {
      component: (
        <MainContainer>
          <SmallHeader navigation={navigation} />

          <Container>
            <Message>Connecting...</Message>
          </Container>
        </MainContainer>
      ),
    },
    {
      component: (
        <MainContainer>
          <SmallHeader navigation={navigation} />
          <Container>
            <Message>Please insert</Message>
            <Message>test cartridge.</Message>
          </Container>
        </MainContainer>
      ),
    },
    {
      component: <Hydration />,
    },
    {
      component: <Result />,
    },
    {
      component: <ResultScreen />,
    },
    {
      component: <Profile />,
    },
  ];

  const scrollX = useRef(new Animated.Value(0)).current;

  const position = Animated.divide(scrollX, width);

  return (
    <ScreenWrapper>
      <View style={{ width }}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}>
          {photos.map((source, i) => (
            <View key={i} style={{ width }}>
              {source.component}
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row" }}>
        {photos.map((_, i) => {
          const opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: "#595959",
                margin: 8,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    </ScreenWrapper>
  );
};

export default Slideshow;

const MainContainer = styled.View`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: col;
`;
const Message = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: 400;
  text-align: center;
  padding: 5px;
`;
const Container = styled.View`
  width: 100%;
  height: 85%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: col;
  padding: 10px;
`;
