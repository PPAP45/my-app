import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Mainscreen from './screen/Mainscreen_'

export default function App() {
  return (
    <View style={{flex:1}}>
      <Mainscreen/>
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  
});
