import React, {useState} from 'react';
import {Dimensions, ScrollView, TextInput, View} from 'react-native';
import CircularProgressBar from '../components/atoms/CircularProgressBar';
import SemiCircleProgress from '../components/atoms/SemiCircleProgress';

const Loaders = () => {
  const [loader1Val, setLoader1Val] = useState(3);
  const [loader2Val, setLoader2Val] = useState(10);
  const height = Dimensions.get('window').height;
  return (
    <ScrollView>
      <View
        style={{
          height: height - 40,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          backgroundColor: '#6842FB',
        }}>
        <View style={{alignItems: 'center', marginTop: -50}}>
          <View style={{height: 220}}>
            <CircularProgressBar max={12} percentage={loader1Val} />
          </View>
          <CustomTextInput
            placeholder="Enter Value"
            onChangeText={i => setLoader1Val(+i)}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <SemiCircleProgress percentage={loader2Val} />
          <CustomTextInput
            placeholder="Enter Value"
            onChangeText={i => setLoader2Val(+i)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Loaders;

const CustomTextInput = ({placeholder, onChangeText}) => (
  <TextInput
    placeholder={placeholder}
    onChangeText={onChangeText}
    placeholderTextColor="#fff8"
    selectionColor="#fff5"
    keyboardType="numeric"
    textAlign="center"
    style={{
      width: '40%',
      textAlign: 'center',
      color: '#fff',
      borderColor: '#fff8',
      backgroundColor: '#fff2',
      paddingHorizontal: 15,
      borderWidth: 2,
      borderRadius: 50,
      fontSize: 20,
    }}
  />
);
