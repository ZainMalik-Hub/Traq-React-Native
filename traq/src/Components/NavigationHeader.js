import styled from "styled-components/native";
import Chart from "../../assets/square.png";
import Settings from "../../assets/settings.png";
import Reload from "../../assets/reload.png";
import Info from "../../assets/info.png";

export default function NavigationHeader({ navigation }) {
  return (
    <Container>
      <Text>Email</Text>
      <IconContainer>
        <TouchableOpacity onPress={() => navigation.navigate("graph")}>
          <Icon source={Chart} resizeMethod='resize' resizeMode='contain' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("setting")}>
          <SettingIcon
            source={Settings}
            resizeMethod='resize'
            resizeMode='contain'
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Logs")}>
          <Icon source={Reload} resizeMethod='resize' resizeMode='contain' />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("BioMakersScreen")}>
          <InfoIcon source={Info} resizeMethod='resize' resizeMode='contain' />
        </TouchableOpacity>
      </IconContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  background-color: #dcdbdb;
  align-items: center;
  justify-content: center;

  padding-right: 4%;
  padding-left: 4%;
  height: 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Text = styled.Text`
  font-size: 16px;
  color: #2dc2b0;
  font-weight: 400;
  text-align: center;
`;
const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-right: -16px;
`;
const SettingIcon = styled.Image`
  width: 28px;
  height: 28px;
`;
const InfoIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  margin-left: 9%;
`;
const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
