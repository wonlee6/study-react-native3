import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

interface Props {
  duration: number
  complexity: string
  affordability: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

export default function MealDetails({
  affordability,
  complexity,
  duration,
  style,
  textStyle,
}: Props) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})
