import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import haircutImg2 from '../assets/haircutImg2.jpg'
import haircutImg3 from '../assets/haircutImg3.jpg'
import haircutImg4 from '../assets/haircutImg4.jpg'
import haircutImg5 from '../assets/haircutImg5.jpg'
import haircutImg6 from '../assets/haircutImg6.jpg'
import Post from './Post'

const Moodboard = () => {
    const posts = [
        {
            image: haircutImg2,
            username: '@rotimiblaise',
            caption: "It's in the detail",
            isLiked: true
        },
        {
            image: haircutImg3,
            username: '@ebywobia',
            caption: "I think I did a great job here??",
            isLiked: false
        },
        {
            image: haircutImg4,
            username: '@charlieboi',
            caption: "Always keep customers satisfied",
            isLiked: true
        },
        {
            image: haircutImg5,
            username: '@duke14',
            caption: "Never mess up the beard",
            isLiked: false
        },
        {
            image: haircutImg6,
            username: '@rotimiblaise',
            caption: "It's the smile for me",
            isLiked: false
        },
    ]
    return (
        <View style={styles.moodboard}>
            <View style={styles.moodboard_header}>
                <View style={{width: '12%'}}></View>
                <View style={styles.header_holder}>
                    <Text style={styles.header_text}>MOODBOARD</Text>
                    <View style={{ borderWidth: 2, width: '85%', marginTop: 5}}/>
                </View>
                <IconButton icon='refresh' size={22}/>
            </View>
            <View style={styles.moodboard_posts}>
                {
                    posts.map((post, index)=> (
                        <Post 
                            barberUsername={post.username} postImage={post.image}
                            postCaption={post.caption} isLiked={post.isLiked}
                            key={index}
                        />
                    ))
                }
            </View>
        </View>
    )
}

export default Moodboard

const styles = StyleSheet.create({
    moodboard: {
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    },
    moodboard_header: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'
    },
    header_holder: {
        display: 'flex', flexDirection: 'column', width: '33%', alignItems: 'center', justifyContent: 'center'
    },
    header_text: {
        fontWeight: '800', fontSize: 22
    },
    moodboard_posts: {
        marginTop: '5%',
        padding: 8
    }
})
