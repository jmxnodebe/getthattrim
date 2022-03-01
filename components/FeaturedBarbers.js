import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import AppLoading from 'expo-app-loading';
import {useFonts, KaushanScript_400Regular,} from '@expo-google-fonts/kaushan-script';
import barber1 from '../assets/barber1.png'
import barber2 from '../assets/barber2.png'
import barber3 from '../assets/barber3.png'
import barber4 from '../assets/barber4.png'
import Barber from './Barber';

const {width, height} = Dimensions.get('screen')

const FeaturedBarbers = ({onPress}) => {
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
    ]

    let [fontsLoaded] = useFonts({
        KaushanScript_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{width, marginTop: '2%', marginBottom: '10%'}}>
                <View style={styles.label_container}>
                    <View style={styles.label_left}>
                        <Text style={styles.label_left_text}>Featured Barbers</Text> 
                        <IconButton icon='star' color='black' size={18}/>
                    </View>
                    <Text onPress={onPress} style={styles.label_right}>
                        SEE MORE
                    </Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        barbers.map((barber, index)=> (
                            <Barber 
                                barberImage={barber.image} barberName={barber.name}
                                totalPosts={barber.totalPosts} ratings={barber.ratings}
                                key={index} marginLeft={10}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default FeaturedBarbers

const styles = StyleSheet.create({
    label_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    label_left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '5%',
        width: '35 %'
    },
    label_left_text: {
        fontSize: 20,
        fontFamily: 'KaushanScript_400Regular'
    },
    label_right: {
        marginRight: '5%',
        fontWeight: '600'
    }
})
