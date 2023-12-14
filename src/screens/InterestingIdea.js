import {  StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBack from '../components/HeaderBack'
import BottomMenuBar from '../navigation/BottomMenuBar'
import { fontPixel, heightPixel, pixelSizeHorizontal, widthPixel } from '../constants/responsive'

const InterestingIdea = () => {
    return (
        <View style={styles.main}>

            <View>
                <HeaderBack title='Back' />
            </View>
            <View style={styles.line}></View>
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.newIdea}>💡 New Product </Text>
                <Text style={styles.newIdea}> Ideas</Text>
                <View>
                    <Text style={styles.para}>
                        Create a mobile app UI Kit that provide a basic notes functionality but with some improvement.
                    </Text>
                    <Text style={styles.para}>
                        There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.
                    </Text>
                </View>
                <View style={styles.line}></View>
                <View>
                    <Text style={styles.reminder}>Reminder set on 15/07/2021, 18:30</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", gap: 10, flexWrap: 'wrap' }}>
                    <TouchableOpacity style={styles.btns}>
                        <Text style={styles.btntext}>Important</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btns}>
                        <Text style={styles.btntext}>Top Priority</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btns}>
                        <Text style={styles.btntext}>Should Be Important in this week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btns}>
                        <Text style={styles.btntext}>Important</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </ScrollView>
        <BottomMenuBar/>
</View>
    )
}

export default InterestingIdea

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
    },
    container: {
      
        padding: pixelSizeHorizontal(16)

    },
    line: {
        width: widthPixel(100),
        height: heightPixel(1),
        backgroundColor: '#EFEEF0',
        marginTop: pixelSizeHorizontal(35),
    },
    newIdea: {
        fontSize: fontPixel(32),
        fontWeight: "700",
        color: "#180E25",
    },
    para: {
        fontSize: fontPixel(16),
        fontWeight: '400',
        lineHeight: 22.4,
        color: '#827D89',
        paddingHorizontal: pixelSizeHorizontal(10),
        marginTop: pixelSizeHorizontal(20)
    },
    reminder:{
      fontSize: fontPixel(12),
      fontWeight:"400",
      lineHeight:14.52,
      color:"#827D89",
      marginTop: pixelSizeHorizontal(25)
    },
    btns:{
      width:'auto',
         borderRadius:100,
      backgroundColor:"#EFEEF0", 
      marginTop: pixelSizeHorizontal(20),
      display:'flex',
      justifyContent:"center",
      alignItems:'center',
      padding:pixelSizeHorizontal(8)
  
    },
    btntext:{
      fontSize: fontPixel(12),
      fontWeight:'400',
      color:"#827D89"
    }

})