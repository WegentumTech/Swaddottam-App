import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBack from '../../components/Reusable/PressBack';
import styles from '../../Styles/GloablStyles';
import StepIndicator from 'react-native-step-indicator';
import Entypo from 'react-native-vector-icons/Entypo';
import RandomScrollableFoods from '../../components/Home/RandomScrollableFoods';

const SingleOrder = () => {
  const [currentStatus, setCurrentStatus] = useState(2);

  const labels = ['Registered', 'Cooking', 'On The Way', 'Delivered'];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',
  };

  return (
    <ScrollView>
      <PressBack />

      <View style={{marginHorizontal: 10, marginTop: 20}}>
        <View>
          <View style={{marginTop: 22}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SingleOrderScreen')}>
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
                      ₹ 150
                    </Text>
                    <Text
                      style={{marginLeft: 5, color: 'black', marginTop: 10}}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 18,
              }}>
              Current Status
            </Text>

            <View style={{marginTop: 15}}>
              <StepIndicator
                stepCount={4}
                customStyles={customStyles}
                currentPosition={currentStatus}
                labels={labels}
              />
            </View>
          </View>

          {currentStatus === 3 ? (
            <View>
              <View>
                <Text
                  style={{
                    marginTop: 20,
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  Post Your Review
                </Text>

                <TextInput
                  multiline={true}
                  numberOfLines={5}
                  style={styles.textArea}
                  placeholder="Post your review here..."
                />
                <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                  <Entypo
                    style={{fontSize: 22, color: 'red'}}
                    name="star"
                    size={20}
                    color="black"
                  />
                  <Entypo
                    style={{fontSize: 22, color: 'red'}}
                    name="star"
                    size={20}
                    color="black"
                  />
                  <Entypo
                    style={{fontSize: 22, color: 'red'}}
                    name="star"
                    size={20}
                    color="black"
                  />
                  <Entypo
                    style={{fontSize: 22, color: 'red'}}
                    name="star"
                    size={20}
                    color="black"
                  />

                  <Entypo
                    style={{fontSize: 22}}
                    name="star-outlined"
                    size={20}
                    color="black"
                  />
                </View>
              </View>

              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 30,
                    backgroundColor: '#FDB416',
                    marginHorizontal: 100,
                    padding: 10,
                    color: 'black',
                    borderRadius: 15,
                    fontWeight: 'bold',
                  }}>
                  POST
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View></View>
          )}
        </View>

        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Foods Recommended For You
          </Text>
          <RandomScrollableFoods />
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleOrder;
