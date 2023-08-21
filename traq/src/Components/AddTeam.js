import styled from "styled-components/native";
import CheckIcon from "../../assets/check.png";
import { TouchableOpacity } from "react-native";

export default function AddTeam({
  setTeamValue,
  setAddTeam,
  setTeamInput,
  teamInput,
}) {
  function setTeamFunction(value) {
    setTeamValue(value);
    setAddTeam(false);
  }
  function AddInputToTeamFunction() {
    if (teamInput !== "") {
      setTeamFunction(teamInput);
    }
  }
  return (
    <MainContainer>
      <Heading>Add New Team</Heading>
      <Container>
        <TextInput
          placeholder='Last , First'
          value={teamInput}
          onChangeText={(e) => setTeamInput(e)}
        />
        <TouchableOpacity onPress={() => AddInputToTeamFunction()}>
          <Image
            source={CheckIcon}
            resizeMethod='resize'
            resizeMode='contain'></Image>
        </TouchableOpacity>
      </Container>

      <Heading>Select Team</Heading>

      {Data.map((v) => (
        <TouchableOpacity key={v.id} onPress={() => setTeamFunction(v.name)}>
          <ListItom>{v.name}</ListItom>
        </TouchableOpacity>
      ))}
    </MainContainer>
  );
}

const MainContainer = styled.View`
  width: 100%;
  height: 85%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: col;
  padding: 10px;
`;

const Container = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 12%;
  margin-top: 2%;
`;
const TextInput = styled.TextInput`
  width: 75%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  padding: 5px;
  background: white;
`;
const Image = styled.Image`
  height: 35px;
  width: 35px;
  margin-left: 14px;
`;
const Heading = styled.Text`
  font-size: 40px;
  color: white;
  font-weight: 400;
  text-align: center;
  padding: 5px;
`;
const ListItom = styled.Text`
  font-size: 35px;
  color: #61c6b8;
  font-weight: 400;
`;

const Data = [
  { id: 1, name: "Acrobatics" },
  { id: 2, name: "Archery" },
  { id: 3, name: "Boxing (Men’s)" },
  { id: 4, name: "Boxing (Women’s)" },
];
