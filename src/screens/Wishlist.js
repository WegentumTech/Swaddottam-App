import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
import styles from '../Styles/GloablStyles';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Wishlist = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <PressBackWithTitle title="Your Wishlist" />
      <View style={{marginHorizontal: 20,marginVertical:20}}>
        <View style={{marginTop: 22}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleProductScreen')}>
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
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 22}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleProductScreen')}>
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
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 22}}>
          <TouchableOpacity
           onPress={() => navigation.navigate('SingleProductScreen')}>
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
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 22}}>
          <TouchableOpacity
           onPress={() => navigation.navigate('SingleProductScreen')}>
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
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 22}}>
          <TouchableOpacity
           onPress={() => navigation.navigate('SingleProductScreen')}>
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
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 22}}>
          <TouchableOpacity
           onPress={() => navigation.navigate('SingleProductScreen')}>
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
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Wishlist;
