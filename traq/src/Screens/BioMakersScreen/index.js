import styled from "styled-components/native";
import React from "react";
import BurgerMenuIcon from "../../../assets/burgerMenu.png";
import SearchIcon from "../../../assets/search2.png";
import Verticle from "../../../assets/dots.png";
import { StatusBar } from "react-native";
import BioMakerList from "../../Components/BioMakerList";
import { useEffect } from "react";

export default function BioMakersScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.navigate("TestHistoryScreen"), 4500);
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
          <Circle1>
            <CircleBadge>JO</CircleBadge>
          </Circle1>
          <HeaderName>Jesse Owens</HeaderName>
        </Header>
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

      <BioMakerList />

      <Container>
        {data?.map((v, k) => {
          return (
            <ListContainer key={k}>
              <List>
                <ListHead>{v?.name}</ListHead>
                <ListDescription>{v?.des}</ListDescription>
              </List>

              <ListView>View Tips</ListView>
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
  background: #3ebb91;
  height: 8%;
  padding-left: 15px;
  padding-right: 15px;
`;
const List = styled.View``;

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

const HeaderName = styled.Text`
  font-size: 20px;
  color: white;
  opacity: 0.7;
  font-weight: 400;
  margin-left: 7px;
`;
const Circle1 = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 100px; /* half of width and height to make it a circle */
  background-color: white;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
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
const CircleBadge = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: black;
`;
const Container = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: col;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
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
