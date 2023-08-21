import { useEffect, useState } from "react";
import styled from "styled-components/native";
import ScreenWrapper from "../../Components/ScreenWrapper";
import React from "react";
import AnimatedLoader from "../../Components/AnimatedLoader";
import ComputerImage from "../../../assets/computer.png";

export default function DocterScreen() {
  return (
    <ScreenWrapper>
      <Container>
        <View>
          <Heading>Hydration</Heading>
          <AnimatedLoader value={63} size='small' />
        </View>
        <Image
          source={ComputerImage}
          resizeMethod='resize'
          resizeMode='contain'
        />
        <Name>Dr. J.R. Smith</Name>
        <View>
          <Text>Share Results?</Text>
          <Text>Call</Text>
        </View>
      </Container>
    </ScreenWrapper>
  );
}

const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: col;
  justify-content: center;
  height: 100%;
`;
const View = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Heading = styled.Text`
  font-size: 33px;
  color: #0c75c6;
  font-weight: 400;
  margin-right: 8px;
`;
const Image = styled.Image`
  width: 70%;
  max-height: 30%;
  margin-top: 10%;
  margin-bottom: 4%;
`;
const Name = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: 400;
  margin-top: 2%;
`;
const Text = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: 400;
  margin-top: 2%;
  text-decoration-line: underline;
  margin-left: 6px;
`;
