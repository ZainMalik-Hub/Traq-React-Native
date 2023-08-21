import styled from "styled-components/native";
import React from "react";
import { StatusBar } from "react-native";
import Cross from "../../../assets/cross.png";
import Upload from "../../../assets/upload.png";
export default function LogsScreen() {
  return (
    <MainContainer>
      <StatusBar animated={true} showHideTransition={"slide"} hidden={false} />
      <Section>
        <Image source={Cross} />
        <View>
          <Text>Clear Logs</Text>
          <Image2 source={Upload} />
        </View>
      </Section>
      <ScrollContainer>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
        <Item>AdvertismentData is coming as nill</Item>
        <Item>Could read name</Item>
      </ScrollContainer>
    </MainContainer>
  );
}
const MainContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: start;
`;
const Section = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  background: #050505;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
  padding-left: 10px;
`;
const ScrollContainer = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: col;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
`;
const View = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const Image = styled.Image`
  width: 30px;
  height: 30px;
`;
const Image2 = styled.Image`
  width: 25px;
  height: 25px;
`;

const Item = styled.Text`
  font-size: 15px;
  color: gray;
  font-weight: 400;
  margin-right: 5px;
`;
const Text = styled.Text`
  font-size: 18px;
  color: #61c6b8;
  font-weight: 300;
  margin-top: 2%;
  margin-left: 6px;
  margin-right: 10px;
`;
