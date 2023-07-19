import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { FIREBASE_AUTH, signOut } from '../firebaseConfig';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../assets/colors/colors';
import profile from '../assets/images/person.png';

const Profile = ({navigation}) => {
  const auth = FIREBASE_AUTH;
  const [loading, setLoading] = useState(false);
  const onpressSignOut = () => {
    setLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };
  return (
    <View>
      {/* Header */}
      <View style={styles.headerWrapper}>
      <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.orange} />
        </TouchableOpacity>
      <TouchableOpacity onPress={onpressSignOut}>
      <Feather name='log-out' size={24} color={colors.orange}/>
      </TouchableOpacity>
      </View>
      {/* info */}
      <View style={styles.infWrapper}>
        <View style={styles.imgProfile}>
          <View>
          <Text style={styles.titleWrapper}>Ảnh đại diện : </Text>
          <TouchableOpacity style={{ backgroundColor: colors.orange, width: 80, height: 30, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
            <Text style={{color: colors.white, fontFamily:'Lato-Bold', fontSize: 15 }}>
            Thêm ảnh
            </Text>
            </TouchableOpacity>
          </View>
          <Image source={profile} style={{width: 100, height: 100, borderRadius: 10}}/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
 headerWrapper: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 10
 },
 imgProfile: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 17,
 },
 titleWrapper: {
  
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: colors.black,
 }
})


export default Profile;
