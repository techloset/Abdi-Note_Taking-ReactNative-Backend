import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking

} from 'react-native';
import React, {useState, useCallback} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMa from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import Model from "../assects/images/model.svg"


const openAlarmApp = () => {
  const alarmAppUrl = 'https://play.google.com/store/apps/details?id=ar.com.basejuegos.simplealarm&pcampaignid=web_share';

  Linking.canOpenURL(alarmAppUrl).then((supported) => {
    if (supported) {
      Linking.openURL(alarmAppUrl);
    } else {
      console.log('Cannot open the alarm app. Make sure it is installed.');
    }
  });
};



const BottomMenuBar = () => {
  const [selectedColor, setSelectedColor] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const navigation = useNavigation();
  const searchBar = () => {
    navigation.navigate('SearchBar');
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  const applyBorder = () => {
    setSelectedColor(true);
  };

function handledelete() {
  Toast.error("Notes Not be Availabel")
}

function openLanguageSettings() {
  Toast.error("Only English Language Availabel")
  
}

  return (
    <>
      <View>
        
        <Modal style={styles.model} isVisible={isModalVisible}>
          <View style={{display: 'flex', alignItems: 'flex-end'}}>
            <View
              style={{
                backgroundColor: '#EFEEF0',
                padding: 6,
                borderRadius: 100,
              }}>
              <Icon
                name="close"
                size={14}
                color={'black'}
                onPress={toggleModal}
              />
            </View>
          </View>
          <View>
            <Text style={styles.changeBackground}>CHANGE BACKGROUND</Text>
         
          </View>
          <View style={styles.colosparent}>
            <View onPress={applyBorder}>
              <View
                style={[!selectedColor ? styles.border : styles.borderHide]}>
                <View style={[styles.colors]}></View>
              </View>
            </View>
            <View>
              <View>
                <View style={[styles.colors, styles.color2]}></View>
              </View>
            </View>
            <View>
              <View>
                <View style={[styles.colors, styles.color3]}></View>
              </View>
            </View>
            <View>
              <View>
                <View style={[styles.colors, styles.color4]}></View>
              </View>
            </View>
            <View>
              <View>
                <View style={[styles.colors, styles.color5]}></View>
              </View>
            </View>
            <View>
              <View>
                <View style={[styles.colors, styles.color6]}></View>
              </View>
            </View>
            <View>
              <View>
                <View style={[styles.colors, styles.color7]}></View>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 15,
                borderColor: '#EFEEF0',
              }}></View>
            <Text style={[styles.changeBackground, styles.Extras]}>EXTRAS</Text>
            <TouchableOpacity onPress={openAlarmApp}>
              <View style={styles.parentlist}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <IconF
                    style={{marginRight: 8, marginTop: 1}}
                    name="clock"
                    size={25}
                    color={'black'}
                  />
                  <Text style={styles.remainder}>Set Reminder</Text>
                </View>
                <View>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={styles.leftmenu}>Not set </Text>
                    <IconMa
                      style={{marginLeft: 3}}
                      name="arrow-forward-ios"
                      size={10}
                      color={'#827D89'}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={openLanguageSettings} >
              <View style={styles.parentlist}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <IconF
                    style={{marginRight: 8}}
                    name="edit"
                    size={25}
                    color={'black'}
                  />
                  <Text style={styles.remainder}>Change Note Type</Text>
                </View>
                <View>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={styles.leftmenu}>Buying Some... </Text>
                    <IconMa
                      style={{marginLeft: 3}}
                      name="arrow-forward-ios"
                      size={10}
                      color={'#827D89'}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.parentlist}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Icon
                    style={{marginRight: 8}}
                    name="tago"
                    size={25}
                    color={'black'}
                  />
                  <Text style={styles.remainder}>Give Label</Text>
                </View>
                <View>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={styles.leftmenu}>Not set </Text>
                    <IconMa
                      style={{marginLeft: 8}}
                      name="arrow-forward-ios"
                      size={10}
                      color={'#827D89'}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.parentlist}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Icon
                    style={{marginRight: 8}}
                    name="check"
                    size={25}
                    color={'black'}
                  />
                  <Text style={styles.remainder}>Mark as Finished</Text>
                </View>
              </View>
            </TouchableOpacity>

            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 15,
                borderColor: '#EFEEF0',
              }}></View>
          </View>

          <TouchableOpacity onPress={handledelete}>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 12}}>
              <Icon
                style={{marginTop: 2, marginRight: 16}}
                name="delete"
                size={16}
                color={'#CE3A54'}
              />
              <Text style={styles.delete}>Delete Note</Text>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>

      <View>
        <Modal style={styles.model} isVisible={isModalVisible2}>
          <View style={{display: 'flex', alignItems: 'flex-end'}}>
            <View
              style={{
                backgroundColor: '#EFEEF0',
                padding: 6,
                borderRadius: 100,
              }}>
              <Icon
                name="close"
                size={14}
                color={'black'}
                onPress={toggleModal2}
              />
            </View>
          </View>
          <View style={styles.images}>
            <Model/>
          </View>
          <Text style={styles.pinned}>Notes Pinned Successfully</Text>

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.textpined}>
              This note already displayed on pinned section
            </Text>
            <TouchableOpacity style={styles.btn}>
              <Text onPress={toggleModal2} style={styles.closebtn}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      <View style={styles.menuBar}>
        <View style={styles.menuebarIcons}>
          <View>
            <Text style={styles.footer_text}>Last edited on 19.30</Text>
          </View>
          <View style={styles.icons}>
            <Icon
              name="search1"
              size={20}
              color={'black'}
              onPress={searchBar}
            />
            <IconF
              name="bookmark"
              size={20}
              color={'black'}
              onPress={toggleModal2}
            />
            <View style={styles.dotsIcon}>
              <IconM
                name="dots-horizontal"
                size={20}
                color={'white'}
                onPress={toggleModal}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default BottomMenuBar;

