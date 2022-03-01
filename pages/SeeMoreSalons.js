import React from 'react'
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import backgroundImage from '../assets/backgroundImage.png'
import Salon from '../components/Salon'
import TopNav from '../components/TopNav'
import salon1 from '../assets/salon1.png'
import salon2 from '../assets/salon2.png'
import salon3 from '../assets/salon3.png'

const {width, height} = Dimensions.get('screen')
const SeeMoreSalons = () => {
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
        },
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
        },
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
        },
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
        },
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
        },
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
    return (
        <SafeAreaView style={styles.see_more_salons}>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backImage}>
                <View style={{marginTop: '8%'}}>
                    <TopNav />
                    <Text style={styles.info}>
                        There are currently 15 registered salons near you.
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
                    {
                        salons.map((salon, index)=> (
                            <Salon 
                                salonImage={salon.salonImage}
                                salonAddress={salon.salonAddress}
                                salonName={salon.salonName}
                                availableSeats={salon.availableSeats}
                                isOpen={salon.isOpen}
                                key={index}
                                marginBottom= {20}
                            />
                        ))
                    }
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SeeMoreSalons

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
