import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

import {
    ThemeProvider,
    DarkTheme,
    DefaultTheme,
    useTheme,
  } from "@react-navigation/native";

const Layout = () => {
    console.log(DarkTheme)
  return (
    // To main dark theme across the spps
    <ThemeProvider value={DarkTheme}> 
        <Stack>
            <Stack.Screen
                name='index'
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name='payment/index'
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name='payment/success/index'
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name='payment/failed/index'
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name='notes/index'
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name='notes/add'
                options={{
                    headerShown: true,
                    headerTitle: 'Add A Note',
                    presentation: 'modal'
                }}
            />
        </Stack>
    </ThemeProvider>
  )
}

export default Layout