const styles = StyleSheet.create({
  container11: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black"
  },
  menuBar: {
    backgroundColor: 'white',
    borderTopColor: '#EFEEF0',
    borderTopWidth: 1,
    height: 48,
  },
  footer_text: {
    fontWeight: '400',
    fontSize: 12,
    color: 'black',
    marginLeft: 20,
  },
  menuebarIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginLeft: 100,
  },
  dotsIcon: {
    backgroundColor: '#6A3EA1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
  },

  model: {
    backgroundColor: 'white',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    width: '100%',
    marginTop: 300,
    marginBottom: -1,
    marginLeft: -1,
    padding: 16,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  changeBackground: {
    color: '#827D89',
    fontSize: 10,
    fontWeight: '400',
  },
  colors: {
    width: 32,
    height: 32,
    borderRadius: 100,
    padding: 5,
    border: 2,
    backgroundColor: '#C8C5CB',
  },
  colosparent: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  color2: {
    backgroundColor: '#F7DEE3',
  },
  color3: {
    backgroundColor: '#EFE9F7',
  },
  color4: {
    backgroundColor: '#DAF6E4',
  },
  color5: {
    backgroundColor: '#FDEBAB',
  },
  color6: {
    backgroundColor: '#F7F6D4',
  },
  color7: {
    backgroundColor: '#EFEEF0',
  },
  border: {
    borderColor: '#C8C5CB',
    borderWidth: 1,
    borderRadius: 100,
    padding: 1,
  },
  borderHide: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 100,
    padding: 1,
  },
  remainder: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22.4,
    color: '#180E25',
  },
  parentlist: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Extras: {
    marginTop: 15,
  },
  leftmenu: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.52,
    color: '#827D89',
    marginTop: -2,
  },
  delete: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22.4,
    color: '#CE3A54',
  },
  images: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pinned: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
    marginTop: 15,
  },
  textpined: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22.4,
    color: '#827D89',
    width: 231,
    textAlign: 'center',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#6A3EA1',
    borderRadius: 100,
    width: 76,
    height: 38,
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  closebtn: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});
