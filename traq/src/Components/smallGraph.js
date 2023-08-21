import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { scaleLinear, scaleTime } from "d3-scale";
import { line } from "d3-shape";

const LineGraph = ({ color, data }) => {
  const width = 90;
  const height = 40;

  const [timeRange, setTimeRange] = useState("6M"); // Default time range is 1 month

  // Filter the data based on the selected time range
  const filteredData = (() => {
    // Logic to filter data based on the selected time range
    // Replace this with your own logic to filter data accordingly
    const now = new Date();
    switch (timeRange) {
      case "1D":
        return data?.filter(
          (d) => now.getTime() - d.x.getTime() <= 24 * 60 * 60 * 1000
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

  return (
    <View>
      <Svg width={width} height={height}>
        <Path d={pathData} fill='none' stroke={color} strokeWidth={2} />
      </Svg>
    </View>
  );
};

export default LineGraph;
