import { FlatList } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

import { CATEGORIES } from "../data/dummy-data"
import { RootStackParamList } from "../App"

type Props = NativeStackScreenProps<RootStackParamList, "MealsCategories">

interface RenderItemProps {
  item: {
    title: string
    color: string
    id: string
  }
}

function CategoriesScreen({ navigation }: Props) {
  function renderCategoryItem(itemData: RenderItemProps) {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      })
    }

    return (
      <CategoryGridTile
        onPress={pressHandler}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
