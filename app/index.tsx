import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View style={styles.root}>
      <Text>Index Uvais!</Text>
      <Link href='/profile' style={styles.link}>Go to Profile</Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  root : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  },
  link : {
    color: "green"
  }
})