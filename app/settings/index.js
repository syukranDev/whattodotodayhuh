import { View, Text, SafeAreaView, Pressable, Alert , Button} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { removeItemFromStorage } from '../../utils/asyncStorage';
import { useRouter } from 'expo-router';

const SettingPage = () => {
    const router = useRouter();
    const handleResetStorage = () => {
        Alert.alert('Warning', 'This will delete all your existing notes in the local storage.', [
            {
              text: 'Yes',
              onPress: () => {
                removeItemFromStorage('notes_data');
                alert('Success')
            },
              
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            }
          ]);
    }
  return (
    <SafeAreaView>
        <View className="flex flex-row justify-between max-w-full">
            <Pressable onPress={() => {router.back(); router.push('notes')}} className="py-4 px-4" style={{backgroundColor: 'rgb(230,79,9)'}}>
                <AntDesign name="arrowleft" size={30} color="white" />
            </Pressable>
            <Text className="py-2 px-2 text-white text-lg">Settings</Text>
        </View>

        <View className="mt-5 m-5">
            <Text className="text-white text-lg">Subscription Type:</Text>
            <View style={{backgroundColor: 'rgb(230,79,9)'}} className="flex flex-row justify-between rounded-lg">
                <Text className="text-white p-3 rounded-lg"
                    
                >Free (Limit to 6 notes only)</Text>
                <Pressable onPress={() => router.push('payment')} className="bg-red-600 border-l-4 rounded-r-lg w-[200] flex-1 justify-center items-center" >
                    <Text className="text-white text-sm font-semibold py-1 pr-1">Upgrade Unlimited </Text></Pressable>

            </View>

            <Text className="text-white text-lg mt-2">Reset Storage:</Text>
            <Pressable 
                    className="p-3 rounded-lg" 
                    style={{backgroundColor: 'rgb(230,79,9)'}}
                    onPress={handleResetStorage}
                >
                    <Text className="text-white">Click me to reset</Text>
            </Pressable>

            <Text className="text-white text-lg mt-2">User Frequently Asked Question (FQA):</Text>
            <Pressable 
                    className="p-3 rounded-lg" 
                    style={{backgroundColor: 'rgb(230,79,9)'}}
                >
                    <Text className="text-white">TBA</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default SettingPage