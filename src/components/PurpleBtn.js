import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';
const PurpleBtn = (props) => {
  return (
    <View>
    <TouchableOpacity  style={styles.btn}>
      <Text style={styles.text}>{props.title}</Text>
      <Icon style={styles.icon} name={props.icon} size={30} color={props.color} />
    </TouchableOpacity>
  </View>
  )
}

export default PurpleBtn

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#6A3EA1',
        paddingVertical: 15,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:"center",
        borderRadius: 100,
        width: 328,
        height:54,
      },
      text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: 115,
        lineHeight: 22.4,
        fontFamily:'Inter'
      },
      icon: {
        fontSize: 20,
        textAlign: 'right',
        paddingLeft: 40,
        
      }
})