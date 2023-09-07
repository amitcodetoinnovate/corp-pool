import React from 'react'
import { View, Text } from 'react-native'
import styles from './welcome.style'
import { useRouter } from 'expo-router'

const Welcome = ({ userName }) => {
  const route = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello {userName}</Text>
        <Text style={styles.welcomeMessage}>Let's find a carpool for you?</Text>
      </View>
    </View>
  )
}

export default Welcome