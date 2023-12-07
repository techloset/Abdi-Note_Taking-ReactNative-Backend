import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import React, {useState} from 'react';
import {COLOR, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import DetailsScreenHeader from '../(components)/DetailsScreenHeader';
// icons
import IndicatorsIcon from '../assets/images/icons/indicators.svg';
import SeeAllBtn from '../(components)/SeeAllBtn';
import GreenBtn from '../(components)/GreenBtn';
import SCREENS from '../library/SCREENS';
import Paginator_Sec from '../(components)/Paginator_Sec';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const ProductDetailScreen = ({navigation, route}) => {
  const {item} = route.params;

  const [currentIndex, setCurrentIndex] = useState(0);

  const imgData = [
    {img: item.img},
    {img: item.img},
    {img: item.img},
    {img: item.img},
  ];

  const handleMomentumScrollEnd = event => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / ratio.SCREEN_WIDTH);
    setCurrentIndex(index);
  };
  return (
    <SafeAreaView>
      <StatusBar translucent={false} backgroundColor={COLOR.green} />
      <View style={styles.container_1}>
        <FlatList
          data={imgData}
          renderItem={({item, i}) => (
            <Image style={styles.backgroundImg} source={item.img} />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleMomentumScrollEnd}
        />
        <View style={styles.header}>
          <DetailsScreenHeader />
        </View>
        <View style={styles.indicator}>
          <Paginator_Sec data={imgData} currentIndex={currentIndex} />
        </View>
      </View>
      {/* <ImageBackground style={styles.backgroundImg} source={item.img}>
        <DetailsScreenHeader />
        <View style={styles.indicator}>
          <IndicatorsIcon />
        </View>
      </ImageBackground> */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>$25</Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={[
                styles.discountText,
                {textDecorationLine: 'line-through'},
              ]}>
              $50{' '}
            </Text>
            <Text style={styles.discountText}>50% off</Text>
          </View>
        </View>
      </View>
      <View style={styles.followContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>T</Text>
          </View>
          <Text style={styles.storeText}>Tradly Store</Text>
        </View>
        <SeeAllBtn text={'Follow'} />
      </View>
      {/* description */}
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
            cras placerat diam ipsum ut. Nisi vel adipiscing massa bibendum
            diam. Suspendisse mattis dui maecenas duis mattis. Mattis aliquam at
            arcu, semper nunc, venenatis et pellentesque eu. Id tristique
            maecenas tristique habitasse eu elementum sed. Aliquam eget lacus,
            arcu, adipiscing eget feugiat in dolor sagittis.
          </Text>
          <Text
            style={[
              styles.descriptionText,
              {marginTop: pixelSizeVertical(15)},
            ]}>
            Non commodo, a justo massa porttitor sed placerat in. Orci tristique
            etiam tempus sed. Mi varius morbi egestas dictum tempor nisl. In
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={TEXT.title}>Details</Text>
          <View style={styles.options}>
            <View style={styles.optionLeft}>
              <Text style={styles.descriptionText}>Condition</Text>
              <Text style={styles.descriptionText}>Price Type</Text>
              <Text style={styles.descriptionText}>Category</Text>
              <Text style={styles.descriptionText}>Location</Text>
            </View>
            <View style={styles.optionRight}>
              <Text style={styles.descriptionText}>Organic</Text>
              <Text style={styles.descriptionText}>Fixed</Text>
              <Text style={styles.descriptionText}>Baverages</Text>
              <Text style={styles.descriptionText}>Kualalumpur, Malaysia</Text>
            </View>
          </View>
        </View>
        <View style={styles.addDetailsContainer}>
          <Text style={TEXT.title}>Additional Details</Text>
          <View style={styles.options}>
            <View style={styles.optionLeft}>
              <Text style={styles.descriptionText}>Delivery Details</Text>
            </View>
            <View style={styles.optionRight}>
              <Text style={styles.deliveryText}>
                Home Delivery Available, Cash On Delivery
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <GreenBtn
          text={'Add To Cart'}
          handleFunc={() => navigation.navigate(SCREENS.BOTTOM_NAVIGATOR)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  bottom: {
    height: widthPixel(80),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.white,
    position: 'absolute',
    bottom: pixelSizeVertical(425),
    elevation: 30,
    marginTop: pixelSizeVertical(100),
  },
  deliveryText: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    width: widthPixel(319),
    lineHeight: fontPixel(20),
    width: widthPixel(183),
  },
  optionRight: {
    gap: pixelSizeVertical(15),
  },
  optionLeft: {
    width: widthPixel(93),
    gap: pixelSizeVertical(15),
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: pixelSizeVertical(32),
  },
  addDetailsContainer: {
    backgroundColor: COLOR.white,
    width: '100%',
    height: widthPixel(118),
    borderRadius: pixelSizeVertical(8),
    paddingHorizontal: pixelSizeVertical(30),
  },
  detailsContainer: {
    backgroundColor: COLOR.white,
    width: '100%',
    height: widthPixel(195),
    borderRadius: pixelSizeVertical(8),
    paddingHorizontal: pixelSizeVertical(30),
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    width: widthPixel(319),
    lineHeight: fontPixel(20),
    letterSpacing: fontPixel(-0.165),
    opacity: 0.7,
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.white,
    width: '100%',
    height: widthPixel(353),
    borderRadius: pixelSizeVertical(8),
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: pixelSizeVertical(518),
    gap: pixelSizeVertical(6),
  },
  logoText: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(20),
    color: COLOR.white,
    textTransform: 'uppercase',
  },
  logo: {
    width: widthPixel(32),
    height: widthPixel(32),
    backgroundColor: COLOR.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(32),
    borderWidth: widthPixel(1.5),
    borderColor: COLOR.white,
    alignSelf: 'center',
  },
  storeText: {
    fontSize: pixelSizeVertical(14),
    color: COLOR.neutral,
    fontFamily: FONT_FAMILY.montserratMedium,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(8),
  },
  followContainer: {
    height: widthPixel(72),
    backgroundColor: COLOR.white,
    paddingHorizontal: pixelSizeVertical(12),
    flexDirection: 'row',
    marginVertical: pixelSizeVertical(6),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: pixelSizeVertical(18),
    color: COLOR.green,
    fontFamily: FONT_FAMILY.montserratBold,
  },
  discountText: {
    fontSize: pixelSizeVertical(14),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.montserratMedium,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: pixelSizeVertical(14),
    alignItems: 'center',
  },
  title: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(18),
    color: COLOR.neutral,
    marginBottom: pixelSizeVertical(10),
  },
  titleContainer: {
    height: widthPixel(95),
    backgroundColor: COLOR.white,
    padding: pixelSizeVertical(16),
  },
  indicator: {
    alignItems: 'center',
    position: 'absolute',
    bottom: pixelSizeVertical(15),
    alignSelf: 'center',
  },
  header: {
    position: 'absolute',
    top: pixelSizeVertical(0),
    right: pixelSizeVertical(0),
    left: pixelSizeVertical(0),
  },
  backgroundImg: {
    height: widthPixel(226),
    width: widthPixel(375),
    position: 'relative',
  },
});
