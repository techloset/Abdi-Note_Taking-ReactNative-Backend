import {
    StyleSheet,
    FlatList,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
  } from 'react-native';
  import {useState} from 'react';
  import DATA from '../constants/FlatListData'
  import { fontPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../constants/responsive';
  
  
  const Item = () => (
    
    <View style={styles.card1}>
    <Text style={styles.titlecard}> 💡 New Product Idea Design</Text>
    <Text style={styles.para}>
    Create a mobile app UI Kit that provide a basic notes functionality but with some improvement.
    </Text>
    <Text style={styles.para}>
    There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.
    </Text>
    <View style={styles.cardFooter}>
    <Text style={{ color: '#827D89', fontSize: 10, }}>Interesting Idea</Text>
    </View>
    </View>
    
  );
  
  const HomeScreen = () => {
    const [selectedId, setSelectedId] = useState();
  
    const renderItem = ({item}) => {
      const backgroundColor = item.id === selectedId ? '#6e3b6e':'#f9c2ff';
      const color = item.id === selectedId ? 'white' : 'black';
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      );
    };
  
  
    return (
      <>
         <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
        <View style={styles.parent}>
          <View style={styles.header}>
            <Text style={styles.pinned}>Pinned Notes</Text>
            <TouchableOpacity>
              <Text style={styles.view}>View all</Text>
            </TouchableOpacity>
          </View>
      </View>
  
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
            horizontal
          />
        </SafeAreaView>
  
          <View style={styles.parent}>
          <View style={styles.header}>
            <Text style={styles.pinned}>Interesting Idea</Text>
            <TouchableOpacity>
              <Text style={styles.view}>View all</Text>
            </TouchableOpacity>
          </View>
  
      </View>
  
        <SafeAreaView style={styles.container2}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
            horizontal
          />
        </SafeAreaView>
        
      </>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({
    main: {
      backgroundColor: '#FAF8FC'
    },
    container: {
      justifyContent: 'center',
      alignItems: "center",
  
  
    },
    container2: {
      justifyContent: 'center',
      alignItems: "center",
      marginTop: pixelSizeVertical(-3)
  
  
    },
    journey: {
      fontSize: 24,
      fontWeight: '700',
      lineHeight: 28.8,
      color: '#180E25'
    },
    text: {
      fontSize: fontPixel(14),
      fontWeight: '400',
      lineHeight: 19.6,
      color: "#827D89",
      width: widthPixel(237),
      textAlign: 'center',
      marginTop: pixelSizeHorizontal(20)
    },
    pinned: {
      color: 'black',
      fontSize: fontPixel(14),
      fontWeight: '700',
      lineHeight: 19.6,
    },
    parent: {
      padding: pixelSizeHorizontal(16),
      marginTop:pixelSizeVertical(16)       
    },
    view: {
      color: '#6A3EA1',
      fontSize: fontPixel(12),
      textDecorationLine: 'underline'
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    card1: {
      backgroundColor: 'white',
      width: widthPixel(180),
      borderRadius: 8,
      marginHorizontal:pixelSizeHorizontal(16),
    },
    titlecard: {
      color: 'black',
      fontSize: fontPixel(16),
      fontWeight: "500",
      padding: pixelSizeHorizontal(16)
    },
    para: {
      color: 'black',
      fontSize: fontPixel(10),
      marginTop: pixelSizeHorizontal(10),
      paddingHorizontal: pixelSizeHorizontal(16)
  
    },
    cardFooter: {
      backgroundColor: '#EFEEF0',
      padding: pixelSizeHorizontal(10),
      marginTop: pixelSizeVertical(20),
    },
  
  
   
  });
  