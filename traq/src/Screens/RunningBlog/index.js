import styled from "styled-components/native";
import React, { useEffect } from "react";
import BurgerMenuIcon from "../../../assets/burgerMenu.png";
import FacebookIcon from "../../../assets/facebook.png";
import TwitterIcon from "../../../assets/twitter.png";
import PinterestIcon from "../../../assets/pintrest.png";

import FoodImage from "../../../assets/food.jpg";

import { StatusBar } from "react-native";

export default function RunningBlogScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.navigate("SelfBlog"), 4500);
  }, []);
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
          <Self>Running</Self>
        </Header>

        <SignUp>Subscribe</SignUp>
      </Section>
      <Container>
        <Name>6 Foods That Will Help You Stay Hydrated</Name>

        <TextWrapper>
          BY <ColoredText>ASHLAY LAUTRETTA</ColoredText> PUBLISHED JUN. 28, 2016
          UPDATED JUL. 13, 2016
        </TextWrapper>
        <Text></Text>

        <Socail>
          <FacebookBox>
            <Facebook
              source={FacebookIcon}
              resizeMethod='resize'
              resizeMode='contain'
            />
          </FacebookBox>
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
          source={FoodImage}
          resizeMethod='resize'
          resizeMode='contain'
        />
        <TextWrapper>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </TextWrapper>
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
  background: black;
  height: 8%;
  padding-left: 15px;
  padding-right: 15px;
`;
const Header = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 90%;
`;
const Image = styled.Image`
  width: 32px;
  height: 32px;
`;
const Self = styled.Text`
  font-size: 24px;
  color: #f2008e;
  opacity: 0.7;
  font-weight: 700;
  margin-left: 7px;
`;
const TextWrapper = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #9c9c9b;
  margin-top: 4px;
  line-height: 20px;
`;

const ColoredText = styled.Text`
  font-size: 14px;
  color: #4a6189;
  font-weight: 400;
`;

const SignUp = styled.Text`
  font-size: 10px;
  color: #2dc2b0;
  opacity: 0.7;
  font-weight: 800;
`;

const Container = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: col;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

const Socail = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 5%;
`;
const Text = styled.Text`
  font-size: 15px;
  color: #9c9c9b;
  font-weight: 300;
  margin-top: 1%;
`;
const Name = styled.Text`
  font-size: 26px;
  color: black;
  font-weight: 500;
  margin-top: 3%;
  margin-bottom: 4%;
`;

const Pinterest = styled.Image`
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
  max-height: 250px;
`;

const FacebookBox = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #3b5897;
`;
const YellowBox = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #b60e11;
`;
const Box = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #57a6e8;
  margin-left: 10px;
  margin-right: 10px;
`;
