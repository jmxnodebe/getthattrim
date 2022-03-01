import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'

const {width, height} = Dimensions.get('screen')
const Barber = ({barberImage, barberName, ratings, totalPosts, marginLeft, marginBottom}) => {
    const getStars = ()=> {
        var stars = []
        for(var i = 0; i < ratings; i++) {
            stars.push(<IconButton key={i} size={12} icon='star' />)                    
        }
        return stars
    }
    return (
        <View style={{
            width: width/2.62608696,
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            height: width/1.7,
            borderRadius: 15,
            marginLeft: marginLeft,
            marginBottom: marginBottom,
        }}>
            <Image style={styles.barber_image} source={barberImage}/>
            <View style={styles.barber_info}>
                <View style={styles.barber_info_top}>
                    <Text style={styles.barber_name}>{barberName}</Text>
                    <View style={styles.barber_ratings}>
                        {getStars()}
                    </View>
                </View>
                <View style={styles.barber_info_bottom}>
                    <Text style={styles.barber_total_posts}>{totalPosts} POSTS </Text>
                    <Text style={styles.barber_profile_link}>VIEW PROFILE</Text>
                </View>
            </View>
        </View>
    )
}

export default Barber

const styles = StyleSheet.create({
    // barber_bubble: {
    //     width: width/2.62608696,
    //     backgroundColor: 'white',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     height: width/1.7,
    //     borderRadius: 15,
    // },
    barber_image: {
        width: '100%',
        height: '75%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    barber_info: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    barber_info_top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
    },
    barber_name: {
        fontWeight: '800',
        fontSize: 15
    },
    barber_ratings: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '20%',
        justifyContent: 'space-evenly',
        marginLeft: '13%'
    },
    barber_info_bottom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    barber_total_posts: {
        fontWeight: '600',
        fontSize: 12,
    },
    barber_profile_link: {
        fontWeight: '900',
        fontSize: 12,
        marginLeft: '1%'
    }
})
