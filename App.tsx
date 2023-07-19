import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Details from './components/Details';
import colors from './assets/colors/colors';
import Liked from './components/Liked';
import Profile from './components/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import {User, onAuthStateChanged} from 'firebase/auth'
import { FIREBASE_AUTH } from './firebaseConfig';
const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function InsideLayout() {
  return (
<InsideStack.Navigator>
  <InsideStack.Screen name='TabNavigator' component={TabNavigator} options={{headerShown: false}} />
  <InsideStack.Screen name='Home' component={Home} options={{headerShown: false}} />
  <InsideStack.Screen name='Liked' component={Liked} options={{headerShown: false}} />
  <InsideStack.Screen name='Profile' component={Profile} options={{headerShown: false}} />
  <InsideStack.Screen name='Details' component={Details} options={{headerShown: false}} />
  {/* <InsideStack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}} /> */}

</InsideStack.Navigator>

  )
}

const TabNavigator = ()=>{
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel: false,
    }}>
      <Tab.Screen name='Home' component={Home} 
      options={{
        tabBarIcon: ({color}) => (
          <Entypo name="home" size={32} color={color} />
        ),
        headerShown: false
      }}
      />
      <Tab.Screen name='Liked' component={Liked}
      options={{
        tabBarIcon: ({color}) => (
          <Entypo name="heart" size={32} color={color} />
        ),
        headerShown: false
      }}/>
      <Tab.Screen name='Profile' component={Profile}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="account" size={32} color={color} />
        ),
        headerShown: false
      }}/>
    </Tab.Navigator>
  )
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // console.log('user', user)
        setUser(user);
      } else {
      }
      
    });
  },[]);
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
        <Stack.Screen name='Inside' component={InsideLayout} options={{headerShown: false}}/>
        ) : (
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}}/>
        )}
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
     </Provider>
    
  )
}

export default App


const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }

});