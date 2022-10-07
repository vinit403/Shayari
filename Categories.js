import React,{useState,useEffect}  from "react";
import { Image, TouchableOpacity, ScrollView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Categories = ({navigation}) => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("http://192.168.15.193/demo/Shayari/api_cat.php")
        .then(res => res.json())
        .then(
            (result) => {
                setUsers(result);
            },
            (error) => {
                console.log(error)
            }
        )    
    },[])


    return(
        <>
            <View style={{flex:1,flexDirection:"column"}}>
                <View style={{flex:1,backgroundColor:"black"}}>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
                        <View style={{flex:1}}>
                           <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                                <Image style={{resizeMode:"stretch",height:'90%',width:'70%',tintColor:"white",alignSelf:"center",margin:2}} source={require('./image/back-arrow.png')}></Image>
                           </TouchableOpacity>
                        </View>
                        <View style={{flex:5}}>
                           <Text style={{color:"white",fontSize:28,alignSelf:"center",margin:2}}>All Shayari 2022</Text> 
                        </View>
                    </View>
                </View>
                <View style={{flex:15,backgroundColor:"white",flexDirection:"column",flexWrap:"wrap"}}>
                    <ScrollView style={{width:'100%'}}>
                        {/* {
                            catArr.map((itm,indx)=>{
                                return(
                                    <View key={indx} style={{width:'95%',height:60,margin:10,backgroundColor:"skyblue"}}>
                                        <TouchableOpacity onPress={()=> navigation.navigate('Shayari', { catId: indx, cat: itm })}>
                                            <Text style={{fontSize:25,color:"black",textAlign:"center",fontWeight:"bold",height:'95%',textAlignVertical:"center"}}>{itm} Shayari</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        } */}
                        {
                                users.map((item,i)=>{
                                    return(
                                        <View key={i} style={{width:'95%',height:60,margin:10,backgroundColor:"#b38200",borderRadius:20}}>
                                            <TouchableOpacity onPress={()=> navigation.navigate('Shayari',{shayariname:item.cat_name,c_id:item.cat_id})}>
                                                <Text style={{fontSize:25,color:"white",textAlign:"center",fontWeight:"bold",height:'95%',textAlignVertical:"center"}}>{item.cat_name}</Text>
                                            </TouchableOpacity>
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

export default Categories;