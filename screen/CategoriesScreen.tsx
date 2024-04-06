import { FlatList } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'

import { CATEGORIES } from '../data/dummy-data'

// type Props = NativeStackScreenProps<RootDrawerParamList, 'Categories'>
interface RenderItemProps {
  item: {
    title: string
    color: string
    id: string
  }
}

function CategoriesScreen({ navigation }: any) {
  function renderCategoryItem(itemData: RenderItemProps) {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
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
