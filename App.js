import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>
      </View>
    <View style={styles.items}>
      {/* This is where the tasks go */}
      <Task text={'Task 1'}/>
      <Task text={'Task 2'}/>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFD0E0',

    
  },

  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30,
  },
})
