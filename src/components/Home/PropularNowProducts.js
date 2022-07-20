import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const PropularNowProducts = () => {
  const navigation = useNavigation();

  return (
    <View style={{marginHorizontal: 15, marginTop: 35, marginBottom: 10,elevation:10}}>
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

      <TouchableOpacity
        onPress={() => navigation.navigate('SingleProductScreen')}>
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
              <View style={{marginLeft: 15}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: '#4c4c4c'}}>
                  {' '}
                  <Entypo
                    style={{marginTop: 8}}
                    name="star"
                    size={20}
                    color="#FDB416"
                  />
                  {''} CORN DO PYAZA
                </Text>
                <Text style={{marginLeft: 5, color: '#4c4c4c'}}>
                  Lorem Ipsum is simply dummy text of the printing and some more
                  data.
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
                  ₹200
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleProductScreen')}>
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
              <View style={{marginLeft: 15}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: '#4c4c4c'}}>
                  {' '}
                  <Entypo
                    style={{marginTop: 8}}
                    name="star"
                    size={20}
                    color="#FDB416"
                  />
                  {''} CORN DO PYAZA
                </Text>
                <Text style={{marginLeft: 5, color: '#4c4c4c'}}>
                  Lorem Ipsum is simply dummy text of the printing and some more
                  data.
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
                  ₹200
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleProductScreen')}>
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
              <View style={{marginLeft: 15}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: '#4c4c4c'}}>
                  {' '}
                  <Entypo
                    style={{marginTop: 8}}
                    name="star"
                    size={20}
                    color="#FDB416"
                  />
                  {''} CORN DO PYAZA
                </Text>
                <Text style={{marginLeft: 5, color: '#4c4c4c'}}>
                  Lorem Ipsum is simply dummy text of the printing and some more
                  data.
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
                  ₹200
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleProductScreen')}>
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
              <View style={{marginLeft: 15}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: '#4c4c4c'}}>
                  {' '}
                  <Entypo
                    style={{marginTop: 8}}
                    name="star"
                    size={20}
                    color="#FDB416"
                  />
                  {''} CORN DO PYAZA
                </Text>
                <Text style={{marginLeft: 5, color: '#4c4c4c'}}>
                  Lorem Ipsum is simply dummy text of the printing and some more
                  data.
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
                  ₹200
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleProductScreen')}>
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
              <View style={{marginLeft: 15}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: '#4c4c4c'}}>
                  {' '}
                  <Entypo
                    style={{marginTop: 8}}
                    name="star"
                    size={20}
                    color="#FDB416"
                  />
                  {''} CORN DO PYAZA
                </Text>
                <Text style={{marginLeft: 5, color: '#4c4c4c'}}>
                  Lorem Ipsum is simply dummy text of the printing and some more
                  data.
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
                  ₹200
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PropularNowProducts;
