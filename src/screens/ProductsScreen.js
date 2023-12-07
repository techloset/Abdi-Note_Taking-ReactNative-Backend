import {StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import ratio from '../styles/consts/ratio';
import ProductCard from '../(components)/ProductCard';
import ProductsHeader from '../(components)/ProductsHeader';

const {pixelSizeVertical} = ratio;

const ProductsScreen = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <ProductsHeader title={item.title} navigation={navigation} />
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <ProductCard data={item.data} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: pixelSizeVertical(22),
    justifyContent: 'center',
    gap: pixelSizeVertical(10),
    paddingTop: pixelSizeVertical(30),
    paddingBottom: pixelSizeVertical(200),
  },
});
