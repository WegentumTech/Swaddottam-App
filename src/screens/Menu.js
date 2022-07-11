import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <PressBackWithTitle title="Menu Collection" />

      <View style={{marginTop: 20, marginHorizontal: 10, marginBottom: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SingleMenuItem')}
          style={{marginTop: 15}}>
          <ImageBackground
            source={require('../assets/img/food2.jpg')}
            style={{
              width: '100%',
              height: 150,
              borderRadius: 15,
              overflow: 'hidden',
            }}>
            <View style={{justifyContent: 'flex-end', flex: 1}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                  backgroundColor: 'black',
                  opacity: 0.7,
                  fontWeight: 'bold',
                }}>
                Veg Starter
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SingleMenuItem')}
          style={{marginTop: 15}}>
          <ImageBackground
            source={require('../assets/img/food2.jpg')}
            style={{
              width: '100%',
              height: 150,
              borderRadius: 15,
              overflow: 'hidden',
            }}>
            <View style={{justifyContent: 'flex-end', flex: 1}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                  backgroundColor: 'black',
                  opacity: 0.7,
                  fontWeight: 'bold',
                }}>
                Veg Starter
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SingleMenuItem')}
          style={{marginTop: 15}}>
          <ImageBackground
            source={require('../assets/img/food2.jpg')}
            style={{
              width: '100%',
              height: 150,
              borderRadius: 15,
              overflow: 'hidden',
            }}>
            <View style={{justifyContent: 'flex-end', flex: 1}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                  backgroundColor: 'black',
                  opacity: 0.7,
                  fontWeight: 'bold',
                }}>
                Veg Starter
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SingleMenuItem')}
          style={{marginTop: 15}}>
          <ImageBackground
            source={require('../assets/img/food2.jpg')}
            style={{
              width: '100%',
              height: 150,
              borderRadius: 15,
              overflow: 'hidden',
            }}>
            <View style={{justifyContent: 'flex-end', flex: 1}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                  backgroundColor: 'black',
                  opacity: 0.7,
                  fontWeight: 'bold',
                }}>
                Veg Starter
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SingleMenuItem')}
          style={{marginTop: 15}}>
          <ImageBackground
            source={require('../assets/img/food2.jpg')}
            style={{
              width: '100%',
              height: 150,
              borderRadius: 15,
              overflow: 'hidden',
            }}>
            <View style={{justifyContent: 'flex-end', flex: 1}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                  backgroundColor: 'black',
                  opacity: 0.7,
                  fontWeight: 'bold',
                }}>
                Veg Starter
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SingleMenuItem')}
          style={{marginTop: 15}}>
          <ImageBackground
            source={require('../assets/img/food2.jpg')}
            style={{
              width: '100%',
              height: 150,
              borderRadius: 15,
              overflow: 'hidden',
            }}>
            <View style={{justifyContent: 'flex-end', flex: 1}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                  backgroundColor: 'black',
                  opacity: 0.7,
                  fontWeight: 'bold',
                }}>
                Veg Starter
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SingleMenuItem')}
          style={{marginTop: 15}}>
          <ImageBackground
            source={require('../assets/img/food2.jpg')}
            style={{
              width: '100%',
              height: 150,
              borderRadius: 15,
              overflow: 'hidden',
            }}>
            <View style={{justifyContent: 'flex-end', flex: 1}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                  backgroundColor: 'black',
                  opacity: 0.7,
                  fontWeight: 'bold',
                }}>
                Veg Starter
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Menu;
