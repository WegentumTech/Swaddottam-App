import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PressBackWithTitle = props => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 18,
        marginHorizontal: 25,
        marginBottom: 10,
      }}>
      <Text >
        <AntDesign
          onPress={() => navigation.goBack()}
          style={{marginTop: 8}}
          name="leftcircle"
          size={25}
          color="black"
        />
      </Text>
      <Text style={{flex: 1, fontSize: 19, fontWeight: 'bold', color: 'black',textAlign:"center"}}>
        {'   '}
        {props.title}
      </Text>
    </View>
  );
};

export default PressBackWithTitle;
