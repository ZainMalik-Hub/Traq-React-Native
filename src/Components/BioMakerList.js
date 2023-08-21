import styled from "styled-components/native";
import React from "react";
import Graph from "../Components/smallGraph";

export default function BioMakerList() {
  return (
    <>
      {data?.map((v, k) => {
        return (
          <MainConatiner key={k}>
            <Container>
              <Badge style={{ backgroundColor: v?.color }}>
                <CircleText>{v?.logo}</CircleText>
              </Badge>
              <List>
                <Head>{v?.name}</Head>
                <Description>{v?.des}</Description>
              </List>
            </Container>
            <GraphContainer>
              <Graph color={v?.color} data={data1} />
            </GraphContainer>
            <Section>
              <SectionList>
                <SectionHead>{v?.value}</SectionHead>
                <SectionDes style={{ color: v?.color }}>{v?.result}</SectionDes>
              </SectionList>
            </Section>
          </MainConatiner>
        );
      })}
    </>
  );
}
const data = [
  {
    name: "SODIUM",
    des: "26 Results",
    value: "123 mmol/L",
    result: "Bad",
    color: "red",
    logo: "S",
    data: data1,
  },
  {
    logo: "P",
    name: "POTASSIUM",
    des: "26 Results",
    value: "1.35 mEq/L",
    result: "Bad",
    color: "red",
    data: data1,
  },
  {
    logo: "M",
    name: "MAGNASSIUM",
    des: "26 Results",
    value: "68.2 mg/dl",
    result: "Good",
    color: "green",
    data: data1,
  },
  {
    logo: "C",
    name: "CHALORIDE",
    des: "26 Results",
    value: "123 mmol/L",
    result: "Borderline",
    color: "#FBAF17",
    data: data1,
  },
  {
    logo: "C",
    name: "CALSIUM",
    des: "26 Results",
    value: "1.35 mEq/L",
    result: "Good",
    color: "green",
    data: data1,
  },
];
const MainConatiner = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  height: 8%;
  padding-left: 15px;
  padding-right: 15px;

  ${Platform.OS === "ios"
    ? `
    shadowColor: #000;
    shadowOffset: { width: 0, height: 2 };
    shadowOpacity: 0.3;
    shadowRadius: 3.84;
  `
    : `
    elevation: 5;
  `}
`;

const Container = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 38%;
`;

const GraphContainer = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  width: 33%;
  height: 5px;
`;

const Section = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 29%;
  justify-content: flex-end;
`;

const List = styled.View`
  margin-left: 4px;
`;

const Head = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: black;
  opacity: 0.6;
`;
const Description = styled.Text`
  font-size: 10px;
  font-weight: 600;
  color: gray;
  opacity: 0.5;
`;

const SectionList = styled.View`
  margin-left: 4px;
`;

const SectionHead = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: black;
  opacity: 0.6;
`;
const SectionDes = styled.Text`
  font-size: 10px;
  font-weight: 600;
  color: red;
  opacity: 0.5;
  text-align: right; /* Align the text to the right */
  /* Add other styles for SectionDes as needed */
`;

const Badge = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 100px; /* half of width and height to make it a circle */
  background-color: white;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

const CircleText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: white;
`;

const data1 = [
  { x: new Date("2023-08-01"), y: 1 },
  { x: new Date("2023-08-02"), y: 3 },
  { x: new Date("2023-08-03"), y: 2 },
  { x: new Date("2023-08-04"), y: 4 },
  { x: new Date("2023-08-05"), y: 3 },

  { x: new Date("2023-08-06"), y: 5 },
  { x: new Date("2023-08-07"), y: 7 },
  { x: new Date("2023-08-08"), y: 6 },
  { x: new Date("2023-08-09"), y: 4 },
  { x: new Date("2023-08-10"), y: 6 },
  { x: new Date("2023-08-11"), y: 7 },
  { x: new Date("2023-08-12"), y: 5 },
  { x: new Date("2023-08-13"), y: 7 },
  { x: new Date("2023-08-14"), y: 6 },
  { x: new Date("2023-08-15"), y: 9 },
];
