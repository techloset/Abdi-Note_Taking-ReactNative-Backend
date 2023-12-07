import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
// icon
import TLogo from '../assets/images/icons/tLogo.svg';
import EditIcon from '../assets/images/icons/Edit.svg';
import DeleteIcon from '../assets/images/icons/Delete.svg';
import SCREENS from '../library/SCREENS';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const StoreProductCard = ({data}) => {
  const navigation = useNavigation();

  const MapData = data;
  return (
    <>
      {MapData.map((item, index) => {
        return (
          <View key={index} style={styles.container}>
            <ImageBackground style={styles.img} source={item.img}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(SCREENS.ADD_PRODUCT, {
                    data: 'Edit Product',
                  })
                }
                style={styles.optionIcon}>
                <EditIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionIcon}>
                <DeleteIcon />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.infoContainer}>
              <Text style={TEXT.cardText}>{item.title}</Text>
              <View style={styles.infoLogoContainer}>
                <View style={styles.info}>
                  <TLogo />
                  <Text style={TEXT.faded}>Tradly</Text>
                </View>
                <View style={styles.info}>
                  {item.dis && <Text style={styles.discountText}>$35</Text>}
                  <Text style={styles.priceText}>$25</Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default StoreProductCard;

const styles = StyleSheet.create({
  optionIcon: {
    height: widthPixel(32),
    width: widthPixel(32),
    borderRadius: pixelSizeVertical(32),
    backgroundColor: COLOR.icon_bg_clr,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    fontSize: pixelSizeVertical(14),
    color: COLOR.green,
    fontFamily: FONT_FAMILY.montserratSemiBold,
  },
  discountText: {
    fontSize: pixelSizeVertical(10),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.montserratRegular,
    textDecorationLine: 'line-through',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(5.95),
  },
  infoLogoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: pixelSizeVertical(10),
  },
  infoContainer: {
    paddingStart: pixelSizeVertical(11.9),
    paddingEnd: pixelSizeVertical(5.95),
    paddingTop: pixelSizeVertical(15),
    paddingBottom: pixelSizeVertical(11.06),
  },
  img: {
    width: widthPixel(160),
    height: widthPixel(127.413),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: pixelSizeVertical(26),
  },
  container: {
    width: widthPixel(159.652),
    height: widthPixel(200),
    backgroundColor: COLOR.white,
    borderRadius: widthPixel(10),
    borderColor: COLOR.border_clr,
    borderWidth: widthPixel(1),
    overflow: 'hidden',
  },
});
