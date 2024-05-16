import { View, Text, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import NoteCards from '../../components/noteCards';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { getData, saveData } from '../../utils/asyncStorage';
import { FloatingAction } from "react-native-floating-action";

const NoteScreen = () => {
    const router = useRouter();

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const value = await getData('notes_data')
          console.log('initial startup notes data is========', value)
          if (value) {
            setData(JSON.parse(value));
          }
        };
        fetchData();
      }, []);
      console.log('============ ' , data.length)
    return (
        <SafeAreaView style={{ backgroundColor: 'rgb(13,10,10)'}}>
        
            <View className="flex flex-row justify-between p-5 align-middle ">
                <Text 
                        style={{ fontFamily: 'Shadow-Into-Light', fontSize: 25, fontWeight: 20}} 
                        className="text-white tracking-widest"
                    >
                    WhatToDoTodayHuh?
                    </Text>
                
                <TouchableOpacity onPress={() => router.push('settings')} className="py-2 px-2 rounded-lg">
                    <FontAwesome6 name="gear" size={24} color="white" style={{color: 'rgb(230,79,9)'}} />
                </TouchableOpacity>
            </View>


            {/* Note Cards */}
            <NoteCards data={data}/>


            {
                data.length == 6 ? (
                    <TouchableOpacity 
                        className='h-10 rounded-full'
                        style={{ 
                            
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            bottom: 50,
                            top:800,
                            right: 40,
                            left: 50,
                            height: 70,
                            backgroundColor: 'rgb(230,79,9)',
                        }}
                        onPress={() => { router.push('notes/add') }} 
                    > 
                        <Text className="text-white text-lg font-semibold ">Upgrade Now <Text className="text-sm">(unlimited notes)</Text></Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity 
                        style={{ 
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.2)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 70,
                            position: 'absolute',
                            bottom: 50,
                            top:800,
                            right: 40,
                            // left: 50,
                            height: 70,
                            backgroundColor: 'rgb(230,79,9)',
                            borderRadius: 100}}
                        onPress={() => { router.push('notes/add') }} 
                    > 
                        <AntDesign name="plus" size={35} color="white"/>
                    </TouchableOpacity>
                )
            }

        </SafeAreaView>
    )
}

export default NoteScreen