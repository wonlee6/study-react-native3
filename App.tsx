import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from './screen/CategoriesScreen'
import MealsOverviewScreen from './screen/MealsOverviewScreen'
import MealDetailScreen from './screen/MealDetailScreen'

export type RootStackParamList = {
  MealsCategories: undefined
  MealsOverview: {
    categoryId: string
  }
  MealsDetail: {
    mealId: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='MealsCategories'
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='MealsDetail' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
})
