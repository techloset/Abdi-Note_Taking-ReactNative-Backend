import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import GreenBtn from '../(components)/GreenBtn';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import ProductInput from '../(components)/ProductInput';

// icon
import StoreHeader from '../(components)/StoreHeader';

const AddTodo = ({navigation}) => {
  const [todoData, setTodoData] = useState({
    title: '',
    description: '',
    category: '',
    isActive: false,
  });

  const handleSwitchToggle = () => {
    setTodoData(prevData => ({
      ...prevData,
      isActive: !prevData.isActive,
    }));
  };

  const handleAddTodo = () => {
    const {title, category, isActive, description} = todoData;

    if (!title.trim()) {
      alert('Validation Error: Please enter a title');
      return;
    }

    if (!description.trim()) {
      alert('Validation Error: Please enter a description');
      return;
    }
    if (!category.trim()) {
      alert('Validation Error: Please enter a category');
      return;
    }
    // Access here and perform any additional logic

    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Category:', category);
    console.log('Is Active:', isActive);

    // Perform add todo logic here
  };

  const handleChangeText = (field, text) => {
    setTodoData(prevData => ({
      ...prevData,
      [field]: text,
    }));
  };
  return (
    <SafeAreaView style={COMMON.super_Container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <StoreHeader title="Add Todo" />
      <ScrollView contentContainerStyle={styles.container_2}>
        <View>
          <Text style={styles.inputLabel}>Title</Text>
          <ProductInput
            placeholder={'Enter Title'}
            value={todoData.title}
            onChangeText={text => handleChangeText('title', text)}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Todo Description</Text>
          <ProductInput
            placeholder={'Enter Description'}
            value={todoData.description}
            onChangeText={text => handleChangeText('description', text)}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Todo Category</Text>
          <ProductInput
            placeholder={'Enter Category'}
            value={todoData.category}
            onChangeText={text => handleChangeText('category', text)}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Is Active?</Text>
          <View style={styles.boolean}>
            <Switch
              value={todoData.isActive}
              onValueChange={handleSwitchToggle}
            />
          </View>
        </View>
      </ScrollView>
      {/* bottom */}
      <View style={COMMON.bottom_Bar}>
        <GreenBtn text="Add Todo" onPress={handleAddTodo} />
      </View>
    </SafeAreaView>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  boolean: {
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    alignSelf: 'center',
    alignItems: 'center',
    gap: pixelSizeVertical(3),
  },
  textarea: {
    width: '80%',
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratRegular,
    lineHeight: fontPixel(24),
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    alignSelf: 'center',
    color: COLOR.black,
  },
  inputWith_icon: {
    width: '80%',
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratRegular,
    color: COLOR.black,
    lineHeight: fontPixel(24),
  },
  inputWith_icon_Container: {
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratMedium,
    lineHeight: fontPixel(24),
    color: COLOR.black,
    alignSelf: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(41),
  },
  inputLabel: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    lineHeight: fontPixel(14),
    opacity: 0.5,
  },
  container_2: {
    paddingHorizontal: pixelSizeVertical(23.5),
    gap: pixelSizeVertical(25),
    backgroundColor: COLOR.white,
    paddingTop: pixelSizeVertical(18),
    paddingBottom: pixelSizeVertical(152),
  },
  icon: {
    position: 'absolute',
    top: pixelSizeVertical(-8),
    right: pixelSizeVertical(-8),
  },
  vegImg: {
    width: '100%',
    height: '100%',
  },
  vegImgContainer: {
    width: widthPixel(140),
    height: widthPixel(108),
    position: 'relative',
  },
  faded: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.black,
    opacity: 0.5,
    lineHeight: fontPixel(16),
  },
  fadedContainer: {
    paddingStart: pixelSizeVertical(16),
    marginTop: pixelSizeVertical(14),
  },
  smallFaded: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(10),
    color: COLOR.black,
    opacity: 0.2,
    lineHeight: fontPixel(10),
    letterSpacing: fontPixel(0.3),
  },
  addFaded: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(14),
    color: COLOR.black,
    opacity: 0.4,
    lineHeight: fontPixel(28),
  },
  addPhotoContainer: {
    width: widthPixel(140),
    height: widthPixel(105),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pixelSizeVertical(10),
    borderColor: COLOR.border_clr,
    borderWidth: widthPixel(1),
    borderStyle: 'dashed',
  },
  image: {
    paddingStart: pixelSizeVertical(21),
    gap: pixelSizeVertical(15),
    flexDirection: 'row',
  },
  container_1: {
    height: widthPixel(193),
    width: '100%',
    paddingTop: pixelSizeVertical(31),
  },
});
