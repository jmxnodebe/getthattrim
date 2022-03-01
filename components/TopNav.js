import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton, Searchbar } from 'react-native-paper';

const TopNav = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.topNav}>
            <Searchbar
                placeholder="Enter salon or barber name"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{flex: 0.94, borderRadius: 40, borderColor: 'black', borderWidth: 2, marginLeft: '2%'}}
                iconColor='black'
            />
            <IconButton icon='account-outline' size={30} style={{borderColor: 'black', borderRadius: 100, borderWidth: 2}}/>
        </View>
    )
}

export default TopNav

const styles = StyleSheet.create({
    topNav: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10
    }
})
