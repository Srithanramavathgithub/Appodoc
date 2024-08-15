import * as React from 'react';
import {Dimensions, SafeAreaView ,View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import { DataTable } from 'react-native-paper';
const {width, height} = Dimensions.get('window');
export default function DA({ navigation }) {
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
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Specification</DataTable.Title>
            <DataTable.Title numeric>TimeSlot</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>Dr.Jagadish</DataTable.Cell>
            <DataTable.Cell>Cardiologist</DataTable.Cell>
            <DataTable.Cell numeric> Thurs 9:30am</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Dr.Sanjay</DataTable.Cell>
            <DataTable.Cell>Orthopaedic</DataTable.Cell>
            <DataTable.Cell numeric>Tues 3:00pm, Wed 3:00pm, Fri 1:00pm</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Dr.Rajendra</DataTable.Cell>
            <DataTable.Cell>Pshychiatrist</DataTable.Cell>
            <DataTable.Cell numeric>Fri 11:00am</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Dr.Vivek</DataTable.Cell>
            <DataTable.Cell>Ortho-Dentist</DataTable.Cell>
            <DataTable.Cell numeric>Wed 3:00pm</DataTable.Cell>
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
  head: { height: 60, backgroundColor: 'orange' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#2ecc71' },
  row: { height: 28 },
  text: { textAlign: 'center' },
});
