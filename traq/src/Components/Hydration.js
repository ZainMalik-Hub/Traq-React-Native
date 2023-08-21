import { useEffect, useState } from "react";
import styled from "styled-components/native";
import React from "react";
import AnalizingLoader from "../Components/AnalyzingLoader";

export default function Hydration({ navigation }) {
  return (
    <Container>
      <Text>Hydration</Text>
      <AnalizingLoader value={90} />
      <Analyzing>Analyzing...</Analyzing>
    </Container>
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
