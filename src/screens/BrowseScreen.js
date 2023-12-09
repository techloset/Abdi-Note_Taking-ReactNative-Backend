import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import BrowseHeader from '../(components)/BrowseHeader';
import {TEXT} from '../styles/consts/GlobalStyles';
import {useAuth} from '../context/AuthContext';

const {pixelSizeVertical} = ratio;

const BrowseScreen = () => {
  const {userData, setUserData} = useAuth();

  console.log('userData', userData);
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <BrowseHeader />
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <View>
          <Text style={TEXT.title}>Enter Todo Name to Find it</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrowseScreen;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: pixelSizeVertical(22),
    justifyContent: 'center',
    gap: pixelSizeVertical(10),
    paddingTop: pixelSizeVertical(30),
    paddingBottom: pixelSizeVertical(230),
  },
});
