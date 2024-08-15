import * as React from 'react';
import { ImageBackground, SafeAreaView ,Text, View, TextInput, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigation from './TabNavigator'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  return (
    <View
      style={{
        padding: 20,
        backgroundColor:'#e7feff',
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text style={{
        alignSelf: 'center',
        fontSize: 50,
        marginVertical: 60 ,
        color: '#00887A',
        fontWeight: '1000',
        fontFamily:'montserrat'
      }}>AppoDoc</Text>
      <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
        <TextInput
          textContentType={'emailAddress'}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCompleteType={'email'}
          clearButtonMode={'while-editing'}
          keyboardType={'email-address'}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
          placeholder={'Email'}
          style={{
            flex: 1,
            paddingLeft: 3,
            paddingBottom: 5,
            borderBottomColor: '#9BE6DE',
            borderBottomWidth:2,
            color: 'black',
            fontSize : 15 ,
            fontWeight: '50%',
          }}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
        <TextInput
          textContentType={'password'}
          onChangeText={(text) => setPass(text)}
          value={pass}
          autoCompleteType={'password'}
          clearButtonMode={'while-editing'}
          returnKeyLabel={'done'}
          returnKeyType={'done'}
          placeholder={'Password'}
          secureTextEntry={true}
          style={{
            flex: 1,
            paddingLeft: 3,
            paddingBottom: 5,
            borderBottomColor: '#9BE6DE',
            borderBottomWidth:2,
            color: 'black',
            fontSize : 15 ,
          }}
        />
        
      </View>
      <Text style={{
        alignSelf: 'center',
        fontSize: 12,
        color: '#22A0B6',
        fontWeight: '600',
      }}
      onPress={() => navigation.navigate('Home')}>Forgot Password?</Text>

      <View style={{
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent:'center'
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View
            style={{
              width: 100,
              height: 50,
              borderRadius: 20,
              elevation: 8,
              backgroundColor: '#0D2534',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 10, 
              marginVertical:10,
            }}>
            <Text
              style={{
                color: '#9BE6DE',
                position: 'absolute',
              }}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{
        fontSize: 14,
        color: '#22A0B6',
        fontWeight: '600',
      }}></Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <View
            style={{
              width: 100,
              height: 50,
              borderRadius: 20,
              elevation: 8,
              backgroundColor: '#0D2534',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical:10,
            }}>
            <Text
              style={{
                color: '#9BE6DE',
                position: 'absolute',
                margin:'auto',
              }}>
              SignUp
            </Text>
          </View>
        </TouchableOpacity>
        
        
      </View>
    </View>
 );
}
