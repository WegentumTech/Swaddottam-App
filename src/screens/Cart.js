import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
import styles from '../Styles/GloablStyles';
import RandomScrollableFoods from '../components/Home/RandomScrollableFoods';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <PressBackWithTitle title="Your Cart" />
      <View style={{marginHorizontal: 10}}>
        <View style={{marginTop: 22}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                style={styles.sideProduct}
                source={{
                  uri: 'https://images.unsplash.com/photo-1502998070258-dc1338445ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80',
                }}
              />
            </View>

            <View style={{flex: 2}}>
              <View style={{marginLeft: 20}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                  CORN DO PYAZA
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    marginLeft: 5,
                    fontSize: 15,
                    color: 'black',
                    marginTop: 10,
                  }}>
                  ₹ 150 X 2
                </Text>
                <Text style={{marginLeft: 5, color: 'black', marginTop: 10}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: '#BAB6B6',
            borderBottomWidth: 1,
            marginTop: 40,
          }}></View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View style={{marginRight: 10}}>
              <Text style={{textAlign: 'right', color: 'black'}}>
                Subtotal - ₹ 300
              </Text>
              <Text style={{textAlign: 'right', color: 'black'}}>
                Shipping Amount - ₹ 0.00
              </Text>
              <Text
                style={{
                  textAlign: 'right',
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Grand Total - ₹ 300
              </Text>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('Checkout')}>
                <Text
                  style={{
                    backgroundColor: '#FDB416',
                    textAlign: 'right',
                    marginLeft: 80,
                    padding: 8,
                    marginTop: 10,
                    borderRadius: 10,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  CHECKOUT
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            More Dishesh
          </Text>
          <RandomScrollableFoods />
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;
