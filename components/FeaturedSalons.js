import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import AppLoading from 'expo-app-loading';
import {useFonts, KaushanScript_400Regular,} from '@expo-google-fonts/kaushan-script';
import salon1 from '../assets/salon1.png'
import salon2 from '../assets/salon2.png'
import salon3 from '../assets/salon3.png'
import Salon from './Salon';

const {width, height} = Dimensions.get('screen')

const FeaturedSalons = ({onPress}) => {
    const salons = [
        {
            salonName: 'Klin Kutz',
            salonAddress: '15b, Admiralty way, Lekki Phase 1',
            salonImage: salon1,
            availableSeats: 10,
            isOpen: 'OPEN'
        },
        {
            salonName: 'Clipperz',
            salonAddress: 'Road 47, VGC',
            salonImage: salon2,
            availableSeats: 10,
            isOpen: 'OPEN'
        },
        {
            salonName: 'Joe Trims',
            salonAddress: 'Royal Plaza, Sangotedo',
            salonImage: salon3,
            availableSeats: 10,
            isOpen: 'OPEN'
        }
    ]


    let [fontsLoaded] = useFonts({
        KaushanScript_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{width}}>
                <View style={styles.label_container}>
                    <View style={styles.label_left}>
                        <Text style={styles.label_left_text}>Featured Salons</Text> 
                        <IconButton icon='star' color='black' size={18}/>
                    </View>
                    <Text style={styles.label_right} onPress={onPress}>
                        SEE MORE
                    </Text>
                </View>
                <ScrollView 
                    horizontal showsHorizontalScrollIndicator={false}
                    style={{width, display: 'flex', flexDirection: 'row', alignItems: 'center',}}
                >
                    {salons.map((salon, index)=> (
                        <Salon 
                            salonImage={salon.salonImage}
                            salonAddress={salon.salonAddress}
                            salonName={salon.salonName}
                            availableSeats={salon.availableSeats}
                            isOpen={salon.isOpen}
                            key={index}
                            marginLeft={10}
                        />
                    ))}
                </ScrollView>
            </View>
        )
    }
}

export default FeaturedSalons

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
