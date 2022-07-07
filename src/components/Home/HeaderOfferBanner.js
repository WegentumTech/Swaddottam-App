import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';

const HeaderOfferBanner = () => {
  return (
    <View style={{marginHorizontal: 10, marginTop: 10}}>
      <Image
        style={styles.bannerImage}
        source={{
          uri: 'https://bouchonbendigo.com.au/wp-content/uploads/2022/03/istockphoto-1316145932-170667a.jpg',
        }}
      />
    </View>
  );
};

export default HeaderOfferBanner;
