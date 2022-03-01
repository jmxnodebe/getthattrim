import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NotificationBubble = ({notificationText, notificationTime}) => {
    return (
        <View style={styles.notification_bubble}>
            <Text style={styles.notification_text}>{notificationText}</Text>
            <Text style={styles.notification_time}>{notificationTime}</Text>
        </View>
    )
}

export default NotificationBubble

const styles = StyleSheet.create({
    notification_bubble: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        backgroundColor: '#136FB5',
        marginBottom: '3%',
        height: '16%',
        width: '92%',
        borderRadius: 15,
        alignSelf: 'center'
    },
    notification_text: {
        fontSize: 18,
        fontWeight: '600',
        width: '70%'
    },
    notification_time: {
        fontSize: 18,
        fontWeight: '800'
    }
})
