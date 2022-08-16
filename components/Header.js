import React from 'react';
import { Image, Text, View } from 'react-native';
import couple from '../assets/couple.jpg';

const Header = () => {
  // setting Date in header
    const current = new Date();
    const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
    const date = `${current.getDate()} ${months[current.getMonth()]}, ${current.getFullYear()}`;
        


  return (
        <View className="flex-row pb-3 items-center mx-4 mt-1 space-x-2 ">
            <Image
                source={couple}
                className="h-10 w-10 bg-gray-300 p-4 rounded-full"
              />
            <View className="flex-1">
                {/* fetch username from firebase */}
                <Text className="font-bold text-xl" >Hi, <Text style={{color:'#8860A2'}}>Username</Text></Text>
                <Text className="text-bold text-gray-400 text-xs">{date}</Text>
            </View>
           
            {/* below is the userIcon if you don't want the image you can use this as well */}
            {/* <UserIcon size={25} color="#8860A2" /> */}
        </View>
  )
}

export default Header