import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

const CircularProgressBar = ({
  sqSize = 200,
  strokeWidth = 10,
  percentage = 25,
}) => {
  const radius = (sqSize - strokeWidth) / 2;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <View style={{ width: sqSize, height: sqSize }}>
      <Svg width={sqSize} height={sqSize} viewBox={`0 0 ${sqSize} ${sqSize}`}>
        <Circle
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke='#215778'
          fill='none'
        />
        <Circle
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={strokeWidth}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          stroke='#C5D3DC'
          fill='none'
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
        />
        <Circle
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke='black'
          fill='none'
          strokeDasharray='10 40'
        />
        <Circle
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius - strokeWidth - 3} // Adjust the radius for the new circle
          strokeWidth={6}
          stroke='#215778' // Change the color to your preference
          fill='none'
        />
      </Svg>
    </View>
  );
};

const App = () => {
  const [percentage, setPercentage] = useState(42);

  const handleChangeEvent = (value) => {
    setPercentage(value);
  };

  return (
    <View style={styles.container}>
      <CircularProgressBar
        strokeWidth={16}
        sqSize={220}
        percentage={percentage}
      />
      <View style={styles.inputContainer}>
        {/* <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={percentage}
          onValueChange={(value) => handleChangeEvent(value)}
        /> */}
        {/* <Text>{percentage}%</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "80%",
  },
  inputContainer: {
    marginTop: 20,
    width: "30%",
    alignItems: "center",
  },
  // slider: {
  //   width: "100%",
  // },
});

export default App;
