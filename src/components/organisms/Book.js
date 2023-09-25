import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

const {width, height} = Dimensions.get('screen');

const Book = memo(({data, wishHandler, navHandler, isFavorited}) => {
  const handleWish = () => {
    wishHandler(data.title);
  };
  return (
    <TouchableWithoutFeedback onPress={navHandler}>
      <View style={[styles.wrpr, {marginBottom:data.title.length>22?46:36}]}>
        {/* Book Cover container */}
        <View style={styles.bookImg}>
          <Image source={{uri: data?.imageLink}} style={styles.bookCover} />
          <TouchableWithoutFeedback onPress={handleWish}>
            <View style={styles.fvrtBTN}>
              {isFavorited ? <FavouriteBTN /> : <UnFavouriteBTN />}
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* Book Title, rating, review & price container */}
        <View style={{height: '25%'}}>
          <Text style={styles.title} numberOfLines={2}>{data?.title}</Text>

          <View style={styles.ratingContainer}>
            <Image
              source={require('../../assets/icons/rating.png')}
              style={{width: 70, height: 12}}
            />
            <Text style={styles.review}>{`  (${data?.reviews})`}</Text>
          </View>

          <Text style={styles.priceTxt}>{`$${data?.price}`}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});
export default Book;

const FavouriteBTN = () => (
  <Svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M0.404846 4.47919C0.404846 8.15153 3.44058 10.1081 5.66226 11.8601C6.44611 12.4778 7.20127 13.0601 7.95643 13.0601C8.71159 13.0601 9.46675 12.4786 10.2506 11.8594C12.473 10.1089 15.508 8.15153 15.508 4.47995C15.508 0.807612 11.3546 -1.79693 7.95643 1.73419C4.55822 -1.79768 0.404846 0.806857 0.404846 4.47919Z"
      fill="#D80000"
    />
  </Svg>
);

const UnFavouriteBTN = () => (
  <Svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M9.64931 11.5648L9.64888 11.5651C9.25368 11.8773 8.88908 12.1608 8.53427 12.3682C8.17933 12.5756 7.8696 12.6851 7.58717 12.6851C7.30482 12.6851 6.99513 12.5755 6.64006 12.368C6.28512 12.1605 5.92053 11.8772 5.52511 11.5656C5.30849 11.3948 5.08677 11.2238 4.86277 11.0511C3.91505 10.3205 2.92661 9.55848 2.11154 8.64077C1.11668 7.52062 0.410583 6.19831 0.410583 4.47919C0.410583 2.78331 1.3691 1.35121 2.69292 0.74618C3.99308 0.151966 5.71377 0.327965 7.31694 1.99419L7.58714 2.27502L7.85737 1.99422C9.46052 0.328373 11.1812 0.152521 12.4814 0.746832C13.8052 1.35196 14.7638 2.78407 14.7638 4.47995C14.7638 6.1987 14.0578 7.52102 13.0631 8.64105C12.2467 9.5603 11.2561 10.3233 10.3066 11.0547C10.0844 11.2259 9.86432 11.3954 9.64931 11.5648Z"
      stroke="#D80000"
      stroke-width="0.75"
    />
  </Svg>
);

const styles = StyleSheet.create({
  wrpr: {
    width: width / 2.3,
    height: height / 2.8,
    marginBottom: 36,
  },
  title: {fontWeight: '600', color: '#000', fontSize: 14, marginVertical: 5},
  bookImg: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    overflow:"hidden",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#EFEFEF"
  },
  bookCover: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },
  ratingContainer: {flexDirection: 'row', alignItems: 'center'},
  priceTxt: {fontWeight: '600', color: '#000', fontSize: 13, marginVertical: 5},
  review: {fontWeight: '400', color: '#B2B2B2', fontSize: 12},
  fvrtBTN: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 25,
    height: 25,
    paddingTop: 1.5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
