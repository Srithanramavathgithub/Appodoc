import * as React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import { DataTable } from 'react-native-paper';

export default function Reports({ navigation }) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('bfkvzc')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>X-Rays</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('bfkvzc')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>ECG</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('bfkvzc')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Blood Test</Text>
      </TouchableOpacity>
      
      <SafeAreaView style={styles.container}>
        
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    marginHorizontal: 100,
    marginVertical: 20,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 14,
    padding: 15,
  },
  container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
  
});
