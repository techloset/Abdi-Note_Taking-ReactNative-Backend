import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import HomeHeader from '../(components)/HomeHeader';
import SCREENS from '../library/SCREENS';
// icon
import Todo_Icon from '../assets/images/icons/todo_Icon.svg';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.transListContainer}>
          <View style={styles.transList}>
            <View style={styles.transLeft}>
              <View style={styles.transImgContainer}>
                <Todo_Icon />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Todo</Text>
                <Text style={styles.date}>Date</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.payBtn}>
                <Text style={styles.payBtnText}>Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  payBtnText: {
    fontSize: fontPixel(16),
    color: COLOR.parrot,
    fontFamily: FONT_FAMILY.interMedium,
    letterSpacing: fontPixel(-0.64),
  },
  payBtn: {
    width: pixelSizeVertical(100),
    height: pixelSizeVertical(36),
    backgroundColor: COLOR.green_1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(40),
    borderColor: COLOR.green,
    borderWidth: widthPixel(1),
  },
  titleContainer: {
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  date: {
    fontSize: fontPixel(13),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interRegular,
    letterSpacing: fontPixel(-0.26),
    opacity: 0.6,
  },
  title: {
    fontSize: fontPixel(16),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interMedium,
    letterSpacing: fontPixel(-0.32),
  },
  transImgContainer: {
    padding: pixelSizeVertical(10),
    backgroundColor: COLOR.green_1,
    borderRadius: pixelSizeVertical(10),
    height: pixelSizeVertical(50),
    width: pixelSizeVertical(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  transImg: {
    height: pixelSizeVertical(35),
    width: pixelSizeVertical(35),
  },
  transLeft: {
    flexDirection: 'row',
    gap: 9,
  },
  transList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: COLOR.green,
    borderBottomWidth: widthPixel(1),
    paddingBottom: pixelSizeVertical(5),
  },
  transListContainer: {
    marginTop: pixelSizeVertical(16),
    gap: 16,
    paddingHorizontal: pixelSizeVertical(20),
  },
  scroll: {
    paddingBottom: pixelSizeVertical(100),
  },
});
