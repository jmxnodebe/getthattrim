import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'

const {width, height} = Dimensions.get('screen')
const Salon = ({salonImage, salonName, isOpen, salonAddress, availableSeats, marginLeft, marginBottom}) => {
    return (
        <View style={{
            width: width * 0.9, backgroundColor: 'white',
            display: 'flex', flexDirection: 'column', marginLeft: marginLeft,
            height: width*0.75, borderRadius: 20, paddingBottom: 10, marginBottom: marginBottom
        }}>
            <Image source={salonImage} style={styles.image}/>
            <View style={styles.salon_info}>
                <View style={styles.salon_info_flexer}>
                    <Text style={styles.salon_info_name}>
                        {salonName}
                    </Text>
                    <Text style={styles.salon_info_isOpen}>
                        {isOpen}
                    </Text>
                </View>
                <Text style={styles.salon_info_address}>
                    {salonAddress}
                </Text>
                <View style={styles.salon_info_extra}>
                    <Text style={styles.seat}>{availableSeats}</Text>
                    <IconButton icon='seat-outline' size={18}/>
                    <Text style={{fontWeight: '700', fontSize: 17}}>VIEW SALON PROFILE</Text>
                </View>
            </View>
        </View>
    )
}

export default Salon

const styles = StyleSheet.create({
    salon_bubble: {
        
    },
    image: {
        width: '100%',
        height: '75%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    salon_info: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    salon_info_flexer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 25
    },
    salon_info_name: {
        fontWeight: '800',
        fontSize: 20
    },
    salon_info_isOpen: {
        fontSize: 18,
        fontWeight: '800',
        color: 'lightgreen'
    },
    salon_info_address: {
        fontSize: 17.5,
        fontWeight: '600',
    },
    salon_info_extra: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '60%',
        marginLeft: '5%'
    },
    seat: {
        fontWeight: '600'
    }
})
