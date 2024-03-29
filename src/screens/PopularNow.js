import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from '../Styles/GloablStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
const PropularNow = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <PressBackWithTitle title="Popular Meals" />

      <View style={{marginHorizontal: 15, marginTop: 15, marginBottom: 20}}>
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
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {' '}
                    <Entypo
                      style={{marginTop: 8}}
                      name="star"
                      size={20}
                      color="#314C1C"
                    />
                    {''} CORN DO PYAZA
                  </Text>
                  <Text style={{marginLeft: 5, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontSize: 18,
                      color: 'black',
                    }}>
                    ₹200
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 5}}
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
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {' '}
                    <Entypo
                      style={{marginTop: 8}}
                      name="star"
                      size={20}
                      color="#314C1C"
                    />
                    {''} CORN DO PYAZA
                  </Text>
                  <Text style={{marginLeft: 5, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontSize: 18,
                      color: 'black',
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
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {' '}
                    <Entypo
                      style={{marginTop: 8}}
                      name="star"
                      size={20}
                      color="#314C1C"
                    />
                    {''} CORN DO PYAZA
                  </Text>
                  <Text style={{marginLeft: 5, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontSize: 18,
                      color: 'black',
                    }}>
                    ₹200
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 5}}
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
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {' '}
                    <Entypo
                      style={{marginTop: 8}}
                      name="star"
                      size={20}
                      color="#314C1C"
                    />
                    {''} CORN DO PYAZA
                  </Text>
                  <Text style={{marginLeft: 5, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontSize: 18,
                      color: 'black',
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
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {' '}
                    <Entypo
                      style={{marginTop: 8}}
                      name="star"
                      size={20}
                      color="#314C1C"
                    />
                    {''} CORN DO PYAZA
                  </Text>
                  <Text style={{marginLeft: 5, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontSize: 18,
                      color: 'black',
                    }}>
                    ₹200
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 5}}
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
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {' '}
                    <Entypo
                      style={{marginTop: 8}}
                      name="star"
                      size={20}
                      color="#314C1C"
                    />
                    {''} CORN DO PYAZA
                  </Text>
                  <Text style={{marginLeft: 5, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontSize: 18,
                      color: 'black',
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
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {' '}
                    <Entypo
                      style={{marginTop: 8}}
                      name="star"
                      size={20}
                      color="#314C1C"
                    />
                    {''} CORN DO PYAZA
                  </Text>
                  <Text style={{marginLeft: 5, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontSize: 18,
                      color: 'black',
                    }}>
                    ₹200
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 5}}
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
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {' '}
                    <Entypo
                      style={{marginTop: 8}}
                      name="star"
                      size={20}
                      color="#314C1C"
                    />
                    {''} CORN DO PYAZA
                  </Text>
                  <Text style={{marginLeft: 5, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontSize: 18,
                      color: 'black',
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
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {' '}
                    <Entypo
                      style={{marginTop: 8}}
                      name="star"
                      size={20}
                      color="#314C1C"
                    />
                    {''} CORN DO PYAZA
                  </Text>
                  <Text style={{marginLeft: 5, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontSize: 18,
                      color: 'black',
                    }}>
                    ₹200
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 5}}
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
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {' '}
                    <Entypo
                      style={{marginTop: 8}}
                      name="star"
                      size={20}
                      color="#314C1C"
                    />
                    {''} CORN DO PYAZA
                  </Text>
                  <Text style={{marginLeft: 5, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontSize: 18,
                      color: 'black',
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
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {' '}
                    <Entypo
                      style={{marginTop: 8}}
                      name="star"
                      size={20}
                      color="#314C1C"
                    />
                    {''} CORN DO PYAZA
                  </Text>
                  <Text style={{marginLeft: 5, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontSize: 18,
                      color: 'black',
                    }}>
                    ₹200
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 5}}
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
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {' '}
                    <Entypo
                      style={{marginTop: 8}}
                      name="star"
                      size={20}
                      color="#314C1C"
                    />
                    {''} CORN DO PYAZA
                  </Text>
                  <Text style={{marginLeft: 5, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontSize: 18,
                      color: 'black',
                    }}>
                    ₹200
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PropularNow;
