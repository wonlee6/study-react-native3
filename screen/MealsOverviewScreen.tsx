import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FlatList, StyleSheet, View } from 'react-native'
import { RootStackParamList } from '../App'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>

export default function MealsOverviewScreen({ route, navigation }: Props) {
  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter((i) => (i.categoryIds as string).includes(catId))

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((i) => i.id === catId)?.title
    navigation.setOptions({
      title: categoryTitle,
    })
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(info) => <MealItem {...info.item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
