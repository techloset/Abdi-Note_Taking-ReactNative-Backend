import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderBack from '../components/HeaderBack';
import Icons from 'react-native-vector-icons/MaterialIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import NotesCard from '../constants/NotesCard';
import BottomMenuBar from '../navigation/BottomMenuBar';
import {useNavigation} from '@react-navigation/native';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../constants/responsive';
const RoutineTasks = () => {
  const navigation = useNavigation();
  const handlesubtask = () => {
    navigation.navigate('Goals');
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderBack title="Back" />
          <TouchableOpacity>
            <View style={styles.SubBtn}>
              <Text style={styles.subText} onPress={handlesubtask}>
                + Add Sub Notes
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
      </View>
      <ScrollView style={styles.main}>
        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <Text style={styles.activeSubNotes}>ACTIVE SUB NOTES</Text>
        </View>
        {NotesCard.map((item, i) => {
          return (
            <View
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                marginTop: 30,
                marginHorizontal: 12,
              }}>
              <Icons name={item.dragindicator} size={20} color={'#C8C5CB'} />
              <View style={styles.TitleCard}>
                <View style={styles.Cardheader}>
                  <View style={styles.circle}></View>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.Cardline}></View>

                <View style={{paddingHorizontal: 12, paddingVertical: 12}}>
                  <Text style={styles.cardText}>{item.desc}</Text>
                </View>
              </View>
              <Icons name={item.iconClose} size={20} color={'#C8C5CB'} />
            </View>
          );
        })}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            marginTop: 30,
            marginHorizontal: 12,
          }}>
          <Icons name="drag-indicator" size={20} color={'#C8C5CB'} />
          <View style={[styles.TitleCard, styles.titleCard2]}>
            <View style={styles.Cardheader}>
              <View style={[styles.circle]}></View>
              <Text style={[styles.title, styles.title_Card2]}>Title Here</Text>
            </View>
            <View style={[styles.Cardline, styles.line_card2]}></View>

            <View style={{paddingHorizontal: 12, paddingVertical: 12}}>
              <Text style={[styles.cardText, styles.text_card2]}>
                Create a mobile app UI Kit that provide a basic notes
                functionality but with some improvement...
              </Text>
            </View>
          </View>
          <Icons name="close" size={20} color={'#C8C5CB'} />
        </View>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={[styles.line, styles.middleLine]}></View>
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <Text style={styles.activeSubNotes}>COMPLETED SUB NOTES</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            marginTop: 30,
            marginHorizontal: 12,
          }}>
          <Icons name="drag-indicator" size={20} color={'#C8C5CB'} />
          <View style={[styles.TitleCard, styles.completeCard]}>
            <View style={styles.Cardheader}>
              {/* <View style={styles.circle}> */}
              <IconA
                name="checkcircle"
                size={22}
                color={'#6A3EA1'}
                style={{marginEnd: 3}}
              />
              {/* </View> */}
              <Text style={[styles.title, styles.completeTitle]}>
                {' '}
                Title Here
              </Text>
            </View>
            <View style={styles.Cardline}></View>

            <View style={{paddingHorizontal: 12, paddingVertical: 12}}>
              <Text style={[styles.cardText, styles.completeText]}>
                Create a mobile app UI Kit that provide a basic notes
                functionality but with some improvement...
              </Text>
            </View>
          </View>
          <Icons name="close" size={20} color={'#C8C5CB'} />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            marginTop: 30,
            marginHorizontal: 12,
          }}>
          <Icons name="drag-indicator" size={20} color={'#C8C5CB'} />
          <View
            style={[styles.TitleCard, styles.titleCard2, styles.completeCard2]}>
            <View style={styles.Cardheader}>
              <IconA
                name="checkcircle"
                size={22}
                color={'#6A3EA1'}
                style={{marginEnd: 3}}
              />

              <Text
                style={[
                  styles.title,
                  styles.title_Card2,
                  styles.completeTitle,
                  styles.completeCardText,
                ]}>
                Title Here
              </Text>
            </View>
            <View style={[styles.Cardline, styles.line_card2]}></View>

            <View style={{paddingHorizontal: 12, paddingVertical: 12}}>
              <Text
                style={[
                  styles.cardText,
                  styles.text_card2,
                  styles.completeText,
                  styles.completeCardText,
                ]}>
                Create a mobile app UI Kit that provide a basic notes
                functionality but with some improvement...
              </Text>
            </View>
          </View>
          <Icons name="close" size={20} color={'#C8C5CB'} />
        </View>
      </ScrollView>
      <BottomMenuBar />
    </View>
  );
};

export default RoutineTasks;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    // paddingHorizontal:16
  },
  container: {
    backgroundColor: 'white',
  },
  SubBtn: {
    backgroundColor: '#6A3EA1',
    height: heightPixel(38),
    width: widthPixel(175),
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: pixelSizeVertical(10),
    marginTop: pixelSizeHorizontal(10),
  },
  subText: {
    color: '#FFFFFF',
    fontSize: fontPixel(16),
    fontWeight: '500',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    width: widthPixel(100),
    height: heightPixel(1),
    backgroundColor: '#EFEEF0',
    marginTop: pixelSizeHorizontal(20),
  },
  activeSubNotes: {
    color: '#827D89',
    fontSize: fontPixel(10),
    fontWeight: '400',
  },
  TitleCard: {
    backgroundColor: '#F7F6D4',
    borderRadius: 8,
    width: widthPixel(272),
  },
  title: {
    fontSize: fontPixel(16),
    fontWeight: '700',
    lineHeight: 22.4,
    color: '#565510',
  },
  circle: {
    borderWidth: 1,
    width: widthPixel(24),
    height: heightPixel(24),
    padding: pixelSizeHorizontal(4),
    backgroundColor: 'white',
    borderColor: '#C8C5CB',
    borderRadius: 100,
    marginEnd: pixelSizeVertical(8),
  },
  Cardheader: {
    display: 'flex',
    flexDirection: 'row',
    padding: pixelSizeHorizontal(12),
  },
  Cardline: {
    width: '100%',
    height: heightPixel(1),
    backgroundColor: '#565510',
    marginTop: pixelSizeHorizontal(3),
  },
  cardText: {
    fontSize: fontPixel(14),
    fontWeight: '400',
    lineHeight: 19.6,
    color: '#565510',
  },
  titleCard2: {
    backgroundColor: '#EFE9F7',
  },
  title_Card2: {
    color: '#6A3EA1',
  },
  text_card2: {
    color: '#6A3EA1',
  },
  line_card2: {
    backgroundColor: '#6A3EA1',
  },
  middleLine: {
    width: '85%',
  },
  completeTitle: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  completeText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  completeCard: {
    backgroundColor: '#FDEBAB',
  },
  completeCard2: {
    backgroundColor: '#DAF6E4',
  },
  completeCardText: {
    color: '#1F7F40',
  },
});
