import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR} from '../styles/consts/GlobalStyles';
// icons
import BackIcon from '../assets/images/icons/backIcon.svg';
import ShareIcon from '../assets/images/icons/share.svg';
import HeartOutlineIcon from '../assets/images/icons/heartOutline.svg';
import MoreIcon from '../assets/images/icons/more.svg';
import {useNavigation} from '@react-navigation/native';

const {widthPixel, pixelSizeVertical} = ratio;
const DetailsScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconBg}>
        <BackIcon />
      </TouchableOpacity>
      <View style={styles.container_2}>
        <TouchableOpacity style={styles.iconBg}>
          <ShareIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBg}>
          <HeartOutlineIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBg}>
          <MoreIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreenHeader;

const styles = StyleSheet.create({
  container_2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: pixelSizeVertical(13),
  },
  iconBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPixel(32),
    height: widthPixel(32),
    borderRadius: widthPixel(32),
    backgroundColor: COLOR.icon_bg_clr,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelSizeVertical(12),
    paddingVertical: pixelSizeVertical(16),
  },
});
