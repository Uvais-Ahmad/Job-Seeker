import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import {useRouter} from 'expo-router'
import {COLORS, SIZES} from '@/constants'
import styles from './popularJobs.style'
import PopularJobCard from '@/components/common/cards/popular/popularJobCard'


const PopularJobs = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([1,2,3,4]);
    const [error, setError] = useState(null)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>See All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item?.toString()}
                        renderItem={({item}) => (
                            <PopularJobCard />
                        )}
                        horizontal
                        contentContainerStyle={{columnGap: SIZES.medium}}
                        showsHorizontalScrollIndicator={false}
                    />
                        
                )}
            </View>
        </View>
    )
}

export default PopularJobs