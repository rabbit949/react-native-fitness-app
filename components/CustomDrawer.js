import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { AdjustmentsIcon, HeartIcon, LogoutIcon, SearchIcon, UserIcon } from 'react-native-heroicons/outline';
const CustomDrawer = (props) => {
    const navigation = useNavigation()
  return (
    <View style={{flex: 1, backgroundColor:'#fff'}}>
        
        <View Style={{backgroundColor: '#8860A2', height: 200}}>
            <ImageBackground source={require('../assets/BG.png')} style={{padding:20}}>
                <View className='mt-4'>
                    <Image source={require('../assets/couple.jpg')} className="h-24 w-24 rounded-full border-2 border-purple-400"/>
                        {/* username would be from firebase auth */}
                    <Text className='font-semibold text-white mt-2 text-xl px-2' >UserName</Text>
                </View>        
            </ImageBackground> 
        </View>
       <View className='flex-1 items-start gap-4 m-3'>
            <TouchableOpacity onPress={()=>{navigation.navigate('Search')}}>
                <View className='flex-row items-center justify-center'>
                    <SearchIcon size={25} color='#8860A2' />
                    <Text className='font-bold text-md ml-1'>Search Exercises</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Activity')}}>
                <View className='flex-row items-center justify-center'>
                    <HeartIcon size={25} color='#8860A2' />
                    <Text className='font-bold text-md ml-1'>My Activity</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Activity')}}>
                <View className='flex-row items-center justify-center'>
                    <AdjustmentsIcon size={25} color='#8860A2' />
                    <Text className='font-bold text-md ml-1'>BMI Calculator</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Settings')}}>
                <View className='flex-row items-center justify-center'>
                    <UserIcon size={25} color='#8860A2' />
                    <Text className='font-bold text-md ml-1'>Profile Settings</Text>
                </View>
            </TouchableOpacity>
       </View>
       <View style={{borderTopWidth:1, borderColor:'#8860A2', padding: 30}}>
        {/* need to provide the auth payload to sign out */}
            <TouchableOpacity >
                <View className='flex-row items-center justify-center'>
                    <LogoutIcon size={25} color='#8860A2' />
                    <Text className='font-bold text-md ml-1'>Sign Out</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomDrawer