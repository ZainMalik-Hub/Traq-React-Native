import { useEffect, useState } from "react";
import styled from "styled-components/native";
import React from "react";
import ComputerImage from "../../assets/person.jpg";

export default function Profile({ navigation }) {
  return (
    <Container>
      <Text>You Have Chosen</Text>
      <Name>Kimberly Daly</Name>

      <Image
        source={ComputerImage}
        resizeMethod='resize'
        resizeMode='contain'
      />
      <View>
        <Text>Personalized 1-on-1 Atention</Text>
        <Text>Certified Daily Feedback</Text>
        <Text>Life Changing Results</Text>
      </View>
      <Text2>Hire Kimberly to help you</Text2>

      <Footer>
        <Bold>Lose 10lbs </Bold>
        <Text>and</Text>

        <Bold>Have More Energy</Bold>
      </Footer>
    </Container>
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
const Text = styled.Text`
  font-size: 15px;
  color: white;
  opacity: 0.7;
  font-weight: 300;
`;
const Name = styled.Text`
  font-size: 44px;
  color: white;
  font-weight: 300;
  margin-top: 2%;
  margin-bottom: 4%;
`;
const Image = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 10%;
  margin-bottom: 4%;

  border-radius: 50px;
`;
const View = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: col;
  justify-content: center;
  margin-top: 4%;
`;
const Text2 = styled.Text`
  font-size: 15px;
  color: white;
  opacity: 0.7;
  font-weight: 300;
  margin-top: 15%;
`;
const Bold = styled.Text`
  font-size: 15px;
  color: white;
  font-weight: 400;
  margin-left: 6px;
`;

const Heading = styled.Text`
  font-size: 33px;
  color: #0c75c6;
  font-weight: 400;
  margin-right: 8px;
`;
const Footer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
