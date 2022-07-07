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
import Footer from '../components/Reusable/Footer';
const HomeScreen = () => {
  return (
    <ScrollView >
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
      <Footer/>
    </ScrollView>
  );
};

export default HomeScreen;
