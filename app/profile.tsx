import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.root}>
            <Text>Profile</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    root : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
    },
})