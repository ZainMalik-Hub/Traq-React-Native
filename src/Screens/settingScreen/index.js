import styled from "styled-components/native";
import React from "react";
import { StatusBar } from "react-native";
import Cross from "../../../assets/cross.png";
import Back from "../../../assets/back.png";
export default function SettingScreen() {
  return (
    <MainContainer>
      <StatusBar animated={true} showHideTransition={"slide"} hidden={false} />
      <Section>
        <View>
          <Image2 source={Back} />
          <Text>Back</Text>
        </View>
        <SaveButton>
          <Text2>Save</Text2>
        </SaveButton>
      </Section>

      <ScrollContainer>
        <Container>
          <Line></Line>
          <List>
            <Item1>a value</Item1>
            <Item2>12.0</Item2>
          </List>
          <Line></Line>
          <List>
            <Item1>b value</Item1>
            <Item2>0.061669</Item2>
          </List>
          <Line></Line>
          <List>
            <Item1>c value</Item1>
            <Item2>-75.06358</Item2>
          </List>
          <Line></Line>
          <List2>
            <Item3>time limit (s)</Item3>
            <Item3>30.0</Item3>
            <Switch value={true} />
          </List2>
          <Line></Line>
          <List2>
            <Item3>Sample limit</Item3>
            <Item3>30.0</Item3>
            <Switch value={true} />
          </List2>
          <Line></Line>
          <List>
            <Item3>Units</Item3>
            <Item3>mg/dl</Item3>
            <Item3></Item3>
          </List>

          <Line></Line>
        </Container>
      </ScrollContainer>
    </MainContainer>
  );
}
const MainContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: start;
`;
const Container = styled.View`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 8%;
`;
const SaveButton = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  background: #6b6b6b;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 11px;
  padding-left: 11px;
  border-radius: 5px;
`;

const Switch = styled.Switch``;

const Section = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  background: gray;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
  padding-left: 10px;
`;

const List = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  padding-top: 12px;
  padding-bottom: 12px;
`;
const List2 = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;
const Item1 = styled.Text`
  font-size: 16px;
  color: gray;
  font-weight: 400;
  width: 70%;
`;
const Item2 = styled.Text`
  font-size: 15px;
  color: gray;
  font-weight: 400;
  width: 70%;
`;
const Item3 = styled.Text`
  font-size: 15px;
  color: gray;
  font-weight: 400;
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  background: #bdbdbd;
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
const Image2 = styled.Image`
  width: 25px;
  height: 25px;
`;

const Text2 = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 300;
`;
const Text = styled.Text`
  font-size: 18px;
  color: #61c6b8;
  font-weight: 300;
  margin-top: 2%;
  margin-left: 6px;
  margin-right: 10px;
`;
