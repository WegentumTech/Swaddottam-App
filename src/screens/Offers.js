import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../Styles/GloablStyles';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Accordion from '../components/ReferAndEarn/Accordion';

const Offers = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{backgroundColor: '#FDB416', padding: 10, height: 200}}>
        <AntDesign
          onPress={() => navigation.goBack()}
          style={{marginHorizontal: 10, marginTop: 5}}
          name="arrowleft"
          size={22}
          color="white"
        />

        <Image
          style={styles.referandearnimage}
          source={require('../assets/img/coins.png')}
        />

        <View style={{marginHorizontal: 10}}>
          <Text style={{color: 'black', fontSize: 18, marginTop: 28}}>
            Refer your friends
          </Text>
          <Text
            style={{
              fontSize: 25,
              marginTop: 1,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Earn ₹100 each
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            flexDirection: 'row',
            position: 'absolute',
            top: 160,
            left: 10.8,
            elevation: 10,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Zocial name="bitcoin" size={45} color="black" />
            <View style={{marginTop: 10, marginLeft: 10}}>
              <Text style={{color: 'black'}}>TOTAL REWARD</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                ₹ 0
              </Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                textAlign: 'right',
                marginTop: 16,
                backgroundColor: '#D9D9D9',
                marginLeft: 145,
                borderRadius: 30,
                padding: 5,
              }}>
              <AntDesign name="right" size={20} color="black" />
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#D9D9D9',
          padding: 15,
          marginTop: 60,
          height: 236,
          marginHorizontal: 12,
        }}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={{flex: 1}}>
            <View>
              <AntDesign
                name="link"
                size={18}
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 50,
                }}
                color="black"
              />
            </View>
          </Text>
          <Text style={{flex: 4, color: 'black'}}>
            Invite your friends to install the app with with your referal code.
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={{flex: 1}}>
            <View>
              <MaterialIcons
                name="restaurant-menu"
                size={18}
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 50,
                }}
                color="black"
              />
            </View>
          </Text>
          <Text style={{flex: 4, color: 'black', marginTop: 8}}>
            Your friend places a minimum order of ₹300
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={{flex: 1}}>
            <View>
              <FontAwesome
                name="money"
                size={18}
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 50,
                }}
                color="black"
              />
            </View>
          </Text>
          <Text style={{flex: 4, color: 'black', marginTop: 6}}>
            You get ₹100 in your wallet
          </Text>
        </View>
      </View>

      <Accordion />
    </ScrollView>
  );
};

export default Offers;
