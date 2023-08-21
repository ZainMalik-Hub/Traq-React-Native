import { StatusBar } from "react-native";
import styled from "styled-components/native";
import Header from "../Components/Header";
export default function ScreenWrapper({ children }) {
  return (
    <Container>
      <StatusBar animated={true} showHideTransition={"slide"} hidden={false} />
      <Header />
      <View>{children}</View>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #050505;
  align-items: center;
`;
const View = styled.View`
  width: 100%;
  height: 84%;
  align-items: center;
`;
