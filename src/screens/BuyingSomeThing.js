import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import BottomMenuBar from '../navigation/BottomMenuBar';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../constants/responsive';

const BuyingSomeThing = () => {
  const [newCheckboxLabel, setNewCheckboxLabel] = useState('');
  const [checkboxList, setCheckboxList] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://notesapp-backend-omega.vercel.app/api/items/getItems',
       
        {
          method: 'GET',
        },
       
      );
      if (response.ok) {
        const data = await response.json();
        setCheckboxList(data.items);
      } else {
        console.error('Error fetching items');
      }
    } catch (error) {
      console.error('Error fetching items', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCheckbox = async () => {
    if (newCheckboxLabel.trim() !== '') {
      const newItem = {id: Date.now(), label: newCheckboxLabel, checked: false};

      try {
        setLoading(true);
        const response = await fetch(
          'https://notesapp-backend-omega.vercel.app/api/items/buyItemList',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              iid: newItem.id,
              checked: newItem.checked,
              label: newItem.label,
            }),
          },
        );

        if (response.ok) {
          const responseData = await response.json();

          setCheckboxList([...checkboxList, responseData.item]);
          setNewCheckboxLabel('');
        } else {
          console.error('Error adding checkbox item');
        }
      } catch (error) {
        console.error('Error adding checkbox item', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDeleteCheckbox = async id => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://notesapp-backend-omega.vercel.app/api/items/deleteItem',
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id: id}),
        },
      );

      if (response.ok) {
        setCheckboxList(checkboxList.filter(item => item.id !== id));
      } else {
        console.error('Error deleting checkbox item');
      }
    } catch (error) {
      console.error('Error deleting checkbox item', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = async (id, checked, label) => {
    const updatedList = checkboxList.map(item =>
      item.id === id ? {...item, checked} : item,
    );
    setCheckboxList(updatedList);
    if (checked) {
      setCheckedItems([...checkedItems, id]);
    } else {
      setCheckedItems(checkedItems.filter(item => item !== id));
    }
    try {
      setLoading(true);
      const response = await fetch(
        'https://notesapp-backend-omega.vercel.app/api/items/updatelist',
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({iid: id, checked: checked}),
        },
      );

      if (response.ok) {
        console.log(`Checkbox with ID ${id} is now ${checked ? true : false}`);
      } else {
        console.error('Error updating checkbox item');
      }
    } catch (error) {
      console.error('Error updating checkbox item', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputKeyPress = event => {
    if (event.key === 'Enter') {
      handleAddCheckbox();
    }
  };

  return (
    <View style={styles.main}>
      <HeaderBack title="Back" />
      <View style={styles.line}></View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.buyDiv}>
            <Text style={styles.buysome}>🛒 Monthly Needs</Text>
          </View>

          {loading ? (
            <ActivityIndicator
              size="large"
              color="#6A3EA1"
              style={styles.loadingIndicator}
            />
          ) : (
            <View style={{marginTop: 20}}>
              {checkboxList.map(item => (
                <View style={styles.checkBoxParent} key={item.id}>
                  <CheckBox
                    style={{marginTop: 6}}
                    tintColors={{true: '#6A3EA1', false: 'gray'}}
                    value={item.checked}
                    onValueChange={newValue => {
                      handleCheckboxChange(item.id, newValue, item.label);
                    }}
                  />
                  <Text style={styles.text}>&nbsp;{item.label}</Text>
                  <TouchableOpacity
                    onPress={() => handleDeleteCheckbox(item.id)}>
                    <Icon name="delete" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              ))}
              {showInput && (
                <View style={styles.addCheckboxInput}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter label for new checkbox"
                    value={newCheckboxLabel}
                    onChangeText={text => setNewCheckboxLabel(text)}
                    onKeyPress={handleInputKeyPress}
                    required={true}
                  />
                  <TouchableOpacity onPress={handleAddCheckbox}>
                    <View style={styles.addCheckboxBtn}>
                      <Text style={styles.addcheck}>+ Add Checkbox</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              {!showInput && (
                <TouchableOpacity onPress={() => setShowInput(true)}>
                  <View style={styles.addCheckboxBtn}>
                    <Text style={styles.addcheck}>+ Add Checkbox</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </ScrollView>
      <BottomMenuBar />
    </View>
  );
};

export default BuyingSomeThing;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
  line: {
    width: widthPixel(100),
    height: heightPixel(1),
    backgroundColor: '#EFEEF0',
    marginTop: pixelSizeHorizontal(30),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: pixelSizeHorizontal(20),
  },
  buysome: {
    color: 'black',
    fontSize: fontPixel(32),
    fontWeight: '700',
    lineHeight: 38.4,
    marginTop: pixelSizeHorizontal(10),
  },
  checkBoxParent: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: pixelSizeHorizontal(10),
    alignItems: 'center',
  },
  text: {
    fontSize: fontPixel(16),
    fontWeight: '500',
    color: '#180E25',
    lineHeight: 22.4,
    marginTop: pixelSizeHorizontal(5),
    flex: 1,
  },
  addCheckboxInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: pixelSizeHorizontal(20),
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#6A3EA1',
    borderRadius: 5,
    paddingVertical: pixelSizeVertical(2),
    paddingHorizontal: pixelSizeHorizontal(12),
    fontSize: fontPixel(12),
    color: 'black',
  },
  addCheckboxBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeVertical(8),
    borderRadius: 5,
    marginLeft: pixelSizeVertical(10),
  },
  addcheck: {
    color: '#6A3EA1',
    fontSize: fontPixel(16),
    textDecorationLine: 'underline',
  },
  loadingIndicator: {
    marginTop: pixelSizeHorizontal(20),
  },
});
