import {StyleSheet, Animated, View, TextInput} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Svg, G, Circle, Path} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const SemiCircleProgress = ({
  percentage = 3,
  max = 10,
  radius = 100,
  strokeWidth = 20,
  duration = 500,
  delay = 0,
  color = '#fff',
  textColor,
}) => {
  const circleRef = useRef();
  const inputRef = useRef();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const halfCricle = radius + strokeWidth;
  const circleCircumference = Math.PI * radius;
  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start(() => {
      // animation(toValue === 0 ? percentage : 0);
    });
  };

  useEffect(() => {
    animation(percentage);

    animatedValue.addListener(v => {
      if (circleRef?.current) {
        const maxPercent = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPercent) / 100;
        circleRef.current.setNativeProps({strokeDashoffset});
      }

      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [max, percentage]);
  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCricle * 2} ${halfCricle * 2}`}>
        <G rotation="90" origin={`${halfCricle}, ${halfCricle}`}>

          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke={color}
            fill="transparent"
            strokeLinecap="round"
            strokeOpacity={0.2}
            strokeWidth={strokeWidth}
            strokeDasharray={circleCircumference}
            strokeDashoffset={0}
            transform={`rotate(90, ${halfCricle}, ${halfCricle})`}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            stroke={color}
            fill="transparent"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            strokeDasharray={circleCircumference}
            strokeDashoffset={0}
            transform={`rotate(90, ${halfCricle}, ${halfCricle})`}
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
          {fontSize: radius / 2, color: textColor ?? color},
          {fontWeight: '900', textAlign: 'center'},
        ]}
      />
    </View>
  );
};

export default SemiCircleProgress;
