import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import TopHeader from '../components/Home/TopHeader';
import SearchBox from '../components/Home/SearchBox';
import Tags from '../components/Home/Tags';
import HeaderOfferBanner from '../components/Home/HeaderOfferBanner';
import PropularNowProducts from '../components/Home/PropularNowProducts';
import ScrollCategories from '../components/Home/ScrollCategories';
import FastFoodCategories from '../components/Home/FastFoodCategories';
import OrderTypes from '../components/Home/OrderTypes';
import RandomScrollableFoods from '../components/Home/RandomScrollableFoods';
import OurServices from '../components/Home/OurServices';
import RecommendedForYou from '../components/Home/RecommendedForYou';
const HomeScreen = () => {
  return (
    <ScrollView style={{marginHorizontal: 30, marginTop: 20}}>
      <TopHeader />
      <SearchBox />
      <Tags />
      <HeaderOfferBanner />
      <PropularNowProducts />
      <ScrollCategories />
      <FastFoodCategories />
      <OrderTypes />
      <RandomScrollableFoods />
      <OurServices />
      <RecommendedForYou />
    </ScrollView>
  );
};

export default HomeScreen;
