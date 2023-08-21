import styled from "styled-components/native";
import CoachIcon from "../../assets/coach.png";
import BackIcon from "../../assets/backArrow.png";
import { TouchableOpacity } from "react-native";
export default function SmallHeader({ navigation }) {
  return (
    <Head>
      <TouchableOpacity>
        <Image
          source={BackIcon}
          resizeMethod='resize'
          resizeMode='contain'></Image>
      </TouchableOpacity>
      <Image
        source={CoachIcon}
        resizeMethod='resize'
        resizeMode='contain'></Image>
    </Head>
  );
}

const Head = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
const Image = styled.Image`
  height: 38px;
  width: 38px;
  margin: 8px;
`;
