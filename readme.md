## react navigation

[Get Start](https://reactnavigation.org/docs/getting-started)

<h3>
From React Native 0.60 and higher, linking is automatic. So you don't need to run react-native link.

If you're on a Mac and developing for iOS, you need to install the pods (via Cocoapods) to complete the linking.

</h3>

```
npx pod-install ios
```

## Creating a native stack navigator

```
npm install @react-navigation/native-stack
```

```jsx
export type RootStackParamList = {
  MealsCategories: undefined
  MealsOverview: {
    categoryId: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealsCategories'>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

//
type Props = NativeStackScreenProps<RootStackParamList, "MealsCategories">
function CategoriesScreen({ navigation }: Props) {
  function renderCategoryItem(itemData: RenderItemProps) {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      })
    }
...
```

### useNavigation 사용 가능
