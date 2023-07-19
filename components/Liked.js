import React from 'react';
import {View, Text, Button, Image, SafeAreaView, ScrollView, StyleSheet, ImageBackground} from 'react-native';
import { useSelector } from 'react-redux';
import { TouchableOpacity,  } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../assets/colors/colors';
import MapView, {Callout, Marker} from 'react-native-maps';
const Liked = ({navigation}) => {
  const discoveryData = useSelector ((state) => state.detailReducer)
  // console.log("discoverData", discoveryData);  
  return (
    <View style={{flex: 1}}>
      <MapView
      style ={{width:'100%', height:'50%'}}
  initialRegion={{
    latitude: 20.972413,
    longitude: 105.828721,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }}
  onRegionChange={ x => {
    // console.log(x);
  }}
>
<Marker
  coordinate={{
    latitude: 20.972413,
    longitude: 105.828721,
  }}
  pinColor='blue'>
  <Callout style={{borderRadius: 20}}>
  <Text>
    Tao ở đây
  </Text>
</Callout>
</Marker>

</MapView>
      {/* <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: discoveryData,
          })}>
        <ImageBackground
          // source={discoveryData.image}
          // style={[
          //   styles.discoverItem,
          //   {marginLeft: discoveryData.id === 'discover-1' ? 20 : 0},
          // ]}
          // imageStyle={discoveryData.discoverItemImage}
          >
          <Text style={discoveryData.discoverItemTitle}>{discoveryData.title}</Text>
          <View style={discoveryData.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={discoveryData.discoverItemLocationText}>{discoveryData.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  // discoverItem: {
  //   width: 170,
  //   height: 250,
  //   justifyContent: 'flex-end',
  //   paddingHorizontal: 10,
  //   paddingVertical: 15,
  //   marginRight: 20,
  // },
})
export default Liked;
