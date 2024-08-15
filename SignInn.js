import * as React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Pressable,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigation from './TabNavigator';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export default function Login({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 30,
          marginBottom: 50,
          color: '#22A0B6',
          fontWeight: '600',
        }}>
        SignUp to AppoDoc
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <TextInput
          textContentType={'emailAddress'}
          // onChangeText={(text) => setEmail(text)}
          // value={email}
          autoCompleteType={'email'}
          clearButtonMode={'while-editing'}
          keyboardType={'email-address'}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
          placeholder={'Email Address'}
          style={{
            flex: 1,
            paddingLeft: 20,
            borderBottomColor: '#9BE6DE',
            borderBottomWidth: 1,
            color: 'black',
            fontSize: 14,
            fontWeight: '50%',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <TextInput
          textContentType={'password'}
          autoCompleteType={'password'}
          clearButtonMode={'while-editing'}
          returnKeyLabel={'done'}
          returnKeyType={'done'}
          placeholder={'Password'}
          secureTextEntry={true}
          style={{
            flex: 1,
            paddingLeft: 20,
            borderBottomColor: '#9BE6DE',
            borderBottomWidth: 1,
            color: 'black',
            fontSize: 14,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <TextInput
          textContentType={'password'}
          autoCompleteType={'password'}
          clearButtonMode={'while-editing'}
          returnKeyLabel={'done'}
          returnKeyType={'done'}
          placeholder={'Confirm Password'}
          secureTextEntry={true}
          style={{
            flex: 1,
            paddingLeft: 20,
            borderBottomColor: '#9BE6DE',
            borderBottomWidth: 1,
            color: 'black',
            fontSize: 14,
          }}
        />
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginTop: 30,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View
            style={{
              width: 100,
              height: 50,
              borderRadius: 20,
              elevation: 8,
              shadowColor: '#0047BB',
              shadowRadius: 8,
              backgroundColor: '#0D2534',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#9BE6DE',
                position: 'absolute',
              }}>
              Submit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
