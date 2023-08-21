import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { scaleLinear, scaleTime } from "d3-scale";
import { line } from "d3-shape";
import styled from "styled-components/native";

const data = [
  { x: new Date("2023-08-01"), y: 7 },
  { x: new Date("2023-08-02"), y: 5 },
  { x: new Date("2023-08-03"), y: 10 },
  { x: new Date("2023-08-04"), y: 5 },
  { x: new Date("2023-08-05"), y: 10 },

  { x: new Date("2023-08-06"), y: 10 },
  { x: new Date("2023-08-07"), y: 13 },
  { x: new Date("2023-08-08"), y: 14 },
  { x: new Date("2023-08-09"), y: 10 },
  { x: new Date("2023-08-10"), y: 13 },
  { x: new Date("2023-08-11"), y: 16 },
  { x: new Date("2023-08-12"), y: 17 },
  { x: new Date("2023-08-13"), y: 15 },
  { x: new Date("2023-08-14"), y: 20 },
  { x: new Date("2023-08-15"), y: 13 },

  // Add more data points as needed
];

const LineGraph = () => {
  const width = Dimensions.get("window").width;
  const height = 200;

  const [timeRange, setTimeRange] = useState("6M"); // Default time range is 1 month

  // Filter the data based on the selected time range
  const filteredData = (() => {
    // Logic to filter data based on the selected time range
    // Replace this with your own logic to filter data accordingly
    const now = new Date();
    switch (timeRange) {
      case "1D":
        return data.filter(
          (d) => now.getTime() - d.x.getTime() <= 24 * 60 * 60 * 1000
        );
      case "1W":
        return data.filter(
          (d) => now.getTime() - d.x.getTime() <= 7 * 24 * 60 * 60 * 1000
        );
      case "1M":
        return data.filter(
          (d) => now.getTime() - d.x.getTime() <= 30 * 24 * 60 * 60 * 1000
        );
      case "6M":
        return data.filter(
          (d) => now.getTime() - d.x.getTime() <= 6 * 30 * 24 * 60 * 60 * 1000
        );
      case "1Y":
        return data.filter(
          (d) => now.getTime() - d.x.getTime() <= 365 * 24 * 60 * 60 * 1000
        );
      case "2Y":
        return data.filter(
          (d) => now.getTime() - d.x.getTime() <= 2 * 365 * 24 * 60 * 60 * 1000
        );
      default:
        return data;
    }
  })();

  // Define the scales for x and y axis
  const xScale = scaleTime()
    .domain([filteredData[0].x, filteredData[filteredData.length - 1].x])
    .range([0, width]);

  const yScale = scaleLinear()
    .domain([0, Math.max(...filteredData.map((d) => d.y))])
    .range([height, 0]);

  // Create a path for the line
  const lineGenerator = line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  const pathData = lineGenerator(filteredData);

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };
  const TimeRangeButton = styled.Text`
    font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  `;

  return (
    <View>
      <Svg width={width} height={height}>
        <Path d={pathData} fill='none' stroke='green' strokeWidth={2} />
      </Svg>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 16,
        }}>
        <TouchableOpacity onPress={() => handleTimeRangeChange("1D")}>
          <TimeRangeButton selected={timeRange === "1D"}>1D</TimeRangeButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTimeRangeChange("1W")}>
          <TimeRangeButton selected={timeRange === "1W"}>1W</TimeRangeButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTimeRangeChange("1M")}>
          <TimeRangeButton selected={timeRange === "1M"}>1M</TimeRangeButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTimeRangeChange("6M")}>
          <TimeRangeButton selected={timeRange === "6M"}>6M</TimeRangeButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTimeRangeChange("1Y")}>
          <TimeRangeButton selected={timeRange === "1Y"}>1Y</TimeRangeButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTimeRangeChange("2Y")}>
          <TimeRangeButton selected={timeRange === "2Y"}>2Y</TimeRangeButton>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LineGraph;
