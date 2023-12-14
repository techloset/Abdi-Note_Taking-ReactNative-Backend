import { StyleSheet, Text,   TouchableOpacity} from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const HeaderBack = (props) => {
    const navigation = useNavigation()
   return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.goBack()}>
      <Icon style={styles.icon} name='arrow-back-ios-new' size={30} color={'#6A3EA1'} />
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default HeaderBack

const styles = StyleSheet.create({
    container:{
       display:'flex',
       flexDirection:"row",
       top:16,
       left: 16,
       gap:8,
       
    },
    text:{
        color:'#6A3EA1',
        fontSize: 16,
        fontWeight:'500'

    },
    icon:{
        fontSize: 20
    }
})