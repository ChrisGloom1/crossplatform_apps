import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { View, Text } from "react-native"

const Tab = createBottomTabNavigator()

const HomePage: React.FC = () => {
  return(
    <View>
      <Text>Homepage comp</Text>
    </View>
  )
}

const HomeRoutes: React.FC = () => {
  return <Tab.Navigator initialRouteName="Start">
    <Tab.Screen name="Start" component={HomePage} />
    <Tab.Screen name="Search" component={HomePage} />
    <Tab.Screen name="Favorites" component={HomePage} />
    <Tab.Screen name="DetailPage" component={HomePage} />
  </Tab.Navigator>
}

export default HomeRoutes;