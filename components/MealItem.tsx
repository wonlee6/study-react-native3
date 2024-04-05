import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import MealDetails from './MealDetails'

type MealModel = {
  id: string
  categoryIds: string[]
  title: string
  affordability: string
  complexity: string
  imageUrl: string
  duration: number
  ingredients: string[]
  steps: string[]
  isGlutenFree: boolean
  isVegan: boolean
  isVegetarian: boolean
  isLactoseFree: boolean
}

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealModel) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const selectMealItemHandler = () => {
    navigation.navigate('MealsDetail', {
      mealId: id,
    })
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
})
