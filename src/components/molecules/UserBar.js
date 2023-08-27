import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('screen');

const UserBar = ({title, onPress}) => {
  return (
    <View style={styles.wrpr}>
      <Text style={styles.title}>Hi {title}</Text>
      <TouchableOpacity onPress={onPress} style={styles.profileIcon}>
        <Image
          source={require('../../assets/images/mansoor.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserBar;

const styles = StyleSheet.create({
  wrpr: {
    width: width - 30,
    marginVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  title: {color: '#000', fontWeight: '600', fontSize: 18},
  profileIcon: {width: 40, height: 40, borderRadius: 50, overflow: 'hidden'},
  image: {width: '100%', height: '100%', resizeMode: 'contain'},
});
