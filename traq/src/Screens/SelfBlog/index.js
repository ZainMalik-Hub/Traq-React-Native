import styled from "styled-components/native";
import React, { useEffect } from "react";
import BurgerMenuIcon from "../../../assets/burger.png";
import FacebookIcon from "../../../assets/facebook.png";
import TwitterIcon from "../../../assets/twitter.png";
import PinterestIcon from "../../../assets/pintrest.png";

import GirlImage from "../../../assets/girl.jpg";

import { StatusBar } from "react-native";

export default function SelfBlogScreen({ navigation }) {
  // useEffect(() => {
  //   setTimeout(() => navigation.navigate("ProfileScreen"), 4500);
  // }, []);
  return (
    <MainContainer>
      <StatusBar animated={true} showHideTransition={"slide"} hidden={false} />
      <Section>
        <Header>
          <Image
            source={BurgerMenuIcon}
            resizeMethod='resize'
            resizeMode='contain'
          />
        </Header>
        <Self>SELF </Self>
        <SignUp>SIGN UP</SignUp>
      </Section>
      <Container>
        <Name>6 Reasons You're Always Thirsty</Name>
        <ViewBlue></ViewBlue>
        <Text>From Simple dietary habits to actual health conditions.</Text>
        <Socail>
          <YellowBox>
            <Facebook
              source={FacebookIcon}
              resizeMethod='resize'
              resizeMode='contain'
            />
          </YellowBox>
          <Box>
            <Twitter
              source={TwitterIcon}
              resizeMethod='resize'
              resizeMode='contain'
            />
          </Box>
          <YellowBox>
            <Pinterest
              source={PinterestIcon}
              resizeMethod='resize'
              resizeMode='contain'
            />
          </YellowBox>
        </Socail>

        <BlogImage
          source={GirlImage}
          resizeMethod='resize'
          resizeMode='contain'
        />
      </Container>
    </MainContainer>
  );
}
const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  align-items: center;
`;
const Section = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4%;
  background: white;
  height: 8%;
  padding-left: 15px;
  padding-right: 15px;
`;
const Header = styled.View`
  width: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #ffdc02;
  height: 90%;
`;
const Self = styled.Text`
  font-size: 26px;
  color: black;
  opacity: 0.7;
  font-weight: 800;
`;
const SignUp = styled.Text`
  font-size: 10px;
  color: black;
  opacity: 0.7;
  font-weight: 800;
`;

const Container = styled.View`
  width: 100%;

  display: flex;
  flex-direction: col;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;
const Socail = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 8%;
`;
const ViewBlue = styled.View`
  width: 36%;

  height: 8px;
  background: #2a49ad;
  margin-top: 3%;
`;
const Text = styled.Text`
  font-size: 15px;
  color: #9c9c9b;
  opacity: 0.7;
  font-weight: 300;
  margin-top: 8%;
`;

const Name = styled.Text`
  font-size: 36px;
  color: black;
  font-weight: 500;
  margin-top: 2%;
  margin-bottom: 4%;
`;

const Pinterest = styled.Image`
  width: 28px;
  height: 28px;
`;
const Image = styled.Image`
  width: 28px;
  height: 28px;
`;
const Facebook = styled.Image`
  width: 22px;
  height: 22px;
`;
const Twitter = styled.Image`
  width: 24px;
  height: 24px;
`;
const BlogImage = styled.Image`
  width: 100%;
  margin-top: 4%;
  max-height: 200px;
`;

const YellowBox = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #fa6629;
`;
const Box = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #ea3029;
`;
