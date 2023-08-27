import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserBar from '../components/molecules/UserBar';
import BookList from '../components/templates/BookList';
import NetInfo from '@react-native-community/netinfo';
import Netinfo from '../components/atoms/Netinfo';

const Home = ({navigation}) => {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
    });
  }, []);

  return (
    <View style={styles.main}>
      <UserBar title="Mansoor" onPress={() => navigation.push('Loaders')} />
      {isConnected === null ? (
        <ActivityIndicator size={'large'} style={{marginTop:90}}/>
      ) : isConnected ? (
        <BookList />
      ) : (
        <Netinfo />
      )}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#fff', alignItems: 'center'},
});
