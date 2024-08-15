import React, { Component } from 'react';
import {
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { DataTable } from 'react-native-paper';

export default function Profile({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}></View>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
            }}
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.info}>Address</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Edit Your Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>My Reports</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                  scrollView.scrollTo({ x: 0, y:550});
                }}>
                <Text style={styles.buttonText}>Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => {navigation.navigate('Login');}}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.table_container}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Title</DataTable.Title>
                  <DataTable.Title>Data</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>Roll No.</DataTable.Cell>
                  <DataTable.Cell>210050051</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Date of Birth</DataTable.Cell>
                  <DataTable.Cell>05-11-2003</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Age</DataTable.Cell>
                  <DataTable.Cell>19</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Fathers Name</DataTable.Cell>
                  <DataTable.Cell>Naanna</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Gender</DataTable.Cell>
                  <DataTable.Cell>Male</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Height</DataTable.Cell>
                  <DataTable.Cell>6ft</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Weight</DataTable.Cell>
                  <DataTable.Cell>71kg</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Blood Group</DataTable.Cell>
                  <DataTable.Cell>O positive</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Vaccination Status</DataTable.Cell>
                  <DataTable.Cell>Vaccinated</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </SafeAreaView>
            <TouchableOpacity style={styles.buttonContainer1}
              onPress={() => {
                scrollView.scrollTo({x: 0, y:0});
            }}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    backgroundColor: '#e7feff',
    height: 100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 30,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: 'black',
    fontSize: 14,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#e7feff',
  },
  buttonContainer1: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#e7feff',
    marginLeft: 20,
  },
  scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
  },
});
