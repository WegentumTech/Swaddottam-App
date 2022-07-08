import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';

const RecommendedForYou = () => {
  return (
    <View style={{marginHorizontal: 15, marginTop: 15}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1, fontWeight: 'bold', fontSize: 17,color:"black"}}>
          Recommended For You
        </Text>
      </View>

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
              <Text style={{fontWeight: 'bold', fontSize: 20,color:"black"}}>
                CORN DO PYAZA
              </Text>
              <Text style={{marginLeft: 5,color:"black"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </Text>
              <Text style={{fontWeight: 'bold', marginLeft: 5, fontSize: 18,color:"black"}}>
                ₹200
              </Text>
            </View>
          </View>
        </View>
      </View>
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
              <Text style={{fontWeight: 'bold', fontSize: 20,color:"black"}}>
                CORN DO PYAZA
              </Text>
              <Text style={{marginLeft: 5,color:"black"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </Text>
              <Text style={{fontWeight: 'bold', marginLeft: 5, fontSize: 18,color:"black"}}>
                ₹200
              </Text>
            </View>
          </View>
        </View>
      </View>
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
              <Text style={{fontWeight: 'bold', fontSize: 20,color:"black"}}>
                CORN DO PYAZA
              </Text>
              <Text style={{marginLeft: 5,color:"black"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </Text>
              <Text style={{fontWeight: 'bold', marginLeft: 5, fontSize: 18,color:"black"}}>
                ₹200
              </Text>
            </View>
          </View>
        </View>
      </View>
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
              <Text style={{fontWeight: 'bold', fontSize: 20,color:"black"}}>
                CORN DO PYAZA
              </Text>
              <Text style={{marginLeft: 5,color:"black"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </Text>
              <Text style={{fontWeight: 'bold', marginLeft: 5, fontSize: 18,color:"black"}}>
                ₹200
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecommendedForYou;
