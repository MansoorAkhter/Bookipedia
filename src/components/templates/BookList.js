import {
  Dimensions,
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import NotFound from '../atoms/NotFound';
import SearchBar from '../organisms/SearchBar';
import Book from '../organisms/Book';
import {fetchBooks} from '../../api/bookApi';
import {useSelector, useDispatch} from 'react-redux';
import {
  addToFavourite,
  unFavourite,
  selectFavourite,
} from '../../redux/favouriteBookSlice';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const BookList = () => {
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  //  ===== REDUX =====
  const dispatch = useDispatch();
  const getFavourite = useSelector(selectFavourite);
  const allFavID = getFavourite.map(e => e);
  const isBookFavorited = title => allFavID.includes(title);
  const navigation = useNavigation();
  // Handler Functions
  const loadBooks = async () => {
    setIsLoading(true);
    try {
      const res = await fetchBooks(page);
      setBooks(res?.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderFooter = () => {
    if (isLoading) {
      return <ActivityIndicator style={{marginTop: 10}} />;
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    loadBooks();
  };

  const handleFavourite = item => {
    if (isBookFavorited(item?.title)) {
      dispatch(unFavourite(item?.title));
    } else {
      dispatch(addToFavourite(item?.title));
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    loadBooks();
    setIsRefreshing(false);
  };

  const filteredData = debouncedSearchValue
    ? books.filter(item =>
        item.title.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
      )
    : books;

  // Render Book
  const renderBooks = ({item}) => (
    <Book
      data={item}
      isFavorited={isBookFavorited(item?.title)}
      navHandler={() => navigation.push('BookDetail', {data: item})}
      wishHandler={() => handleFavourite(item)}
    />
  );

  // Debounce Effect
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 300);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchValue]);

  // Load Books Effect
  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <>
      <SearchBar data={books} searchHandler={setSearchValue} />
      {!filteredData.length ? (
        !isLoading && <NotFound item={searchValue} />
      ) : (
        
        <View style={{width: width - 30}}>
          <FlatList
            data={filteredData}
            renderItem={renderBooks}
            onEndReached={handleLoadMore}
            ListFooterComponent={renderFooter}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            initialNumToRender={4}
            maxToRenderPerBatch={8}
            onEndReachedThreshold={0.5}
            contentContainerStyle={{paddingTop: 10, paddingBottom: 140}}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
              />
            }
          />
        </View>
      )}
    </>
  );
};

export default BookList;
