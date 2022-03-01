import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'

const {width, height} = Dimensions.get('screen')
const Post = ({postImage, barberUsername, postCaption, isLiked}) => {
    return (
        <View style={styles.post_bubble}>
            <Image source={postImage} style={styles.post_image}/>
            <View style={styles.post_info}>
                <View style={styles.post_info_top}>
                    <Text style={styles.barber_username}>{barberUsername}</Text>
                    <IconButton icon={isLiked? 'heart':'heart-outline'} size={20} color='#136FB5'/>
                </View>
                <Text style={styles.post_caption}>{postCaption}</Text>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    post_bubble: {
        display: 'flex',
        flexDirection: 'column',
        width: width/1.114285714,
        height: width/0.9512195122,
        marginBottom: '5%',
        borderRadius: 20,
        backgroundColor: 'white'
    },
    post_image: {
        width: '100%',
        height: '80%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    post_info: {
        padding: 8,
        
    },
    post_info_top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    barber_username: {
        fontSize: 20,
        fontWeight: '700'
    },
    post_caption: {
        fontWeight: '500'
    }
})
