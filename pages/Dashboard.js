import React, { useState } from 'react'
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import backgroundImage from '../assets/backgroundImage.png'
import FeaturedBarbers from '../components/FeaturedBarbers'
import FeaturedSalons from '../components/FeaturedSalons'
import Moodboard from '../components/Moodboard'
import TopNav from '../components/TopNav'

const {width, height} = Dimensions.get('screen')

const Dashboard = ({navigation}) => {
    let username = 'Neez'
    return (
        <SafeAreaView style={styles.dashboard_page}>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backImage}>
                <TopNav />
                <ScrollView style={{width, marginTop: '1%', marginBottom: '10%',}}>
                    <Text style={styles.welcome_text}>
                        Hi {username}, it's always the right time to get that trim.
                    </Text>
                    <FeaturedSalons onPress={()=> navigation.navigate('SeeMoreSalons')} />
                    <FeaturedBarbers onPress={()=> navigation.navigate('SeeMoreBarbers')}/>
                    <Moodboard />
                </ScrollView>
            </ImageBackground>
        </SafeAreaView> 
    )
}

export default Dashboard

const styles = StyleSheet.create({
    dashboard_page: {
        flex: 1,
    },
    backImage: {
        width, height,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    welcome_text: {
        width: '70%',
        fontSize: 24,
        fontWeight: '900',
        color: 'black',
        alignSelf: 'flex-start',
        marginVertical: '4%',
        marginHorizontal: '5%',
        lineHeight: 40
    }
})
