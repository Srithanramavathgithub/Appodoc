import React, { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import { DataTable } from 'react-native-paper';
import { ListItem, Icon, Avatar } from '@rneui/themed';

const All_doc = [
  {
    title: 'Dr. Suresh',
    icon: 'doctor',
    date: '04:30PM - 10:00PM',
    type: 'material-community',
    redir: 'DApp',
    avatar_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    title: 'Dr. Ramesh',
    icon: 'doctor',
    date: '12:00AM - 03:00AM',
    type: 'material-community',
    redir: 'DApp',
    avatar_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    title: 'Dr. Mukesh',
    icon: 'doctor',
    date: '05:00PM - 09:00PM',
    type: 'material-community',
    redir: 'DApp',
    avatar_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    title: 'Dr. Lingesh',
    icon: 'doctor',
    date: '08:00AM - 12:00PM',
    type: 'material-community',
    redir: 'DApp',
    avatar_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
]; 
const Avail_doc = [
  {
    title: 'Dr. Suresh',
    icon: 'doctor',
    date: '02:30PM - 05:30PM',
    type: 'material-community',
    redir: 'DApp',
    avatar_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    title: 'Dr. Ramesh',
    icon: 'doctor',
    date: '04:30PM - 07:30PM',
    type: 'material-community',
    redir: 'DApp',
    avatar_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
]; 
const Spl_doc = [
  {
    title: 'Dr. Lingesh',
    icon: 'doctor',
    date: '09:00AM - 12:00PM',
    type: 'material-community',
    redir: 'DApp',
    avatar_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    title: 'Dr. Sandesh',
    icon: 'doctor',
    date: '07:00AM - 10:00AM',
    type: 'material-community',
    redir: 'DApp',
    avatar_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
]; 
const { width, height } = Dimensions.get('window');
export default function DApp({ navigation }) {
  const [shouldShowAll, setShouldShowAll] = useState(true);
  const [shouldShowAvail, setShouldShowAvail] = useState(false);
  const [shouldShowSpl, setShouldShowSpl] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
          <SafeAreaView style={styles.buttonGroup}>
            <TouchableOpacity
              onPress={() => {setShouldShowAll(!shouldShowAll); setShouldShowAvail(false); setShouldShowSpl(false)}}
              style={shouldShowAll ? styles.buttonContainer : styles.buttonNormal}>
              <Text style={styles.buttonText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {setShouldShowAvail(!shouldShowAvail); setShouldShowSpl(false); setShouldShowAll(false)}}
              style={shouldShowAvail ? styles.buttonContainer : styles.buttonNormal}>
              <Text style={styles.buttonText}>Available</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {setShouldShowSpl(!shouldShowSpl); setShouldShowAvail(false); setShouldShowAll(false)}}
              style={shouldShowSpl ? styles.buttonContainer : styles.buttonNormal}>
              <Text style={styles.buttonText}>Special</Text>
            </TouchableOpacity>
          </SafeAreaView>
          {shouldShowAll ? (
            <SafeAreaView>
              <ScrollView>
                <View>
                  {All_doc.map((item, i) => (
                    <ListItem
                      key={i}
                      bottomDivider
                      onPress={() => {
                        navigation.navigate(item.redir);
                      }}>
                      <Avatar source={{ uri: item.avatar_url }} />
                      <ListItem.Content>
                        <ListItem.Title style={{ fontFamily:'' }}>
                          {item.title}
                        </ListItem.Title>
                        <ListItem.Title>{item.date}</ListItem.Title>
                      </ListItem.Content>
                      <TouchableOpacity
                        onPress={() =>
                          alert('Your Slot for Dr.Jagadish has booked')
                        }
                        style={styles.bookbuttonContainer}>
                        <Text style={styles.bookbuttonText}>Book</Text>
                      </TouchableOpacity>
                    </ListItem>
                  ))}
                </View>
              </ScrollView>
            </SafeAreaView>
          ) : null}
          {shouldShowAvail ? (
            <SafeAreaView>
              <ScrollView>
                <View>
                  {Avail_doc.map((item, i) => (
                    <ListItem
                      key={i}
                      bottomDivider
                      onPress={() => {
                        navigation.navigate(item.redir);
                      }}>
                      <Avatar source={{ uri: item.avatar_url }} />
                      <ListItem.Content>
                        <ListItem.Title style={{ fontFamily: '' }}>
                          {item.title}
                        </ListItem.Title>
                        <ListItem.Title>{item.date}</ListItem.Title>
                      </ListItem.Content>
                      <TouchableOpacity
                        onPress={() =>
                          alert('Your Slot for Dr.Jagadish has booked')
                        }
                        style={styles.bookbuttonContainer}>
                        <Text style={styles.bookbuttonText}>Book</Text>
                      </TouchableOpacity>
                    </ListItem>
                  ))}
                </View>
              </ScrollView>
            </SafeAreaView>
          ) : null}
          {shouldShowSpl ? (
            <SafeAreaView>
              <ScrollView>
                <View>
                  {Spl_doc.map((item, i) => (
                    <ListItem
                      key={i}
                      bottomDivider
                      onPress={() => {
                        navigation.navigate(item.redir);
                      }}>
                      <Avatar source={{ uri: item.avatar_url }} />
                      <ListItem.Content>
                        <ListItem.Title style={{ fontFamily: '' }}>
                          {item.title}
                        </ListItem.Title>
                        <ListItem.Title>{item.date}</ListItem.Title>
                      </ListItem.Content>
                      <TouchableOpacity
                        onPress={() =>
                          alert('Your Slot for Dr.Jagadish has booked')
                        }
                        style={styles.bookbuttonContainer}>
                        <Text style={styles.bookbuttonText}>Book</Text>
                      </TouchableOpacity>
                    </ListItem>
                  ))}
                </View>
              </ScrollView>
            </SafeAreaView>
          ) : null}
        </SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 20,
    width: 70,
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonNormal: {
    height: 20,
    width: 70,
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 10,
  },
  bookbuttonContainer: {
    marginHorizontal: 20,
    height: 20,
    width: 70,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 20,
  },
  bookbuttonText: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 10,
    padding: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    padding: 3,
  },
  container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#fff' },
  buttonGroup: { flex:1, flexDirection: 'row', justifyContent: 'spcae-between', },
});
