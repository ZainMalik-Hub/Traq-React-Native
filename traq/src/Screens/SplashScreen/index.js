import styled from "styled-components/native";
import Logo from "../../../assets/traq.png";
import { useEffect } from "react";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.navigate("TemplateSlider"), 3000);
  }, []);
  return (
    <Container>
      <Image source={Logo} resizeMethod='resize' resizeMode='contain' />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #050505;
  align-items: center;
  justify-content: center;
`;
const Image = styled.Image`
  height: 100px;
  width: 80%;
`;
