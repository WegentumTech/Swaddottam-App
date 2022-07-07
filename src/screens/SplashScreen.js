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
    <View  >
      <Image
        style={styles.tinyLogo}
        source={require('../assets/img/SplashLogo.png')}
      />
      <Text style={styles.splashScreenBottomVersion} >version 1.0.0</Text>
    </View>
  );
};

export default SplashScreen;