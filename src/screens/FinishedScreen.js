import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

import {Image} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../constants/responsive';
import Finish from '../assets/images/finished';

const FinishedScreen = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [goals, setGoals] = useState([]);
  const [goalssub, setGoalssub] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      async function fetchItems() {
        try {
          setLoading(true);
          const response = await fetch(
            'https://notesapp-backend-omega.vercel.app/api/items/finisheditems',
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );
          const data = await response.json();
          setItems(data.checkedItems);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.error('Error fetching items', error);
        }
      }

      fetchItems();
    }, []),
  );

  useFocusEffect(
    React.useCallback(() => {
      async function fetchItems() {
        try {
          setLoading(true);
          const response = await fetch(
            'https://notesapp-backend-omega.vercel.app/api/goalsItem/finishGoals',

            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );
          const data = await response.json();
          setGoals(data.checkedMain);
          setGoalssub(data.checkedsub);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.error('Error fetching items', error);
        }
      }

      fetchItems();
    }, []),
  );

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#6A3EA1"
        />
        <View style={styles.main}>
          <View style={styles.headerTop}>
            <View style={styles.header}>
              <Text style={styles.journey}>Amazing Journey!</Text>
              <Text style={styles.textheader}>
                You have successfully finished {items.length} notes
              </Text>
            </View>
            <View>
              <Finish style={{marginBottom: -20}} />
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <View>
            <View style={styles.card1}>
              <Text style={styles.titlecard}>💡 New Product Idea Design</Text>
              <Text style={styles.para}>
                Create a mobile app UI Kit that provide a basic note
                functionality but with some improvement.
              </Text>
              <Text style={styles.para}>
                There will be a choice to select what kind of notes that user
                needed, so the experience while taking notes can be unique based
                on the needs.
              </Text>
              <View style={styles.cardFooter}>
                <Text style={{color: '#827D89', fontSize: 10}}>
                  Interesting Idea
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={[styles.card1, styles.card2]}>
              <Text style={styles.titlecard}> 💡 New Product Idea Design</Text>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/images/laptop.png')}
                  style={{width: 123, height: 80, borderRadius: 8}}
                />
              </View>
              <Text style={styles.para}>
                Create a mobile app UI Kit that provide a basic notes
                functionality but with some improvement.
              </Text>

              <View style={[styles.cardFooter, styles.footer2]}>
                <Text style={{color: 'white', fontSize: 10}}>
                  Interesting Idea
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.parentCards}>
          <View style={styles.body}>
            <View>
              <View style={[styles.card1, styles.listCard]}>
                <Text style={styles.titlecard}> 🛒 Monthly Buy List</Text>

                <View style={{marginLeft: 10}}>
                  {loading ? (
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        textAlign: 'center',
                      }}>
                      Loading...
                    </Text>
                  ) : (
                    <>
                      {items.map((item, i) => {
                        return (
                          <View key={i} style={styles.checkBoxParent}>
                            <CheckBox
                              style={{marginTop: -3}}
                              tintColors={{true: '#6A3EA1', false: 'gray'}}
                              checked={true}
                              disabled={false}
                              value={true}
                            />
                            <Text style={styles.text}>&nbsp; {item.label}</Text>
                          </View>
                        );
                      })}
                    </>
                  )}
                </View>

                <View style={[styles.cardFooter, styles.listCardFooter]}>
                  <Text style={{color: 'black', fontSize: 10}}>
                    Interesting Idea
                  </Text>
                </View>
              </View>
            </View>
            <View></View>
          </View>

          <View style={[styles.body, styles.news]}>
            <View style={styles.parentcARDINSODE}>
              {goals.map((mainGoal, i) => (
                <View key={i}>
                  <View
                    style={[styles.card1, styles.listCard, styles.listCard2]}>
                    <Text style={styles.titlecard}>{mainGoal.label}</Text>
                    <View style={{marginLeft: 10}}>
                      {goalssub.map((subGoal, j) => {
                        if (subGoal.mainTaskid === mainGoal.id) {
                          return (
                            <View key={j} style={styles.checkBoxParent}>
                              <CheckBox
                                style={{marginTop: -3}}
                                tintColors={{true: '#6A3EA1', false: 'gray'}}
                                checked={true}
                                disabled={false}
                                value={true}
                              />
                              <Text style={styles.text}>
                                &nbsp; {subGoal.label}
                              </Text>
                            </View>
                          );
                        }
                        return null;
                      })}
                    </View>
                    <View style={[styles.cardFooter, styles.listCardFooter2]}>
                      <Text style={{color: 'black', fontSize: 10}}>
                        Interesting Idea
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
            <View></View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};
export default FinishedScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  journey: {
    fontSize: fontPixel(20),
    fontWeight: '700',
    lineHeight: 28,
    color: 'white',
  },
  headerTop: {
    backgroundColor: '#6A3EA1',
    width: widthPixel(360),
    paddingVertical: pixelSizeVertical(20),
    paddingHorizontal: pixelSizeHorizontal(20),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textheader: {
    fontSize: fontPixel(12),
    fontWeight: '400',
    color: '#EFE9F7',
    width: widthPixel(129),
  },
  body: {
    padding: pixelSizeHorizontal(16),
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: pixelSizeHorizontal(12),
  },
  card1: {
    backgroundColor: 'white',
    width: widthPixel(160),
    borderRadius: 8,
    marginHorizontal: pixelSizeHorizontal(2),
  },
  titlecard: {
    color: 'black',
    fontSize: fontPixel(16),
    fontWeight: '500',
    padding: pixelSizeHorizontal(16),
  },
  para: {
    color: 'black',
    fontSize: fontPixel(10),
    marginTop: pixelSizeHorizontal(10),
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  cardFooter: {
    backgroundColor: '#EFEEF0',
    padding: pixelSizeHorizontal(10),
    marginTop: pixelSizeHorizontal(20),
  },
  card2: {
    backgroundColor: '#EFE9F7',
  },
  footer2: {
    backgroundColor: '#6A3EA1',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  listCard: {
    backgroundColor: '#FDEBAB',
    marginBottom: pixelSizeHorizontal(16),
  },
  listCardFooter: {
    backgroundColor: '#F8C715',
  },
  checkBoxParent: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: fontPixel(16),
    fontWeight: '500',
    color: '#180E25',
    lineHeight: 22.4,
  },

  parentCards: {
    display: 'flex',
    flexDirection: 'row',
  },

  news: {
    marginLeft: pixelSizeVertical(-25),
    marginBottom: pixelSizeHorizontal(20),
  },
  listCard2: {
    backgroundColor: '#F7F6D4',
  },
  listCardFooter2: {
    backgroundColor: '#DEDC52',
  },
  parentcARDINSODE: {
    marginBottom: pixelSizeHorizontal(70),
  },
});
