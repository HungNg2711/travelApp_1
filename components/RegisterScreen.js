import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/images/LogoApp.png';
import colors from '../assets/colors/colors';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';
import { FIREBASE_AUTH } from '../firebaseConfig';
import Ionicons from 'react-native-vector-icons/Ionicons'
const RegisterScreen = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
const auth = FIREBASE_AUTH;
const navigation = useNavigation();
const onpressSignup = async () =>{
  setLoading(true);
    
        createUserWithEmailAndPassword( auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          Alert.alert('Đăng ký thành công')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert("Thông báo:", 'Đăng ký thất bại')

        });
      
    }
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFF'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name={'arrow-back-sharp'} size={30} color={colors.orange} style={{padding: 10}}/>
      </TouchableOpacity>
    <View style={{flex: 2, backgroundColor: '#FFFF', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.headerRegister}>Đăng ký tài khoản</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      
      <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={onpressSignup}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 10,
        marginVertical: 5,
        height: 50,
        width: 300,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10
    },
    logoImage: {
        width: 250,
        height: 70,
        marginBottom: 20,
      },
    buttonWrapper: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: colors.orange,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 20,
        width: 120,
        height: 55,
      },
    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',
      },
      headerRegister: {
        fontFamily: 'Lato-Bold',
        fontSize: 26,
        color: colors.orange,
        fontWeight: 'bold',
      }
    
})