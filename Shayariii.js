import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Share, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Categories from './Categories';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';


const Shayariii = ({ route }) => {
  const [users, setUsers] = useState([]);
  const root = route.params;
  const category = root.c_id;
  const navigation = useNavigation();
  const copyToClipboard = (txt) => {
    Clipboard.setString(txt);
    Toast.show("Copied Text !!", Toast.LONG);
  };

  const shareToWhatsApp = (text) => {
    Linking.openURL(`whatsapp://send?text=${text}`);
  }
  const onShare = async (tex) => {
    try {
      const result = await Share.share({
        message:
          tex,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    fetch("http://192.168.15.193/demo/Shayari/get_shayari_by_cat.php?c_id=" + category)
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result)
          setUsers(result);
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  return (
    <>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ height: 50, flexDirection: 'row', backgroundColor: "black" }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ flex: 0.5 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <Image source={require("./image/back-arrow.png")} style={{ height: 40, width: 40, tintColor: "white", margin: 5 }} ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 9 }}>
              <Text style={{ alignSelf: 'center', color: "white", fontSize: 25, justifyContent: 'center', margin: 5, marginRight: 5 }}>{root.shayariname}</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 15, flexDirection: 'column', flexWrap: 'wrap' }}>
          <ScrollView style={{ width: '100%' }}>
            {
              users.map((item, i) => {
                return (
                  <View key={i} style={{ margin: 10, backgroundColor: "#b38200", borderRadius: 20 }}>
                    <TouchableOpacity>
                      <Text style={{ fontSize: 25, fontWeight: 'bold', color: "white", padding: 5 }}>{item.shayari_text}</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 20, flexDirection: "row", width: '100%' }}>
                      <TouchableOpacity onPress={() => { copyToClipboard(item.shayari_text) }} style={{ height: 50, width: '25%', borderTopWidth: 3, borderRightWidth: 3, borderColor: "#ffffff", alignItems: "center", justifyContent: "center" }}>
                        <Image style={{ height: 35, width: 35, resizeMode: "stretch", tintColor: "black" }} source={require('./image/copy.png')}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => { onShare(item.shayari_text) }} style={{ height: 50, width: '25%', borderTopWidth: 3, borderRightWidth: 3, borderColor: "#ffffff", alignItems: "center", justifyContent: "center" }}>
                        <Image style={{ height: 35, width: 35, resizeMode: "stretch", tintColor: "black" }} source={require('./image/share.png')}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => { shareToWhatsApp(item.shayari_text) }} style={{ height: 50, width: '25%', borderTopWidth: 3, borderRightWidth: 3, borderColor: "#ffffff", alignItems: "center", justifyContent: "center" }}>
                        <Image style={{ height: 35, width: 35, resizeMode: "stretch", tintColor: "black" }} source={require('./image/whatsapp.png')}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ height: 50, width: '25%', borderTopWidth: 3, borderColor: "#ffffff", alignItems: "center", justifyContent: "center" }}>
                        <Image style={{ height: 35, width: 35, resizeMode: "stretch", tintColor: "black" }} source={require('./image/download.png')}></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default Shayariii

const styles = StyleSheet.create({})