import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'

const FooterTab = ({color, tab, onPress, icon}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon && <IconButton icon = {icon} size= {24} color= {color} style={styles.iconStyle}/>}
        </TouchableOpacity>
    );
}

export default FooterTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    iconStyle: {
        marginTop: 40,
    },
})
