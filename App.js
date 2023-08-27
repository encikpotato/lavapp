import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [shafiq, setShafiq] = useState(false);
  const [derma, setDerma] = useState('before pressed derma');

  return (
    <View style={styles.biggerContainer}>  
      <View style={styles.container}>
        {<Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={styles.sampleImage}/>}
        <Text>{shafiq}</Text>
        <TouchableOpacity style={styles.button1} onPress={()=>setShafiq()}>
          <Text>Activate!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={styles.sampleImage2}/>
        <Text>{derma}</Text>
        <TouchableOpacity style={styles.button1} onPress={()=>setDerma('Derma Activated')}>
          <Text>congrate</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  biggerContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    borderRadius: 5,
    borderWidth: 1,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingBottom: 50,
  },
  sampleImage2: {
    width: 50,
  },
  sampleImage: {
    width: 50,
  }
});
