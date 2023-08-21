import styled from "styled-components/native";
import Logo from "../../assets/traq.png";

export default function Header() {
  return (
    <Container>
      <Image source={Logo} resizeMethod='resize' resizeMode='contain' />
    </Container>
  );
}

const Container = styled.View`
  background-color: #0d202e;
  align-items: center;
  width: 100%;
  padding-top: 4%;
  padding-bottom: 1%;
  height: 8%;
`;
const Image = styled.Image`
  height: 90%;
`;
