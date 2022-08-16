import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity 
     className="mr-2 relative h-40 w-40  rounded-lg border border-purple-400 ">
        <Image source={imgUrl}
        className="h-40 w-40 rounded object-contain" />
      <Text className="absolute bottom-0 right-0 rounded text-white font-bold bg-black p-2" >{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  shadow:{
    shadowColor: '#7F5DF0',
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})