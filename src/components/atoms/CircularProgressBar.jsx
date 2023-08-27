import {StyleSheet, Animated, View, TextInput} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Svg, G, Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const CircularProgressBar = ({
  max ,
  percentage,
  radius = 120,
  radius2 = 95,
  radius3 = 65,
  strokeWidth = 80,
  duration = 1000,
  color = '#fff',
  delay = 200,
  textColor,
}) => {
console.log(typeof max,"******")

  const firstCircleRef = useRef();
  const secondCircleRef = useRef();
  const inputRef = useRef();

  const animatedValueFirst = useRef(new Animated.Value(0)).current;
  const animatedValueSecond = useRef(new Animated.Value(0)).current;

  const halfCricle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius3;
  const circleCircumference2 = 2 * Math.PI * radius2;

  const animation = (animatedValue, toValue) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start(() => {
      // animation(animatedValue, toValue === 0 ? percentage : 0);
    });
  };

  useEffect(() => {
    animation(animatedValueFirst, percentage);

    animatedValueFirst.addListener(v => {
      if (firstCircleRef?.current) {
        const maxPercent = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPercent) / 100;
        firstCircleRef.current.setNativeProps({strokeDashoffset});
      }

      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
    });

    return () => {
      animatedValueFirst.removeAllListeners();
    };
  }, [max, percentage]);

  useEffect(() => {
    animation(animatedValueSecond, percentage);

    animatedValueSecond.addListener(v => {
      if (secondCircleRef?.current) {
        const maxPercent = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference2 - (circleCircumference2 * maxPercent) / 100;
        secondCircleRef.current.setNativeProps({strokeDashoffset});
      }
    });

    return () => {
      animatedValueSecond.removeAllListeners();
    };
  }, [max, percentage]);


  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCricle * 2} ${halfCricle * 2}`}>
        <G rotation="-90" origin={`${halfCricle}, ${halfCricle}`}>
          <Circle
            cx="50%"
            cy="50%"
            r={radius / 1.6}
            fill={color}
            fillOpacity={0.2}
          />
          <Circle cx="50%" cy="50%" r={radius} fill={color} fillOpacity={0.3} />
          <AnimatedCircle
            ref={secondCircleRef}
            cx="50%"
            cy="50%"
            r={radius2}
            stroke="#CDF040"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circleCircumference2}
            strokeDashoffset={circleCircumference2}
          />
        </G>
        <G rotation="-90" origin={`${halfCricle}, ${halfCricle}`}>
          {/* First Animated Circle */}
          <AnimatedCircle
            ref={firstCircleRef}
            cx="50%"
            cy="50%"
            r={radius3}
            stroke="#fff"
            fill="transparent"
            strokeOpacity={0.5}
            strokeWidth={strokeWidth / 4.2}
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
          />
        </G>
      </Svg>

      <AnimatedInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFill,
          {fontSize: radius / 3, color: textColor ?? color},
          {fontWeight: '900', textAlign: 'center'},
        ]}
      />
    </View>
  );
};

export default CircularProgressBar;
