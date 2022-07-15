import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Styles/GloablStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import RandomScrollableFoods from '../../components/Home/RandomScrollableFoods';

const SingleProduct = () => {
  const navigation = useNavigation();
  const [increasenUMBER, setIncreasenUMBER] = useState(1);
  const [showRedHeart, setShowRedHeart] = useState(false);

  const handleAddToCart = () => {
    navigation.navigate('Cart');
  };

  const clickedOnHeart = () => {
    if (showRedHeart) {
      setShowRedHeart(false);
    }
    if (!showRedHeart) {
      setShowRedHeart(true);
    }
  };

  return (
    <ScrollView>
      <View>
        <Image
          style={{width: '100%', height: 200}}
          source={{
            uri: 'https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
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
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
          HANDI PANEER
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 5,
          }}>
          ₹ 190
        </Text>
        <Text style={{marginTop: 10, color: 'black'}}>
          this is some desciption of this item. this is some desciption of this
          item. this is some desciption of this item
        </Text>
      </View>

      <View style={{marginTop: 20, flexDirection: 'row', marginHorizontal: 20}}>
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
        <View style={{flex: 7}}>
          <TouchableOpacity onPress={handleAddToCart}>
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
        <View style={{flex: 1}}>
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

      <View style={{marginHorizontal: 20, flexDirection: 'row', marginTop: 30}}>
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
    </ScrollView>
  );
};

export default SingleProduct;
