import { useEffect, useState } from "react";
import styled from "styled-components/native";
import ScreenWrapper from "../../Components/ScreenWrapper";
import SmallHeader from "../../Components/SmallHeader";

export default function ConnectionScreen({ navigation }) {
  const [state, setState] = useState(1);
  useEffect(() => {
    setTimeout(() => setState(2), 2500);
    setTimeout(() => setState(3), 5000);
    setTimeout(() => navigation.navigate("ResultScreen"), 8000);
  }, []);

  return (
    <ScreenWrapper>
      <MainContainer>
        <SmallHeader navigation={navigation} />
        {state === 1 && (
          <Container>
            <Message>Please turn on device</Message>
          </Container>
        )}
        {state === 2 && (
          <Container>
            <Message>Connecting...</Message>
          </Container>
        )}
        {state === 3 && (
          <Container>
            <Message>Please insert</Message>
            <Message>test cartridge.</Message>
          </Container>
        )}
      </MainContainer>
    </ScreenWrapper>
  );
}

const MainContainer = styled.View`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: col;
`;
const Message = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: 400;
  text-align: center;
  padding: 5px;
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
