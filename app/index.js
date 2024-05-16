import { View, Text, Button, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { removeItemFromStorage } from '../utils/asyncStorage';

const SplashScreen = () => {
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        'Shadow-Into-Light': require('../assets/fonts/ShadowsIntoLight-Regular.ttf')
    })

    useEffect(() => {
        // setTimeout(() => router.push('settings'), 1500)
    })

    return (
        <Animated.View entering={FadeInUp.springify().delay(100)} 
            className="flex-1 justify-center items-center h-screen"
            style={{ backgroundColor: 'rgb(13,10,10)'}}
        >
            <LinearGradient
                // Background Linear Gradient
                // style={{backgroundColor: 'rgb(230,79,9)'}}
                colors={['rgb(230,79,9)', 'transparent']}
                style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: 300,
                }}
            />
            <View className="mb-3">
                <Text 
                    style={{color: 'rgb(230,79,9)'}}
                    className=""
                >
                    Sort your note easily
                </Text>
                <Text 
                    style={{ fontFamily: 'Shadow-Into-Light', fontSize:40}} 
                    className="text-white tracking-widest"
                    
                >
                WhatToDoTodayHuh?
                </Text>
                {/* <Text style={{color: 'rgb(230,79,9)'}} className="align-right">
                Your go-to for hassle-free note-taking! 
                </Text> */}
            </View>

            <Animated.View entering={FadeInUp.springify().delay(200)} className="items-center w-[300]" >
                <Text className=" text-white">
                Your go-to for hassle-free note-taking. Streamlined, user-friendly, and efficient. 
                </Text>
              
            </Animated.View>

            <Animated.View entering={FadeInUp.springify().delay(300)} className="items-center mt-5">
                <Pressable 
                    className="p-3 rounded-lg" 
                    style={{backgroundColor: 'rgb(230,79,9)'}}
                    onPress={() => router.push('notes')}
                >
                    <Text className="text-white"> Start Now</Text>
                </Pressable>

            </Animated.View>
        </Animated.View>
    )
}

export default SplashScreen