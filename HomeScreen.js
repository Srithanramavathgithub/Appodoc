import * as React from 'react';
import {
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
// import DA from "./DA"
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { screenHeight, screenWidth } = Dimensions.get('window');

function HomeScreen({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <>
            <Card style={styles.card_container}>
              <Card.Cover
                source={{
                  uri: 'https://img.freepik.com/free-photo/3d-render-realistic-medical-stethoscope-color-background_460848-10589.jpg',
                }}
                style={styles.card_image}
              />
              <Card.Content>
                <Paragraph style={styles.card_text}>Book a Doctor</Paragraph>
              </Card.Content>
              <Card.Actions>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DApp');
                  }}
                  style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Doctor Appointment</Text>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </>
          <>
            <Card style={styles.card_container}>
              <Card.Cover source={require('./assets/profile.jpg')}
                style={styles.card_image}
              />
              <Card.Content>
                <Paragraph style={styles.card_text}>
                  Generate your Pink Slip
                </Paragraph>
              </Card.Content>
              <Card.Actions>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Reports');
                  }}
                  style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Pink Slip</Text>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </>
          <>
            <Card style={styles.card_container}>
              <Card.Cover source={require('./assets/logo.jpg')}
                style={styles.card_image}
              />
              <Card.Content>
                <Paragraph style={styles.card_text}>
                  View your medical reports
                </Paragraph>
              </Card.Content>
              <Card.Actions>
                <TouchableOpacity
                  onPress={() => {
                    console.log('efofubub');
                  }}
                  style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Reports</Text>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </>
          <>
            <Card style={styles.card_container}>
              <Card.Cover
                source={{
                  uri: 'https://img.freepik.com/free-photo/3d-render-realistic-medical-stethoscope-color-background_460848-10589.jpg',
                }}
                style={styles.card_image}
              />
              <Card.Content>
                <Paragraph style={styles.card_text}>
                  View your recent visits
                </Paragraph>
              </Card.Content>
              <Card.Actions>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('MedicalBook');
                  }}
                  style = {styles.buttonContainer}>
                  <Text style={styles.buttonText}>Medical Book</Text>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: screenWidth * 0.15,
    marginHorizontal: 30,
    marginVertical: 20,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 14,
    padding: 10,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
  },
  card_container: {
    alignContent: 'center',
    margin: 17,
    height: 220,
    width: 250,
    backgroundColor: '#EFE2E0',
  },
  card_image: {
    height: 100,
    width: 250,
    alignItems: 'center',
    backgroundColor: '#fffff',
  },
  card_text: {
    marginLeft: 20,
    fontSize: 25,
    fontFamily: 'cursive',
  },
});

export default HomeScreen;
