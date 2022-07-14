import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/GloablStyles';
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View  style={{flex:1}}>
      <View style={{flex:1,justifyContent:"center"}} >

      <Image
        style={styles.tinyLogo}
        source={require('../assets/img/SplashLogo.png')}
        />
      
        </View>
    </View>
  );
};

export default SplashScreen;
