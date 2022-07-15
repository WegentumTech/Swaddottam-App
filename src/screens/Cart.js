import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
import styles from '../Styles/GloablStyles';
import RandomScrollableFoods from '../components/Home/RandomScrollableFoods';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
  const navigation = useNavigation();
  const [datas, setDatas] = useState('');

  useEffect(() => {
    GetCurrentCartValue();
  }, []);

  const GetCurrentCartValue = async () => {
    const value = await AsyncStorage.getItem('Cart');
    const parsedValue = JSON.parse(value);
    setDatas(parsedValue);
  };



  const handleRemove = async(ids) =>{

    const localValue = await AsyncStorage.getItem("Cart")
    const parseLocalValue = JSON.parse(localValue)
    let id = ids
    const arr = parseLocalValue.filter(item => item.id !== id)
    console.log(arr)

   const stringiData =  JSON.stringify(arr)

    AsyncStorage.setItem("Cart",stringiData)







  }

  return (
    <ScrollView>
      <PressBackWithTitle title="Your Cart" />
      <View style={{marginHorizontal: 10}}>
        {datas ? (
          <>
            {datas.map(hit => {
              return (
                <TouchableOpacity onPress={()=>handleRemove(hit.id)}>
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
                          style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: 'black',
                          }}>
                          {hit.title}
                        </Text>
                        <View style={{flexDirection: 'row', flex: 1}}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              marginLeft: 5,
                              fontSize: 15,
                              color: 'black',
                              marginTop: 10,
                              flex: 1,
                            }}>
                            ₹ 150 X 2
                          </Text>
                        </View>
                        <Text
                          style={{
                            marginLeft: 5,
                            color: 'black',
                            marginTop: 10,
                          }}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                </TouchableOpacity>
              );
            })}
          </>
        ) : (
          <></>
        )}

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
