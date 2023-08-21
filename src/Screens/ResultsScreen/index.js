import { useEffect, useState } from "react";
import styled from "styled-components/native";
import ScreenWrapper from "../../Components/ScreenWrapper";
import React from "react";
import AnimatedLoader from "../../Components/AnimatedLoader";
import AnalizingLoader from "../../Components/AnalyzingLoader";

export default function ResultScreen({ navigation }) {
  const [state, setState] = useState(1);
  useEffect(() => {
    setTimeout(() => setState(2), 2500);
    setTimeout(() => navigation.navigate("TestHistoryScreen"), 7000);
  }, []);
  return (
    <ScreenWrapper>
      {state === 1 && (
        <Container>
          <Text>Hydration</Text>
          <AnalizingLoader value={90} />
          <Analyzing>Analyzing...</Analyzing>
        </Container>
      )}
      {state === 2 && (
        <Container>
          <Text>Hydration</Text>
          <AnimatedLoader value={63} size='large' />
        </Container>
      )}
    </ScreenWrapper>
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
const Text = styled.Text`
  font-size: 34px;
  color: #0c75c6;
  font-weight: 400;
  margin-bottom: 12%;
`;
const Analyzing = styled.Text`
  font-size: 32px;
  color: #61c6b8;
  font-weight: 400;
  margin-bottom: 10%;
  margin-top: 1%;
`;
