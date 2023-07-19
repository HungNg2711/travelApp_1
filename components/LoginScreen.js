import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/images/LogoApp.png';
import colors from '../assets/colors/colors';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { FIREBASE_AUTH, firebaseAuth } from '../firebaseConfig';
const LoginScreen = ({navigation}) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const auth = FIREBASE_AUTH;
const onpressSignIn = async () => {
    setLoading(true);
    signInWithEmailAndPassword( auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Alert.alert('Login Success!!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Thông báo:",'Email hoặc mật khẩu không chính xác !')
      });   
}
  return (
    <View style={{flex: 1, backgroundColor: '#FFFF', alignItems: 'center', justifyContent: 'center'}}>
        <Image source={logo} style={styles.logoImage}/>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      
      <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={onpressSignIn}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWrapperRegister}
          onPress={() =>
            navigation.navigate('RegisterScreen')}>
          <Text style={styles.textRegister}>Đăng ký tài khoản</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 10,
        marginVertical: 5,
        height: 50,
        width: 300,
        borderWidth: 1,
        paddingHorizontal: 10,
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
      buttonWrapperRegister: {
        alignItems: 'center',
        width: 200,
        height: 55,
      },
      textRegister: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        fontWeight: 'bold',

      }
    
})