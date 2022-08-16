import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'

const SearchScreen = () => {
  const [value, setValue] = useState("")
  return (
    <View>   
      <SafeAreaView>
        <TextInput style={style.input} placeholder='Search Exercises' keyboardType='defalut'/>
      </SafeAreaView>
      <View>
        
      </View>
    </View>

  )
}

export default SearchScreen

const style = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    borderColor: '#8860A2',
    placeHolderTextColor: '#8860A2'
  },
});