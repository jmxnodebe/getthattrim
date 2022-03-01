import React from 'react'
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import NotificationBubble from '../components/NotificationBubble'

const {width, height} = Dimensions.get('screen')
const Notifications = () => {
    const notifications = [
        {
            caption: 'new post by @rotimiblaise',
            time: '00:11'
        },
        {
            caption: 'new post by @ebywobia',
            time: 'Mon'
        },
        {
            caption: 'appointment with @chariboi booked successfully',
            time: 'Sat'
        },
        {
            caption: 'new post by @klinkutz',
            time: '10/09'
        },
        {
            caption: 'new post by @duke',
            time: '08/09'
        },
        {
            caption: "unfortunately @charlieboi won't be able to make it",
            time: '05/09'
        },
        {
            caption: 'new post by @rotimiblaise',
            time: '00:11'
        },
        {
            caption: 'new post by @ebywobia',
            time: 'Mon'
        },
        {
            caption: 'appointment with @chariboi booked successfully',
            time: 'Sat'
        },
        {
            caption: 'new post by @klinkutz',
            time: '10/09'
        },
        {
            caption: 'new post by @duke',
            time: '08/09'
        },
        {
            caption: "unfortunately @charlieboi won't be able to make it",
            time: '05/09'
        },
    ]
    return (
        <SafeAreaView >
            <View>
                <View
                //  style={styles.notifications_header}
                >
                    <Text style={styles.header_text}>Notifications</Text>
                    <View style={{ borderWidth: 2, width: '85%', marginTop: 5}}/>
                </View>
                <ScrollView 
                    // style={{ width, marginVertical: '5%', }}
                    // contentContainerStyle={{}}
                >
                    {
                        notifications.map((notif, index)=> (
                            <NotificationBubble 
                                notificationText={notif.caption} notificationTime={notif.time}
                                key={index}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Notifications

const styles = StyleSheet.create({
    notifications_header: {
        flexDirection: 'column', width: '33%', 
        alignItems: 'center', justifyContent: 'center', marginTop: '4%'
    },
    header_text: {
        fontWeight: '800', fontSize: 22
    },
    notifications_page: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width, height
    }
})
