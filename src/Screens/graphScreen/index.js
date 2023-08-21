import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";

export default class App extends Component {
  option = {
    grid: {
      top: "15%",
      bottom: "15%",
      left: "10%",
      right: "10%",
      borderWidth: 1,
    },
    xAxis: [
      {
        type: "category",
        data: [-0.9, -0.6, -0.3, 0, 0.3, 0.6, 0.9],
        position: "bottom",
        axisLabel: {
          color: "white",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        position: "left",
        axisLabel: {
          formatter: "{value}",
          position: "insideLeft",
          color: "white",
        },
      },
      {
        type: "value",
        position: "right",
        axisLabel: {
          formatter: "{value}",
          position: "insideRight",
          color: "red",
        },
      },
    ],
    series: [
      {
        data: [-0.9, -0.6, -0.3, 0, 0.3, 0.6, 0.9],
        type: "line",
        itemStyle: {
          color: "white", // Change series line color to green
        },
      },
    ],
  };

  render() {
    return (
      <View style={styles.chartContainer}>
        <ECharts option={this.option} backgroundColor='black' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
