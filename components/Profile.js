import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { FIREBASE_AUTH, signOut } from '../firebaseConfig';
const Profile = ({navigation}) => {
  const auth = FIREBASE_AUTH;
  const [loading, setLoading] = useState(false)
  const onpressSignOut = async () => {
    setLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={onpressSignOut}>
      <Feather name='log-out'/>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
