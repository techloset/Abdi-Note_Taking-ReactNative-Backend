import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import WishlistHeader from '../(components)/WishlistHeader';
import React from 'react';
// icons
import ChevDownIcon from '../assets/images/icons/chevDown.svg';
import DoneIcon from '../assets/images/icons/done.svg';
import HLineIcon from '../assets/images/icons/h_Line.svg';
import SortLineIcon from '../assets/images/icons/sortLine.svg';
import SCREENS from '../library/SCREENS';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const CheckoutSuccessScreen = ({navigation}) => {
  const orderData = [
    {
      title: 'Order Placed',
      desc: 'Order#123455 from Fashion Point',
      date: '05/08/2019',
      time: '11:10 AM',
    },
    {
      title: 'Payment Confirmed',
      desc: 'Payment Confirmed Status',
      date: '05/08/2019',
      time: '11:10 AM',
    },
    {
      title: 'Processed',
      desc: 'Processed Status',
      date: '05/08/2019',
      time: '11:10 AM',
    },
    {
      title: 'Delivered',
      desc: 'Delivered Status',
      date: '05/08/2019',
      time: '11:10 AM',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <WishlistHeader title={'My Cart'} />
      <ScrollView>
        <View style={styles.container_1}>
          <DoneIcon />
          <Text style={[TEXT.heading, {color: COLOR.neutral}]}>
            Thanks for Order
          </Text>
        </View>
        <View style={styles.container_2}>
          <View style={styles.itemContainer}>
            <Image
              style={styles.itemimage}
              source={require('../assets/images/coke_2.png')}
            />
            <View style={styles.itemText}>
              <Text style={TEXT.cardText}>Coca Cola</Text>
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
              <View style={styles.qtyContainer}>
                <Text style={styles.qtyText}>Qty : 1</Text>
                <ChevDownIcon width={9} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.track_Head}>
            <Text style={styles.track_Text}>Track Order</Text>
            <Text style={styles.track_Text_2}>Order ID - 123455</Text>
            <HLineIcon />
          </View>
          <View style={styles.track}>
            <SortLineIcon />
            <View style={styles.track_Main}>
              {orderData.map((item, i) => {
                return (
                  <View key={i} style={styles.info_Container}>
                    <View style={{gap: pixelSizeVertical(6)}}>
                      <Text style={styles.info_Text}>{item.title}</Text>
                      <Text style={styles.info_Text_Faded}>{item.desc}</Text>
                    </View>
                    <View style={styles.date}>
                      <Text style={styles.info_Text_Faded}>{item.date}</Text>
                      <Text style={styles.info_Text_Faded}>{item.time}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.container_3}>
          <View style={styles.border}>
            <Text style={TEXT.title}>Delivery Address</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.addressTitle}>Tradly Team</Text>
            <Text style={styles.addressDesc}>
              Flat Number 512, Eden Garden, Rewari
            </Text>
            <View>
              <Text style={styles.addressDesc}>
                Mobile: <Text style={{color: COLOR.black}}>9876543210</Text>
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.BOTTOM_NAVIGATOR)}
          style={styles.bottomBtn}>
          <Text style={styles.bottomBtn_Text}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutSuccessScreen;

const styles = StyleSheet.create({
  bottomBtn_Text: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(14),
    lineHeight: fontPixel(20),
    color: COLOR.black,
  },
  bottomBtn: {
    alignSelf: 'center',
    paddingTop: pixelSizeVertical(16),
    paddingBottom: pixelSizeVertical(40),
  },
  addressDesc: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(14),
    lineHeight: fontPixel(18),
    color: COLOR.grey,
  },
  addressTitle: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(14),
    lineHeight: fontPixel(21),
    color: COLOR.black,
  },
  addressContainer: {
    paddingHorizontal: pixelSizeVertical(16),
    paddingTop: pixelSizeVertical(11),
    gap: pixelSizeVertical(8),
  },
  border: {
    borderColor: COLOR.border_clr,
    borderBottomWidth: widthPixel(1),
    paddingHorizontal: pixelSizeVertical(16),
  },
  date: {
    alignItems: 'flex-end',
    gap: pixelSizeVertical(6),
  },
  info_Text_Faded: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(10),
    color: COLOR.grey,
    lineHeight: fontPixel(18),
    opacity: 0.5,
  },
  info_Text: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(14),
    color: COLOR.black,
    lineHeight: fontPixel(18),
  },
  info_Container: {
    flexDirection: 'row',
    width: pixelSizeVertical(300),
    justifyContent: 'space-between',
  },
  track_Main: {
    gap: pixelSizeVertical(30),
  },
  track: {
    marginTop: pixelSizeVertical(29.35),
    paddingStart: pixelSizeVertical(34),
    paddingEnd: pixelSizeVertical(17),
    gap: pixelSizeVertical(24.35),
    flexDirection: 'row',
  },
  track_Text_2: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(14),
    color: COLOR.grey,
    lineHeight: fontPixel(18),
    marginBottom: pixelSizeVertical(13.5),
  },
  track_Text: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(16),
    color: COLOR.black,
    lineHeight: fontPixel(20),
    marginBottom: pixelSizeVertical(7),
  },
  track_Head: {
    paddingHorizontal: pixelSizeVertical(20),
  },
  container: {
    marginBottom: pixelSizeVertical(15),
    height: widthPixel(404),
    width: '100%',
    backgroundColor: COLOR.white,
    paddingTop: pixelSizeVertical(18),
  },
  container_3: {
    height: widthPixel(146),
    width: '100%',
    backgroundColor: COLOR.white,
  },
  removeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(12),
    paddingTop: pixelSizeVertical(9),
    borderTopColor: 'rgba(0, 0, 0, 0.10)',
    borderTopWidth: widthPixel(1),
  },
  qtyText: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(12),
    color: COLOR.neutral,
  },
  qtyContainer: {
    flexDirection: 'row',
    gap: pixelSizeVertical(5),
    alignItems: 'center',
  },
  priceText: {
    fontSize: pixelSizeVertical(18),
    color: COLOR.green,
    fontFamily: FONT_FAMILY.montserratBold,
  },
  discountText: {
    fontSize: pixelSizeVertical(14),
    color: COLOR.neutral,
    fontFamily: FONT_FAMILY.montserratMedium,
    opacity: 0.7,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: pixelSizeVertical(14),
    alignItems: 'center',
  },
  itemText: {
    gap: pixelSizeVertical(14),
  },
  itemimage: {
    width: widthPixel(102),
    height: widthPixel(102),
  },
  itemContainer: {
    paddingHorizontal: pixelSizeVertical(16),
    paddingTop: pixelSizeVertical(29),
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(15),
  },
  container_2: {
    height: widthPixel(150),
    width: '100%',
    backgroundColor: COLOR.white,
    marginBottom: pixelSizeVertical(15),
  },
  container_1: {
    height: widthPixel(199),
    width: '100%',
    backgroundColor: COLOR.bg,
    justifyContent: 'center',
    alignItems: 'center',
    gap: pixelSizeVertical(7),
  },
  main: {
    backgroundColor: COLOR.bg,
    flex: 1,
  },
});
