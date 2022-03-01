import React from 'react'
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import backgroundImage from '../assets/backgroundImage.png'
import barber1 from '../assets/barber1.png'
import barber2 from '../assets/barber2.png'
import barber3 from '../assets/barber3.png'
import barber4 from '../assets/barber4.png'
import Barber from '../components/Barber'
import TopNav from '../components/TopNav'



const {width, height} = Dimensions.get('screen')
const SeeMoreBarbers = () => {
    const barbers = [
        {
            name: 'Rotimi Blaise',
            image: barber1,
            ratings: 4,
            totalPosts: 5
        },
        {
            name: 'Ebere Wobia',
            image: barber2,
            ratings: 4,
            totalPosts: 4
        },
        {
            name: 'Charlie Boi',
            image: barber3,
            ratings: 3,
            totalPosts: 2
        },
        {
            name: 'Duke Obi',
            image: barber4,
            ratings: 5,
            totalPosts: 3
        },
        {
            name: 'Rotimi Blaise',
            image: barber1,
            ratings: 4,
            totalPosts: 5
        },
        {
            name: 'Ebere Wobia',
            image: barber2,
            ratings: 4,
            totalPosts: 4
        },
        {
            name: 'Charlie Boi',
            image: barber3,
            ratings: 3,
            totalPosts: 2
        },
    ]
    return (
        <SafeAreaView style={styles.see_more_barbers}>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backImage}>
                <View style={{marginTop: '8%'}}>
                    <TopNav />
                    <Text style={styles.info}>
                        There are currently 7 verified barbers near you.
                    </Text>
                </View>
                <ScrollView 
                    style={{
                        marginTop: '5%',
                        marginBottom: '15%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <View 
                        style={{
                            display: 'flex', flexDirection: 'row', width, 
                            flexWrap: 'wrap', alignContent: 'center', justifyContent: 'space-between',
                            paddingHorizontal: '7%'
                        }}>
                        {
                            barbers.map((barber, index)=> (
                                <Barber
                                    barberImage={barber.image} barberName={barber.name}
                                    totalPosts={barber.totalPosts} ratings={barber.ratings}
                                    key={index} marginBottom={'6%'}
                                />
                            ))
                        }
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SeeMoreBarbers

const styles = StyleSheet.create({
    backImage: {
        width, height,
    },
    info: {
        width: '70%',
        fontSize: 22,
        fontWeight: '900',
        lineHeight: 40,
        marginLeft: '5%'
    }
})
