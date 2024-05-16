import { View, Text, ScrollView , TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

// const data = [
//   {
//     id:1,
//     title:'Going to the gym 6pm ',
//     desc: 'It is a long established fact that a reader will be distracted by the readable content of a page',
//     date: '2024-12-11'
//   },
//   {
//     id:2,
//     title:'Meeting with client Akkkkkkk',
//     desc: 'It is a long established fact that a reader will be distracted by the readable content of a page',
//     date: '2024-12-11'
//   },
//   {
//     id:3,
//     title:'This is my note 34',
//     desc: 'It is a long established fact that a reader will be distracted by the readable content of a page',
//     date: '2024-12-11'
//   },
//   {
//     id:4,
//     title:'This is my note 68',
//     desc: 'It is a long established fact that a reader will be distracted by the readable content of a page',
//     date: '2024-12-11'
//   },
// ]

const NoteCards = ({data}) => {
  console.log('data fetch inside noteCards =======')
  console.log(data)
  
  return (
    <ScrollView className="h-full">
      {
        data.length > 0 ? (
          data.map((item, index) => (
            <View  key={index} className="m-5 h-[100] border border-gray-200 p-5 rounded-lg">
              <View className="flex flex-row justify-between items-center">
                <View>
                  <Text 
                     className="font-semibold text-lg"
                     style={{color: 'rgb(230,79,9)'}}
                  >
                      {item.title.length > 24 ? item.title.slice(0,24 ) + '...' : item.title}
                  </Text>
                  <Text className="text-white">{item.date}</Text>
                </View>
                <View className="flex flex-row mt-2">
                  {/* Edit button */}
                  <TouchableOpacity onPress={() => {}} className="border border-white py-2 px-2 rounded-md ml-2">
                      <AntDesign name="edit" size={20} color="white" />
                  </TouchableOpacity>
                  {/* Delete button */}
                  <TouchableOpacity onPress={() => {}} className="bg-red-800 py-2 px-2 rounded-md ml-2">
                      <AntDesign name="delete" size={20} color="white" />
                  </TouchableOpacity>

                </View>
              </View>
            </View>
          ))
        ) : ( 
          <View className="justify-center items-center p-2">
            <View className="border border-gray-200 border-dashed w-full h-[300] mt-20 rounded-lg flex justify-center items-center">
              <View className="bg-orange-400 rounded-full h-16 w-16 flex justify-center items-center mb-1">
                <AntDesign name="file1" size={30} color="white" />
              </View>
              <Text className="text-white font-bold text-lg mb-1">You dont have any notes created</Text>
              <Text className="text-slate-300 text-xs text-center w-[300] antialiased">You currently dont have any notes. Create some so that you can see them right here.</Text>
            </View>
          </View>
        )
      }
    </ScrollView>
  )
}

export default NoteCards