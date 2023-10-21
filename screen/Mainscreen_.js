import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default  Mainscreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <Text>Space Camera</Text>
      </View>
      <View style={styles.controlBox}>
        <View style={{ flex: 3, flexDirection: "column" }}>
          <View style={{ flex: 1,}}></View>
          <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={styles.ButtonControl}>
              <Ionicons name="chevron-back-outline" size={60}></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1,}}></View>
        </View>
        <View style={{ flex: 3, flexDirection: "column" }}>
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <TouchableOpacity style={styles.ButtonControl}>
              <Ionicons name="chevron-up-outline" size={60}></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={styles.ButtonControl}>
              <Ionicons name="pause-outline" size={60}></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity style={styles.ButtonControl}>
              <Ionicons name="chevron-down-outline" size={60}></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 3, flexDirection: "column" }}>
          <View style={{ flex: 1,}}></View>
          <View style={{ flex: 1, justifyContent:'center', alignItems: 'center' }}>
            <TouchableOpacity style={styles.ButtonControl}>
              <Ionicons name="chevron-forward-outline" size={60}></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1,}}></View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContentustifyContent: 'center',
    paddingTop: 50,
    paddingBottom:80,
    backgroundColor: "#FEC8D8"
  },
  cameraBox: {
    flex: 1.2,
    borderWidth: 2,
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFFF"
  },
  controlBox: {
    flex: 2,
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  ButtonControl: {
    backgroundColor: "#FFFFFF",
    borderRadius:50,
    width:"70%",
    height:"60%",
    justifyContent: 'center',
    alignItems: 'center',
  }
});
