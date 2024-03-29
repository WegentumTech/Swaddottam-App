import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../Styles/GloablStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import RandomScrollableFoods from '../../components/Home/RandomScrollableFoods';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';
import {BACKEND_URL} from '../../helper/baseUrl';
import {AuthKey} from '../../helper/baseUrl';
import {AuthPassword} from '../../helper/baseUrl';

const SingleProduct = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [increasenUMBER, setIncreasenUMBER] = useState(1);
  const [showRedHeart, setShowRedHeart] = useState(false);
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    const productId = route.params.mealId;
    const getInital = async () => {
      const value = await AsyncStorage.getItem('Cart');
      console.log(value);
    };
    getInital();

    const headers = {
      authkey: AuthKey,
      secretkey: AuthPassword,
    };

    axios
      .post(
        BACKEND_URL + 'product',
        {
          productid: productId,
        },
        headers,
      )
      .then(acc => {
        // console.log(acc.data);
        setDatas(acc.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleAddToCart = async (
    id,
    title,
    image,
    price,
    desciption,
    quantity,
  ) => {
    try {
      var product = []; // <== here initializing and empty array

      var items = {
        // <== This is a demo item object where we are saving demo data
        id: id,
        title: title,
        image: image,
        price: price,
        description: desciption,
        quantity: quantity,
      };

      AsyncStorage.getItem('Cart', (err, res) => {
        if (!res) {
          alert('empty cart');
          AsyncStorage.setItem('Cart', JSON.stringify([product]));
        } else {
          const getValue = async () => {
            const value = await AsyncStorage.getItem('Cart');
            const parsedValue = JSON.parse(value);
            parsedValue.forEach(element => {
              product.push(element);
            });

            product.push(items);
            AsyncStorage.setItem(
              'Cart',
              JSON.stringify(product),
              // console.log('item added' + JSON.stringify(product)),
            );
            // alert(product);
            console.log(product);
            navigation.navigate('Cart');

            // console.log(product);
          };
          getValue();
        }
      });
    } catch (error) {
      // console.log(error);
    }
  };

  const clickedOnHeart = () => {
    if (showRedHeart) {
      setShowRedHeart(false);
    }
    if (!showRedHeart) {
      setShowRedHeart(true);
    }
  };

  console.log(datas);

  return (
    <ScrollView>
      {datas ? (
        <>
          <View>
            <Image
              style={{width: '100%', height: 200}}
              source={{
                uri: datas.meal_image,
              }}
            />

            <AntDesign
              onPress={() => navigation.goBack()}
              style={{
                position: 'absolute',
                top: 20,
                left: 15,
                backgroundColor: 'white',
                padding: 5,
                borderRadius: 20,
              }}
              name="arrowleft"
              size={15}
              color="black"
            />
          </View>
          <View style={{marginHorizontal: 20, marginTop: 20}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
                {datas.meal_name}
              </Text>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={clickedOnHeart}>
                  {showRedHeart ? (
                    <AntDesign
                      style={{marginLeft: 8, marginTop: 6}}
                      name="heart"
                      size={30}
                      color="red"
                    />
                  ) : (
                    <AntDesign
                      style={{marginLeft: 8, marginTop: 6}}
                      name="hearto"
                      size={30}
                      color="black"
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 5,
              }}>
              ₹ {datas.meal_price}
            </Text>
            <Text style={{marginTop: 10, color: 'black'}}>
              {datas.meal_description}
            </Text>
          </View>

          <View
            style={{marginTop: 20, flexDirection: 'row', marginHorizontal: 20}}>
            <View style={{flexDirection: 'row', flex: 1}}>
              {increasenUMBER <= 1 ? (
                <>
                  <Text
                    onPress={() =>
                      Alert.alert('Wait...', 'Please Add Atleast One Quantity')
                    }
                    style={{
                      padding: 8,
                      fontSize: 20,
                      fontWeight: 'bold',
                      backgroundColor: '#F58224',
                      color: 'white',
                    }}>
                    -
                  </Text>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => setIncreasenUMBER(increasenUMBER - 1)}>
                    <Text
                      style={{
                        padding: 8,
                        fontSize: 20,
                        fontWeight: 'bold',
                        backgroundColor: '#F58224',
                        color: 'white',
                      }}>
                      -
                    </Text>
                  </TouchableOpacity>
                </>
              )}

              <Text
                style={{
                  padding: 8,
                  fontSize: 20,
                  fontWeight: 'bold',
                  backgroundColor: '#D9D9D9',
                  color: 'black',
                }}>
                {increasenUMBER}
              </Text>

              <TouchableOpacity
                onPress={() => setIncreasenUMBER(increasenUMBER + 1)}>
                <Text
                  style={{
                    padding: 8,
                    fontSize: 20,
                    fontWeight: 'bold',
                    backgroundColor: '#F58224',
                    color: 'white',
                  }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() =>
                  handleAddToCart(
                    'go44',
                    'Handi Paneer',
                    'https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
                    '786',
                    'this is demo desc',
                    increasenUMBER,
                  )
                }>
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontWeight: 'bold',
                    fontSize: 20,
                    padding: 8,
                    backgroundColor: '#F58224',
                    borderRadius: 5,
                    color: 'white',
                  }}>
                  Add To Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{marginHorizontal: 20, flexDirection: 'row', marginTop: 30}}>
            <TextInput
              keyboardType="numeric"
              style={styles.CheckZipCode}
              placeholder="check availability at eg:221010"
              placeholderTextColor="#BAB6B6"
              maxLength={6}></TextInput>
            <TouchableOpacity>
              <Text
                style={{
                  flex: 1,
                  backgroundColor: '#F58224',
                  borderBottomRightRadius: 5,
                  borderTopRightRadius: 5,
                  padding: 10,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Check
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginHorizontal: 8, marginTop: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              RELATED PRODUCTS
            </Text>

            <RandomScrollableFoods />
          </View>
        </>
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

export default SingleProduct;
