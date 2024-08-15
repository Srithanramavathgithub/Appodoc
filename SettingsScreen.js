import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';
import { ListItem, Icon } from '@rneui/themed';

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
    redir: 'History',
  },
  {
    title: 'Re-imbursement',
    icon: 'payment',
    type: 'material',
    redir: 'Details',
  },
  {
    title: 'Chat with Doctor',
    icon: 'chatbox',
    type: 'ionicon',
    redir: '',
  },
  {
    title: 'Pharmacy',
    icon: 'medical-bag',
    type: 'material-community',
    redir: 'PharmScreen',
  },
];
export default function SettingsScreen({ navigation }) {
  return (
    <>
     <SafeAreaView style={{ flexDirection: 'vertical', margin:20}}>
        {list.map((item, i) => (
          <ListItem
            key={i}
            bottomDivider
            onPress={() => {
              navigation.navigate(item.redir);
            }}>
            <Icon name={item.icon} type={item.type} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 25,
    width: 75,
    marginLeft: 250,
    marginVertical: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonContainer1: {
    height: 25,
    width: 75,
    marginLeft: 250,
    marginVertical: 20,
    backgroundColor: 'cyan',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 12,
  },
});
