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

export default function MedicalBook({ navigation }) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      
      <SafeAreaView style={styles.container}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title>Doctor Name</DataTable.Title>
            <DataTable.Title>Doctor Advice</DataTable.Title>
            <DataTable.Title>Prescription</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>30-10-2022</DataTable.Cell>
            <DataTable.Cell>Dr.Krishna</DataTable.Cell>
            <DataTable.Cell> Exercise Daily and Avoid Eating Food </DataTable.Cell>
            <DataTable.Cell> None </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Johnny Depp</DataTable.Cell>
            <DataTable.Cell>71kg</DataTable.Cell>
            <DataTable.Cell numeric>5ft 10in </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Sunny</DataTable.Cell>
            <DataTable.Cell>60 kg </DataTable.Cell>
            <DataTable.Cell numeric>5ft 4 in</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Prabhas</DataTable.Cell>
            <DataTable.Cell>95 kg</DataTable.Cell>
            <DataTable.Cell numeric>6ft 1 in</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
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
