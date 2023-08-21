import styled from "styled-components/native";
import CoachIcon from "../../../assets/coach.png";
import IndividualIcon from "../../../assets/individual.png";
import ScreenWrapper from "../../Components/ScreenWrapper";
import NavigationHeader from "../../Components/NavigationHeader";
export default function HomeScreen({ navigation, onPress }) {
  return (
    <>
      <NavigationHeader navigation={navigation} />
      <Container>
        <View>
          <Text>Individual</Text>
          <Image
            source={IndividualIcon}
            resizeMethod='resize'
            resizeMode='contain'></Image>
        </View>

        <View>
          <Text>Coach</Text>
          <Image
            source={CoachIcon}
            resizeMethod='resize'
            resizeMode='contain'></Image>
        </View>
      </Container>
    </>
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
const View = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin: 17px;
`;
const Text = styled.Text`
  font-size: 38px;
  color: #61c6b8;
  font-weight: 400;
`;
const Image = styled.Image`
  height: 38px;
  width: 38px;
  margin: 8px;
`;
