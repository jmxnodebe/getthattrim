import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Dashboard from '../pages/Dashboard'
import SeeMoreSalons from '../pages/SeeMoreSalons'
import SeeMoreBarbers from '../pages/SeeMoreBarbers'

const DashboardNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{
            headerTransparent: true,
            title: '',
            // animationTypeForReplace: 'push'
        }} >
            <Stack.Screen name='Dashboard' component={Dashboard} />
            <Stack.Screen name='SeeMoreSalons' component={SeeMoreSalons} />
            <Stack.Screen name='SeeMoreBarbers' component={SeeMoreBarbers} />
        </Stack.Navigator>
    )
}

export default DashboardNavigator

