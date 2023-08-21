import styled from "styled-components/native";
import React, { useEffect } from "react";
import BurgerMenuIcon from "../../../assets/burger.png";
import SearchIcon from "../../../assets/search.png";
import Verticle from "../../../assets/verticle.png";
import { StatusBar } from "react-native";
import Graph from "../../Components/graph";

export default function TestHistoryScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.navigate("RunningBlog"), 4500);
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
        </Header>
        <Hydration>Hydration </Hydration>
        <Search>
          <SerachIcon
            source={SearchIcon}
            resizeMethod='resize'
            resizeMode='contain'
          />
          <VerticleIcon
            source={Verticle}
            resizeMethod='resize'
            resizeMode='contain'
          />
        </Search>
      </Section>
      <Section2>
        <Line></Line>
        <CirclesContainer>
          <Circle1>
            <CircleBadge>Bad</CircleBadge>
          </Circle1>

          <Circle2>
            <CircleText>63</CircleText>
          </Circle2>
          <Circle3>
            <CircleBadge>Good</CircleBadge>
          </Circle3>
        </CirclesContainer>
      </Section2>
      <Percent>+3 (12%)</Percent>
      <Container>
        <Graph />

        <View>
          <TextWrapper>SHARE RESULTS</TextWrapper>
        </View>
        {data?.map((v, k) => {
          return (
            <ListContainer key={k}>
              <List>
                <ListHead>{v?.name}</ListHead>
                <ListDescription>{v?.des}</ListDescription>
              </List>

              <ListView>View</ListView>
            </ListContainer>
          );
        })}
      </Container>
    </MainContainer>
  );
}
const data = [
  {
    name: "Improve your fitness",
    des: "Top 10 Trainers in your Area",
  },
  {
    name: "Goal Tracking",
    des: "Set a personal Fitness Goal",
  },
  {
    name: "Enter a Challenge",
    des: "Fitness Challenge",
  },
];
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
  background: white;
  height: 8%;
  padding-left: 15px;
  padding-right: 15px;
`;
const Percent = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #9c9c9b;
  margin-top: 9px;
  margin-left: 35px;
`;
const ListHead = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: gray;
  opacity: 0.6;
`;
const ListDescription = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: black;
  opacity: 0.6;
`;
const ListView = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #3ebb91;
  opacity: 0.6;
`;
const Line = styled.View`
  width: 100%;
  background: gray;
  height: 1.5px;
  opacity: 0.2;
  position: relative;
`;
const List = styled.View``;
const CirclesContainer = styled.View`
  width: 100%;
  background: red;
  height: 20px;
  background: transparent;
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 15px;
`;
const Circle1 = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 100px; /* half of width and height to make it a circle */
  background-color: #d52427;
  align-items: center;
  justify-content: center;
`;
const Circle2 = styled.View`
  width: 65px;
  height: 65px;
  border-radius: 100px; /* half of width and height to make it a circle */
  background-color: #fbaf17;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;
const Circle3 = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 100px; /* half of width and height to make it a circle */
  background-color: #2da07e;
  align-items: center;
  justify-content: center;
`;
const CircleText = styled.Text`
  font-size: 35px;
  font-weight: 600;
  color: white;
`;

const Section2 = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  height: 8%;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
`;
const Header = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 90%;
`;
const Search = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 90%;
`;
const Image = styled.Image`
  width: 27px;
  height: 27px;
`;
const SerachIcon = styled.Image`
  width: 23px;
  height: 20px;
  margin: 2px;
`;
const VerticleIcon = styled.Image`
  width: 20px;
  height: 16px;
  margin: 2px;
`;
const Hydration = styled.Text`
  font-size: 24px;
  color: black;
  opacity: 0.7;
  font-weight: 400;
  margin-left: 10%;
`;
const TextWrapper = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: white;
  line-height: 20px;
`;

const CircleBadge = styled.Text`
  font-size: 11px;
  font-weight: 400;
  color: white;
`;

const Container = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: col;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

const View = styled.View`
  justify-content: flex-end;
  align-items: end;
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  background: #3ebb91;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 5px;
  padding-right: 10px;
`;
const ListContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  justify-content: space-between;
  background: #e4e6eb;
  padding-top: 9px;
  padding-bottom: 9px;
  margin-top: 8px;
  padding-right: 10px;
  padding-left: 10px;
`;
