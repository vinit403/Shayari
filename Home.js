import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({ navigation }) => {

    return (
        <>
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1, backgroundColor: "black" }}>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Image style={{ resizeMode: "stretch", height: '100%', width: '100%', tintColor: "white" }} source={require('./image/menu.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 5 }}>
                            <Text style={{ color: "white", fontSize: 28, alignSelf: "center", margin: 2 }}>All Shayari 2022</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 15, backgroundColor: "white", flexDirection: "row", flexWrap: "wrap" }}>
                    <View style={{ height: '30%', width: '44%', backgroundColor: "#b38200", margin: 10, borderRadius: 20, elevation: 10 }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 25, color: "white", textAlign: "center", height: '95%', textAlignVertical: "center" }}>NEW</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: '30%', width: '44%', backgroundColor: "#b38200", margin: 10, borderRadius: 20, elevation: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                            <Text style={{ fontSize: 25, color: "white", textAlign: "center", height: '95%', textAlignVertical: "center" }}>CATEGORIES</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: '30%', width: '44%', backgroundColor: "#b38200", margin: 10, borderRadius: 20, elevation: 10 }}>
                        <Text style={{ fontSize: 25, color: "white", textAlign: "center", height: '95%', textAlignVertical: "center" }}>MORE APPS</Text>
                    </View>
                    <View style={{ height: '30%', width: '44%', backgroundColor: "#b38200", margin: 10, borderRadius: 20, elevation: 10 }}>
                        <Text style={{ fontSize: 25, color: "white", textAlign: "center", height: '95%', textAlignVertical: "center" }}>RATE US</Text>
                    </View>
                    <View style={{ height: '30%', width: '95%', backgroundColor: "#b38200", margin: 10, borderRadius: 20, elevation: 10 }}>
                        <Text style={{ fontSize: 40, color: "white", textAlign: "center", height: '95%', textAlignVertical: "center" }}>MY FAVOURITE</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Home;