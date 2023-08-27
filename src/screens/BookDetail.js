import {
  Alert,
  Dimensions,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LongButton from '../components/atoms/LongButton';
import GoBackButton from '../components/atoms/GoBackButton';

const {width} = Dimensions.get('screen');

const BookDetail = ({route}) => {
  const {
    author,
    country,
    imageLink,
    language,
    link,
    pages,
    title,
    year,
    price,
    rating,
    reviews,
    is_liked,
  } = route?.params?.data;

  // External link of Book
  const visitlink = () => {
    const externalLink = link;
    Linking.openURL(externalLink).catch(error =>
      Alert.alert('Error opening link:', error),
    );
  };

  return (
    <View style={{width: width, backgroundColor:"#fff"}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollview}>
        <View style={{width: '90%'}}>
          <GoBackButton />
          {/* Image Section */}
          <View style={styles.bookIMG}>
            <View style={{height: '90%', width: '100%'}}>
              <Image
                source={{uri: imageLink}}
                style={{
                  resizeMode: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                }}
              />
            </View>

            {/* Rating, Reviews, Price */}
            <View style={styles.wrprRRP}>
              <View style={[styles.containerRRP, {rowGap:10}]}>
                <Text style={[styles.titleRRP]}>rating</Text>
                <Image
                  source={require('../assets/icons/rating.png')}
                  style={{width: 60, height: 10}}
                />
              </View>
              <View style={styles.containerRRP}>
                <Text style={styles.titleRRP}>reviews</Text>
                <Text style={styles.textRRP}>({reviews})</Text>
              </View>
              <View style={styles.containerRRP}>
                <Text style={styles.titleRRP}>price</Text>
                <Text style={styles.textRRP}>{`$${price}`}</Text>
              </View>
            </View>
          </View>

          {/* Book Others Details Section */}
          <View style={{marginTop: 20}}>
            <Text style={styles.bookName}>{title}</Text>

            <Section title="author" name={author} />
            <Section title="country" name={country} />
            <Section title="language" name={language} />
            <Section title="year" name={year} />
            <Section title="pages" name={pages} />
          </View>

          {/* External Link Button */}
          <LongButton title="View details" onPress={visitlink} />
        </View>
      </ScrollView>
    </View>
  );
};

// Section Component
const Section = ({name, title}) => {
  return (
    <Text style={styles.boldText}>
      {title}:<Text style={{fontWeight: '400'}}> {name}</Text>
    </Text>
  );
};
export default BookDetail;

const styles = StyleSheet.create({
  scrollview: {
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookIMG: {
    width: '100%',
    height: 500,
    padding: 20,
    marginTop: 10,
    elevation: 4,
    borderRadius: 7,
    backgroundColor: '#fff',
  },
  bookName: {
    fontSize: 22,
    fontWeight: '600',
    textTransform: 'capitalize',
    marginBottom: 25,
    color: '#000',
  },
  wrprRRP: {
    height: '10%',
    width:"100%",
    flexDirection: 'row',
    alignItems:"center",
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    marginTop: 5,
  },
  titleRRP: {
    textTransform: 'capitalize',
    fontWeight: '500',
    color: '#000',
    fontSize: 14,
    marginBottom: 5,
  },
  textRRP: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B2B2B2',
  },
  containerRRP: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'capitalize',
    marginBottom: 5,
  },
});
