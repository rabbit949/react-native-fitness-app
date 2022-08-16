import React from 'react'
import { SafeAreaView, View } from 'react-native'
import Header from '../components/Header'

const ActivityScreen = () => {
  return (
    <View>
       <SafeAreaView className="pt-5 bg-white">
            {/* Custom Header */}
        < Header />
       
        </SafeAreaView>
    </View>
  )
}

export default ActivityScreen