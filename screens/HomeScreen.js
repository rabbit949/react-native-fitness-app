import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import Header from '../components/Header'


// HomeScreen-1
const HomeScreen = () => {
    // removes the default top header
    const navigation = useNavigation()
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [])



  return (
    <View>
        <SafeAreaView className="pt-5 bg-white">
            {/* Custom Header */}
        < Header />
       
        </SafeAreaView>
         {/* Body */}
        <ScrollView> 
            {/* Featured Rows */}
            <FeaturedRow 
            id="1"
            title="My Activity"
            description=""
            />

            <Categories/>
            <FeaturedRow 
            id="2"
            title="Featured Exercises"
            description="Browse what suits best for you"
            />
            <FeaturedRow 
            id="3"
            title="Exercises by Muscle Groups"
            description="Browse what suits best for you"
            />
        </ScrollView>

    </View>
  )
}

export default HomeScreen