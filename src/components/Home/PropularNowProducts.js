import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../Styles/GloablStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BACKEND_URL} from '../../helper/baseUrl';
import {AuthKey} from '../../helper/baseUrl';
import {AuthPassword} from '../../helper/baseUrl';
const PropularNowProducts = () => {
  const navigation = useNavigation();
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    const headers = {
      authkey: AuthKey,
      secretkey: AuthPassword,
    };

    axios
      .post(BACKEND_URL + 'products', {}, headers)
      .then(acc => {
        // console.log(acc.data);
        setDatas(acc.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View
      style={{
        marginHorizontal: 15,
        marginTop: 35,
        marginBottom: 10,
        elevation: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{flex: 1, fontWeight: 'bold', fontSize: 17, color: 'black'}}>
          Propular Now
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('PropularNow')}>
          <Text
            style={{
              flex: 1,
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: 17,
              color: 'black',
            }}>
            View All
            <Entypo
              style={{marginTop: 8}}
              name="chevron-right"
              size={20}
              color="black"
            />
          </Text>
        </TouchableOpacity>
      </View>

      {datas ? (
        datas.map(hit => {
          return (
            <TouchableOpacity
              key={hit.id}
              onPress={() => navigation.navigate('SingleProductScreen',{mealId:hit.id})}>
              <View style={{marginTop: 22}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <Image
                      style={styles.sideProduct}
                      source={{
                        uri: hit.meal_image,
                      }}
                    />
                  </View>

                  <View style={{flex: 2}}>
                    <View style={{marginLeft: 15}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          color: '#4c4c4c',
                        }}>
                        {' '}
                        <Entypo
                          style={{marginTop: 8}}
                          name="star"
                          size={20}
                          color="#FDB416"
                        />
                        {''} {hit.meal_name}
                      </Text>
                      <Text style={{marginLeft: 5, color: '#4c4c4c'}}>
                        {hit.meal_description.slice(0,100)}...
                      </Text>

                      <View
                        style={{
                          backgroundColor: '#4c4c4c',
                          padding: 0.5,
                          marginHorizontal: 10,
                          marginVertical: 10,
                        }}></View>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          marginLeft: 5,
                          fontSize: 18,
                          color: '#4c4c4c',
                        }}>
                        ₹{hit.meal_price}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <></>
      )}
    </View>
  );
};

export default PropularNowProducts;
