import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from 'react-native-reanimated';

const styles = StyleSheet.create({
  tinyLogo: {
    marginTop: '70%',
    width: '100%',
    height: 100,
    marginHorizontal: 5,
  },
  splashScreenBottomVersion: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 300,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomColor: '#BAB6B6',
    borderBottomWidth: 2,
    color: 'black',
    fontSize:20
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#FDB416',
    marginHorizontal: 80,
    padding: 5,
    borderRadius: 10,
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  searchBoxUI: {
    padding: 8,
    borderColor: '#D9D9D9',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    color: 'black',
  },
  tags: {
    borderColor: '#D9D9D9',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 3,
    color: 'black',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 20,
  },
  sideProduct: {
    width: '100%',
    height: 150,
    marginHorizontal: 5,
    borderRadius: 15,
  },
  slideProduct: {
    width: 80,
    height: 80,
    borderRadius: 15,
    margin: 1,
  },
  randomFoods: {
    width: 200,
    height: 120,
    borderRadius: 15,
    margin: 3,
  },
  fastFoodProducts: {
    width: 80,
    height: 80,
    borderRadius: 15,
    margin: 5,
  },
  orderBack: {
    backgroundColor: '#EC2727',
    padding: 15,
    margin: 1,
    borderRadius: 13,
  },
  orderType: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  userIcon: {
    width: 35,
    height: 35,
    backgroundColor: '#FDB416',
    borderRadius: 20,
    padding: 15,
  },
  LocationIcon: {
    width: 35,
    height: 35,
    marginTop: 4,
  },
  DownIcon: {
    width: 20,
    height: 20,
    marginTop: 8,
  },
  comingsoon: {
    width: 210,
    height: 70,
  },
  drawerBar: {
    borderTopColor: 'black',
    borderTopWidth: 2,
    marginHorizontal: 30,
    marginBottom: 10,
    padding: 10,
  },
  DrawerProfileIcon: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  searchInputBox: {
    height: 40,
    margin: 12,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    color: 'black',
  },
  HeadingTextColor: {
    color: 'black',
  },
  OtpInput: {
    height: 40,
    margin: 12,
    padding: 10,
    borderColor: '#BAB6B6',
    borderWidth: 2,
    color: 'black',
    width: 30,
    backgroundColor:"#f5f4f2",
    borderRadius:5

  },
  image:{
    flex: 1,
    justifyContent: "center"
  },
  UserProfileIcon: {
    width: 120,
    height: 120,
    borderRadius: 100,
    position:"absolute",
    top:130,
    marginHorizontal:10
  },


  textArea:{

    // height: 40,
    margin: 12,
    // padding: 10,
    borderColor: '#BAB6B6',
    borderWidth: 2,
    color: 'black',
    borderRadius:10

  },
  simpleInput: {
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomColor: '#BAB6B6',
    borderBottomWidth: 2,
    color: 'black',
  },
  EditUserProfileIcon: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginHorizontal:30,
    marginTop:15
  },
  CheckZipCode:{
    height: 40,
    borderColor: '#BAB6B6',
    borderWidth: 2,
    color: 'black',
    fontSize:15,
    flex:5,
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8
    
  },
  menuItems: {
    width: 115,
    height: 90,
    borderRadius: 15,
    margin: 3,
  },
  mainMenu:{
    margin:2,
    marginTop:20
  },
  helpandsupportimage: {
    width: 240,
    height: 230,
    marginHorizontal: 5,
    alignSelf:"center",
    marginTop:45
  },

  referandearnimage: {
    width: "30%",
    height: 120,
    position:"absolute",
    alignSelf:"flex-end",
    marginTop:35,
    right:15
  },
  
  
});

export default styles;
