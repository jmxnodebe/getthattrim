import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Footer from '../components/Footer'
import Dashboard from '../pages/Dashboard'
import Notifications from '../pages/Notifications'
import Appointments from '../pages/Appointments'
import DashboardNavigator from './DashboardNavigator'

const Tab = createBottomTabNavigator()
const FooterNavigator = () => {
    return (
        <Tab.Navigator //wrapper component that contains all routes
            tabBar={(props)=> <Footer {...props}/>} initialRouteName='Dashboard'
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen 
                name='DashboardNavigator' //routes available for navigation in the footer
                component={DashboardNavigator} 
                initialParams={{icon: 'view-dashboard'}}
            />
            <Tab.Screen 
                name='Notifications'
                component={Notifications}
                initialParams={{icon: 'bell'}} 
            />
            <Tab.Screen 
                name='Appointments'
                component={Appointments}
                initialParams={{icon: 'clock-outline'}} 
            />
        </Tab.Navigator>
    )
}

export default FooterNavigator
