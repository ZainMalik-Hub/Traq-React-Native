import styled from "styled-components/native";
import ScreenWrapper from "../../Components/ScreenWrapper";
import { TouchableOpacity } from "react-native";
import SmallHeader from "../../Components/SmallHeader";
import AddAthelete from "../../Components/AddAthelete";
import AddTeam from "../../Components/AddTeam";

import { useState } from "react";
export default function TestScreen({ navigation, onPress }) {
  const [error, setError] = useState(false);
  const [addAthelete, setAddAthlete] = useState(false);
  const [addTeam, setAddTeam] = useState(false);
  const [AthleteValue, setAthleteValue] = useState("Enter/Select Athlete");
  const [TeamValue, setTeamValue] = useState("Enter/Select Team");
  const [input, setInput] = useState("");
  const [teamInput, setTeamInput] = useState("");

  function TestFunction() {
    if (
      AthleteValue === "Enter/Select Athlete" ||
      TeamValue === "Enter/Select Team"
    ) {
      setError(true);
      setTimeout(() => setError(false), 1000);
    } else {
      navigation.navigate("ConnectionScreen");
    }
  }

  return (
    <MainContainer>
      {!error ? <SmallHeader navigation={navigation} /> : null}
      {error ? (
        <ErrorContainer>
          <Error>Please enter</Error>
          <Error>or</Error>
          <Error>select an athlete</Error>
        </ErrorContainer>
      ) : addAthelete ? (
        <AddAthelete
          setAthleteValue={setAthleteValue}
          setAddAthlete={setAddAthlete}
          input={input}
          setInput={setInput}
        />
      ) : addTeam ? (
        <AddTeam
          setTeamValue={setTeamValue}
          setAddTeam={setAddTeam}
          teamInput={teamInput}
          setTeamInput={setTeamInput}
        />
      ) : (
        <Container>
          <TouchableOpacity onPress={() => TestFunction()}>
            <Heading>Test</Heading>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setAddAthlete(true)}>
            <Text>{AthleteValue}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAddTeam(true)}>
            <Text>{TeamValue}</Text>
          </TouchableOpacity>

          <Footer>Import/Export</Footer>
        </Container>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.View`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: col;
`;
const Error = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: 400;
  text-align: center;
  padding: 5px;
`;
const ErrorContainer = styled.View`
  width: 100%;
  height: 85%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: col;
  padding: 10px;
  margin-top: 10%;
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
const Heading = styled.Text`
  font-size: 35px;
  color: #61c6b8;
  font-weight: 400;
  margin-bottom: 14%;
`;
const Footer = styled.Text`
  font-size: 35px;
  color: #61c6b8;
  font-weight: 400;
  margin-top: 14%;
`;
const Text = styled.Text`
  font-size: 35px;
  color: #61c6b8;
  font-weight: 400;
`;
