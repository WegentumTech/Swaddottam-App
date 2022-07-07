import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';
import {useNavigation} from '@react-navigation/native';

const TopHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={{marginHorizontal: 10, marginTop: 10, flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={styles.LocationIcon}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
          }}
        />
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Rathyarta Crossing..
          </Text>
          <Text>Jahumandi</Text>
        </View>
        <Image
          style={styles.DownIcon}
          source={{
            uri: 'https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png',
          }}
        />
      </View>

      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.userIcon}
            source={{
              uri: 'https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopHeader;
