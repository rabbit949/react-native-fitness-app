import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const FeaturedRow = ({title, description, id}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        <ScrollView horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        showsHorizontalScrollIndicator = {false} >
            {/* Exercies Cards */}
        </ScrollView>
    </View>
  )
}

export default FeaturedRow