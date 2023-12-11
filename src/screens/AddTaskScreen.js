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
  Button,
} from 'react-native';
import React, {useState} from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import GreenBtn from '../(components)/GreenBtn';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import ProductInput from '../(components)/ProductInput';
import {API_ENDPOINT} from '@env';

// icon
import StoreHeader from '../(components)/StoreHeader';
import SelectDropdown from 'react-native-select-dropdown';
import {useAuth} from '../context/AuthContext';

const categories = ['Urgent', 'Important', 'Time Sensitive', 'Not Important'];

const AddTaskScreen = ({navigation}) => {
  const {authData} = useAuth();

  const user_id = authData.user.id;

  const [todoData, setTodoData] = useState({
    title: '',
    description: '',
    isActive: false,
  });
  const [category, setCategory] = useState();

  const handleSwitchToggle = () => {
    setTodoData(prevData => ({
      ...prevData,
      isActive: !prevData.isActive,
    }));
  };

  const handleAddTodo = async () => {
    const {title, isActive, description} = todoData;

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

    // Perform add task logic here

    try {
      const response = await fetch(`${API_ENDPOINT}task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          description: description,
          category: category,
          active: isActive,
          currentUserId: user_id,
        }),
      });
      if (response.ok) {
        alert('added Successfuly');
      } else {
        alert('error');
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert('Something went wrong');
    }
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
      <StoreHeader title="Add Task" />
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
          <SelectDropdown
            data={categories}
            onSelect={selectedItem => {
              setCategory(selectedItem);
            }}
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

export default AddTaskScreen;

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
