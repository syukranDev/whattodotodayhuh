import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import uuid from 'react-native-uuid';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { getData, removeItemFromStorage, saveData } from '../../utils/asyncStorage';
import { useRouter } from 'expo-router';
import dayjs from 'dayjs';

const NoteAddScreen = () => {
    const router = useRouter();
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = async () => {
        if (title == '' || desc == '') { alert('Fill in the blanks')}
        else {
            let items = await getData('notes_data')
            if (!items) {
                console.log('creating new data arrray')
                let data = []
                data.push({
                    id: uuid.v4(),
                    title,
                    desc,
                    date: dayjs().format('YYYY-MM-DD')
                })
                await saveData('notes_data', JSON.stringify(data));
            } else {
                console.log('================')
                console.log('push data into exisiting arr')
                console.log(items)
                items = JSON.parse(items)
                items.push({
                    id: uuid.v4(),
                    title,
                    desc,
                    date: dayjs().format('YYYY-MM-DD')
                })
                console.log(items)
                await removeItemFromStorage('notes_data');
                await saveData('notes_data', JSON.stringify(items));
            }
    
            router.back();
            router.push('notes')
        }
    }

  return (
    <Animated.View entering={FadeInDown.springify().delay(300)} className="m-4 pt-8">
        <Text className="font-semibold text-lg text-white m-3">Title</Text>
        <TextInput
            // multiline
            // numberOfLines={"5"}
            maxLength={"50"}
            onChange={(e) => setTitle(e.nativeEvent.text)}
            className="bg-white w-full p-2 border border-white border-dashed rounded-lg"
            placeholder='Title for your note'
            placeholderTextColor={'black'}
            keyboardAppearance='dark'

        />


        <Text className="font-semibold text-lg text-white m-3">Description:</Text>
        <TextInput
            multiline
            numberOfLines={"5"}
            maxLength={"50"}
            onChange={(e) => setDesc(e.nativeEvent.text)}
            className="bg-white w-full p-2 border border-white border-dashed rounded-lg"
            placeholder='Describe your note as you want'
            placeholderTextColor={'black'}
            keyboardAppearance='dark'
            style={{
                height: 200
            }}
        />
        
        <Pressable 
            className="p-3 rounded-lg mt-10" 
            style={{backgroundColor: 'rgb(230,79,9)'}}
            onPress={handleSubmit}
        >
            <Text className="text-white text-center">Add</Text>
        </Pressable>
        <Pressable 
            className="p-3 rounded-lg" 
            // style={{backgroundColor: 'rgb(230,79,9)'}}
            onPress={() => router.back()}
        >
            <Text className="text-white text-center">Cancel</Text>
        </Pressable>
    </Animated.View>
  )
}

export default NoteAddScreen