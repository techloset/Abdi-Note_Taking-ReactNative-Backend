import { StyleSheet, Text, View, ScrollView, Button, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBack from '../components/HeaderBack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../constants/responsive';
const CreateNewNotes = () => {

  const navigation  = useNavigation()
  const BuyingSomeThing = () =>{
      navigation.navigate('BuyingSomeThing')
  }

  const InterestingIdea = ()=>{
    navigation.navigate('InterestingIdea')
  }
 
  const Guidance = ()=>{
    navigation.navigate('Guidance')
  }
  const Goals = ()=>{
    navigation.navigate('Goals')
  }
  const RoutineTasks = ()=>{
    navigation.navigate('RoutineTasks')
  }
 
  return (
    <ScrollView style={styles.main}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
      <View style={{ display: 'flex', flexDirection: 'row', gap: 80 }}>
        <HeaderBack title='Back' />
        <Text style={styles.newNotes}>New Notes</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.container}>
        <Text style={styles.notes}>What Do You Want to Notes?</Text>

        <TouchableOpacity onPress={InterestingIdea}>
        <View style={styles.idea}>
          <View style={styles.bulb}>
             <Icon name='lightbulb-on-outline' size={20} color={'white'}/>
          </View>
          <View>
            <Text style={styles.interestingIdea}>Interesting Idea</Text>
            <Text style={styles.msg}>Use free text area, feel free to write it all</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={BuyingSomeThing}>
        <View style={styles.buying}>
          <View style={styles.cart}>
             <Icon name='cart' size={20} color={'white'}/>
          </View>
          <View>
            <Text style={styles.interestingIdea}>Buying Something</Text>
            <Text style={[styles.msg, styles.msgbuy]}>Use checklist, so you won’t miss anything</Text>
          </View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={Goals}>
        <View style={[styles.buying, styles.goal]}>
          <View style={[styles.cart, styles.star]}>
             <IconI name='sparkles-outline' size={20} color={'white'} style={styles.sparkless}/>
          </View>
          <View>
            <Text style={styles.interestingIdea}>Goals</Text>
            <Text style={[styles.msg, styles.msggoal]}>Near/future goals, notes and keep focus </Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={Guidance}>
        <View style={[styles.buying, styles.guidance]}>
          <View style={[styles.cart, styles.clipboard]}>
             <Icon name='clipboard-list-outline' size={20} color={'white'}/>
          </View>
          <View>
            <Text style={styles.interestingIdea}>Guidance</Text>
            <Text style={[styles.msg, styles.msgGuid]}>Create guidance for routine activities</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={RoutineTasks}>
        <View style={[styles.buying, styles.task]}>
          <View style={[styles.cart, styles.routine_task]}>
             <Icon name='clipboard-outline' size={20} color={'white'}/>
          </View>
          <View>
            <Text style={styles.interestingIdea}>Routine Tasks</Text>
            <Text style={[styles.msg, styles.msgtask]}>Checklist with sub-checklist</Text>
          </View>
        </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

export default CreateNewNotes

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newNotes: {
    fontSize: fontPixel(16),
    fontWeight: "500",
    color: "#000000",
    textAlign: 'center',
    marginTop: pixelSizeHorizontal(13),
    lineHeight: 22.4
  },
  line: {
    width: widthPixel(100),
    height: heightPixel(1),
    backgroundColor: '#EFEEF0',
    marginTop: pixelSizeHorizontal(20),
  },
  notes: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: fontPixel(24),
    lineHeight: 28.8,
    color:'#000000',
    marginTop: pixelSizeHorizontal(40),
    width: widthPixel(300),
    height: heightPixel(58)
  },
  idea:{
    backgroundColor:'#6A3EA1',
    height: heightPixel(78),
    width: widthPixel(328),
    borderRadius:8,
    padding: pixelSizeHorizontal(16),
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginTop: pixelSizeHorizontal(35),
  },
   interestingIdea:{
       fontSize: fontPixel(16),
       fontWeight:'700',
       lineHeight: 22.4,
       color:'white'

   },
   bulb:{
    backgroundColor:'#3A2258',
    padding: pixelSizeHorizontal(12),
    borderRadius:100,
    width: widthPixel(46),
    height: heightPixel(46),
    marginRight: pixelSizeVertical(15)
   },
   msg:{
    fontSize:12,
    fontWeight:'400',
    lineHeight:14.52,
    marginTop:pixelSizeHorizontal(5)
   },
   buying:{
    backgroundColor:'#60D889',
    height: heightPixel(78),
    width: widthPixel(328),
    borderRadius:8,
    padding: pixelSizeHorizontal(16),
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginTop: pixelSizeHorizontal(20),

   },
   cart:{
    backgroundColor:'#1F7F40',
    padding: pixelSizeHorizontal(12),
    borderRadius:100,
    width: widthPixel(46),
    height: heightPixel(46),
    marginRight: pixelSizeVertical(15),
    display:'flex',
    justifyContent:"center",
    alignItems:'center'
   },
   goal:{
    backgroundColor:"#F8C715"
   },
   star:{
     backgroundColor:'#725A03'
   },
   msgbuy:{
    color:'#1F7F40',

   },
   msggoal:{
    color:'#725A03'
   },
   guidance:{
    backgroundColor:"#CE3A54"
   },
   clipboard:{
    backgroundColor:"#5A1623"
   },
   msgGuid:{
    color:"#F7DEE3",
   },
   task:{
    backgroundColor:"#DEDC52"
   },
   routine_task:{
    backgroundColor:'#565510'
   },
   msgtask:{
    color:'#565510'
   },
   sparkless:{
    transform: [{ rotate: '270deg' }]
   }
  
  })