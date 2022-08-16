import React from 'react'
import { Text, View } from 'react-native'

const OnBoardingScreen = () => {
  return (
    <View style={{ backgroundColor: '##8860A2', flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text className="font-bold text-purple-500">Welcome, Lets Get Started</Text>
      {/* <TouchableOpacity className="p-5 bg-purple-400 text-black font-bold" >Get Started !</TouchableOpacity> */}
    </View>
  )
}

export default OnBoardingScreen