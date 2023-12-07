import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY} from '../styles/consts/GlobalStyles';
import React, {useState} from 'react';
import StoreProfileHeader from '../(components)/StoreProfileHeader';
import SmallBtn from '../(components)/SmallBtn';
import OptionWithCross from '../(components)/OptionWithCross';
import ProductCard from '../(components)/ProductCard';
import Browse from '../library/Browse';
// icons

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const StoreProfileScreen = ({navigation}) => {
  const [pressed, setPressed] = useState(1);

  const CardData = Browse.slice(0, 4);

  const btnText = [
    {text: 'All Products'},
    {text: 'Fruits'},
    {text: 'Vegetables'},
    {text: 'Home'},
  ];
  return (
    <SafeAreaView style={COMMON.super_Container}>
      <StoreProfileHeader title={'Tradly Store'} />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.alphaLogo}>
              <Text style={styles.alphaLogoText}>T</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Tradly Store</Text>
              <Text
                style={[
                  styles.faded,
                  {
                    opacity: 0.2,
                  },
                ]}>
                Tradly Store
              </Text>
            </View>
          </View>
          <SmallBtn
            text={'Follow'}
            btnColor={COLOR.green}
            color={COLOR.white}
          />
        </View>
        <Text style={styles.faded}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nunc
          vel rhoncus, sed. Neque hendrerit risus ut metus ultrices ac. Dui
          morbi eu amet id mauris. Eget at ut.
        </Text>
        <View style={styles.optionsContainer}>
          <OptionWithCross text={'Groceries'} />
          <OptionWithCross text={'Vegetables'} />
        </View>
      </View>
      <View style={styles.container_1}>
        <View style={styles.follower}>
          <Text style={styles.title}>Total Followers</Text>
          <Text style={styles.title}>0</Text>
        </View>
        <View style={styles.follower}>
          <Text style={styles.title}>Total Products</Text>
          <Text style={styles.title}>0</Text>
        </View>
      </View>
      <View style={styles.container_2}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.btnScroll}>
          {btnText.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => setPressed(i)}
                style={pressed == i ? styles.btnHover : styles.btn}>
                <Text
                  style={pressed == i ? styles.btnTextHover : styles.btnText}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <ScrollView contentContainerStyle={styles.products_Cards}>
          <ProductCard data={CardData} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default StoreProfileScreen;

const styles = StyleSheet.create({
  products_Cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: pixelSizeVertical(10),
    justifyContent: 'center',
    marginTop: pixelSizeVertical(4),
    paddingBottom: pixelSizeVertical(600),
  },
  btnTextHover: {
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.montserratMedium,
    color: COLOR.white,
  },
  btnText: {
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.montserratMedium,
    color: COLOR.neutral,
  },
  btnHover: {
    paddingHorizontal: pixelSizeVertical(13),
    height: widthPixel(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(15),
    backgroundColor: COLOR.green,
  },
  btn: {
    paddingHorizontal: pixelSizeVertical(13),
    height: widthPixel(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(15),
    borderColor: COLOR.border_clr,
    borderWidth: widthPixel(1),
  },
  btnScroll: {
    paddingHorizontal: pixelSizeVertical(23),
    gap: pixelSizeVertical(12),
    paddingBottom: pixelSizeVertical(20),
  },
  container_1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pixelSizeVertical(55),
    justifyContent: 'space-between',
    height: pixelSizeVertical(88),
    backgroundColor: COLOR.white,
    borderRadius: pixelSizeVertical(10),
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(30),
  },
  follower: {
    alignItems: 'center',
    gap: pixelSizeVertical(6),
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(10),
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
  },
  titleContainer: {
    gap: pixelSizeVertical(3),
  },
  faded: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(12),
    color: COLOR.neutral,
    opacity: 0.7,
  },
  alphaLogoText: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(40),
    color: COLOR.white,
    textTransform: 'uppercase',
    marginBottom: pixelSizeVertical(10),
  },
  alphaLogo: {
    width: widthPixel(48),
    height: widthPixel(48),
    backgroundColor: COLOR.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(48),
    borderColor: COLOR.white,
    alignSelf: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: pixelSizeVertical(10),
  },
  container: {
    height: widthPixel(240),
    width: '100%',
    backgroundColor: COLOR.white,
    borderRadius: pixelSizeVertical(10),
    marginTop: pixelSizeVertical(-10),
    paddingStart: pixelSizeVertical(46),
    paddingEnd: pixelSizeVertical(39),
    paddingTop: pixelSizeVertical(22),
    gap: pixelSizeVertical(25),
  },
});
