import * as React from 'react';
import {
  Dimensions,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
const { screenHeight, screenWidth } = Dimensions.get('window');
export default function PharmacyScreen({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <Card style={styles.card_container}>
        <Card.Cover
          source={{
            uri: 'https://img.freepik.com/free-photo/3d-render-realistic-medical-stethoscope-color-background_460848-10589.jpg',
          }}
          style={styles.card_image}
        />
        <Card.Content>
          <Paragraph style={styles.card_text}>Benadryl</Paragraph>
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DApp');
            }}
            style={styles.bookbuttonContainer}>
            <Text style={styles.bookbuttonText}>Buy</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
      <Card style={styles.card_container}>
        <Card.Cover
          source={{
            uri: 'https://img.freepik.com/free-photo/3d-render-realistic-medical-stethoscope-color-background_460848-10589.jpg',
          }}
          style={styles.card_image}
        />
        <Card.Content>
          <Paragraph style={styles.card_text}>ColdAct</Paragraph>
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SI');
            }}
            style={styles.bookbuttonContainer}>
            <Text style={styles.bookbuttonText}>Buy</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
      <Card style={styles.card_container}>
        <Card.Cover
          source={{
            uri: 'https://img.freepik.com/free-photo/3d-render-realistic-medical-stethoscope-color-background_460848-10589.jpg',
          }}
          style={styles.card_image}
        />
        <Card.Content>
          <Paragraph style={styles.card_text}>Dolo 650</Paragraph>
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity
            onPress={() => {
              console.log('efofubub');
            }}
            style={styles.bookbuttonContainer}>
            <Text style={styles.bookbuttonText}>Buy</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
      <Card style={styles.card_container}>
        <Card.Cover
          source={{
            uri: 'https://img.freepik.com/free-photo/3d-render-realistic-medical-stethoscope-color-background_460848-10589.jpg',
          }}
          style={styles.card_image}
        />
        <Card.Content>
          <Paragraph style={styles.card_text}>Crocin</Paragraph>
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MedicalBook');
            }}
            style={styles.bookbuttonContainer}>
            <Text style={styles.bookbuttonText}>Buy</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 25,
    width: 75,
    marginLeft: 250,
    marginVertical: 20,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 12,
  },
  bookbuttonContainer: {
    height: screenWidth * 0.15,
    marginHorizontal: 30,
    marginVertical: 20,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bookbuttonText: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 14,
    padding: 10,
  },
  card_container: {
    alignContent: 'center',
    margin: 17,
    height: 220,
    width: 120,
    backgroundColor: '#EFE2E0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card_image: {
    height: 100,
    width: 120,
  },
  card_text: {
    marginLeft: 20,
    fontSize: 16,
    fontFamily: 'cursive',
  },
});
