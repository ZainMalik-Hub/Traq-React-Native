import React, { useRef, useEffect, useState } from "react";
import { Animated } from "react-native";
import {
  Circle,
  Defs,
  LinearGradient,
  Stop,
  Svg,
  Text,
} from "react-native-svg";
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
export default function AnimatedLoader({ value, size }) {
  const [data, setData] = useState(size0);
  useEffect(() => {
    if (size === "small") {
      setData(size1);
    } else if (size === "large") {
      setData(size2);
    }
  }, []);
  return <ProgressCircle percentage={value} data={data} />;
}

const ProgressCircle = ({ percentage, data }) => {
  const progressValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressValue, {
      toValue: percentage,
      duration: 2000, // Change the duration to control the animation speed
      useNativeDriver: true,
    }).start();
  }, [percentage]);

  const circumference = 2 * Math.PI * data.radius; // Calculate the circumference

  // Convert the percentage to a value that starts from 12 o'clock (clockwise)
  const animatedValue = progressValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  // Calculate the initial strokeDashoffset value for the 12 o'clock position (clockwise)
  const textX = 105;
  const textY = 115;

  return (
    <Svg height={data?.height} width={data?.width}>
      <Defs>
        <LinearGradient id='gradient' x1='0' y1='0' x2='1' y2='1'>
          <Stop offset='0' stopColor='#06FFF6' />
          <Stop offset='1' stopColor='#0942F9' />
        </LinearGradient>
      </Defs>
      <Circle
        cx={data?.circle1_cx}
        cy={data?.circle1_cy}
        r={data.radius}
        fill='transparent'
        strokeWidth={data?.strokeWidth}
        stroke='#353B3E'
      />
      <AnimatedCircle
        cx={data?.circle2_cx}
        cy={data?.circle2_cy}
        r={data?.radius}
        fill='transparent'
        strokeWidth={data?.strokeWidth}
        stroke='url(#gradient)' // Use the gradient stroke color here
        strokeLinecap='round' // Rounded corners for the stroke
        strokeDasharray={[circumference]}
        strokeDashoffset={animatedValue}
        transform={`rotate(-90, 50, 50)`}
      />
      <Text
        x={data?.textX}
        y={data?.textY}
        textAnchor='middle'
        fontSize={data?.fontSize}
        fill='white'>
        {`${percentage}%`}
      </Text>
    </Svg>
  );
};

let size0 = {
  height: "0",
  width: "0",
  circle1_cx: "50",
  circle1_cy: "50",

  circle2_cx: "50",
  circle2_cy: "50",
  radius: 40, // Radius of the circle
  strokeWidth: 13, // Width of the circle's stroke

  textX: 53,
  textY: 59,
  fontSize: "28",
};
let size1 = {
  height: "100",
  width: "100",
  circle1_cx: "50",
  circle1_cy: "50",

  circle2_cx: "50",
  circle2_cy: "50",
  radius: 40, // Radius of the circle
  strokeWidth: 13, // Width of the circle's stroke

  textX: 53,
  textY: 59,
  fontSize: "28",
};
let size2 = {
  height: "200",
  width: "200",
  circle1_cx: "100",
  circle1_cy: "100",

  circle2_cx: "0",
  circle2_cy: "100",
  radius: 70, // Radius of the circle
  strokeWidth: 22, // Width of the circle's stroke

  textX: 105,
  textY: 115,
  fontSize: "38",
};
