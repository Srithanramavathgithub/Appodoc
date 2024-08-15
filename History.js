import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import { ListItem, Icon, Avatar } from '@rneui/themed';

const list = [
  {
    title: 'Dr. Suresh',
    icon: 'doctor',
    date: '19-08-22',
    type: 'material-community',
    redir: 'DApp',
    avatar_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    title: 'Dr. Ramesh',
    icon: 'doctor',
    date: '19-08-22',
    type: 'material-community',
    redir: 'DApp',
    avatar_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    title: 'Dr. Mukesh',
    icon: 'doctor',
    date: '19-08-22',
    type: 'material-community',
    redir: 'DApp',
    avatar_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    title: 'Dr. Lingesh',
    icon: 'doctor',
    date: '19-08-22',
    type: 'material-community',
    redir: 'DApp',
    avatar_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
];
export default function History({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {list.map((item, i) => (
            <ListItem
              key={i}
              bottomDivider
              onPress={() => {
                navigation.navigate(item.redir);
              }}>
              <Avatar source={{ uri: item.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title style={{ fontFamily: 'cursive' }}>
                  {item.title}
                </ListItem.Title>
                <ListItem.Title>{item.date}</ListItem.Title>
              </ListItem.Content>
              <TouchableOpacity
                onPress={() => alert('Your Slot with the doctor has been booked')}
                style={styles.bookbuttonContainer}>
                <Text style={styles.bookbuttonText}>View</Text>
              </TouchableOpacity>
            </ListItem>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonContainer1}
          onPress={() => navigation.navigate('More')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bookbuttonContainer: {
    marginHorizontal: 20,
    height: 20,
    width: 70,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 20,
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
  bookbuttonText: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 8,
    padding: 5,
  },
});
