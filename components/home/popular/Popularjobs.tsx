import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import {useRouter} from 'expo-router'
import {COLORS, SIZES} from '@/constants'
import styles from './popularJobs.style'
import PopularJobCard from '@/components/common/cards/popular/PopularJobCard'
import useFetch from '@/hooks/useFetch'


const PopularJobs = () => {
    const router = useRouter();
    const {data, isLoading, error} = 
    // {
    //     data: [{
    //         job_id: 1,
    //         employer_logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    //         employer_name: 'Google',
    //         job_title: 'React Developer',
    //         location: 'Greater Noida, India',
    //         job_country: 'India',
    //     }, {
    //         job_id: 2,
    //         employer_logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    //         employer_name: 'Google',
    //         job_title: 'Backend Developer',
    //         location: 'Greater Noida, India',
    //         job_country: 'India',
    //     }, {
    //         job_id: 3,
    //         employer_logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    //         employer_name: 'Google',
    //         job_title: 'SDE-1',
    //         location: 'Greater Noida, India',
    //         job_country: 'India',
    //     },{
    //         job_id: 4,
    //         employer_logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    //         employer_name: 'Google',
    //         job_title: 'Full Stack Developer',
    //         location: 'Greater Noida, India',
    //         job_country: 'India',
    //     }], 
    //     isLoading: false, error: null};
    useFetch('GET','search', {
        query: 'React Developer',
        num_pages: 1,
    });

    const [selectedJob, setSelectedJob] = useState<number>(1);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Jobs</Text>
                <TouchableOpacity onPress={() => router.push('/search/React Developer')}>
                    <Text style={styles.headerBtn}>See All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.job_id?.toString()}
                        renderItem={({item}) => (
                            <PopularJobCard 
                                selectedJob={selectedJob}
                                item={item}
                                handleCardPress={(job_id: number) => {
                                    router.push(`/job-details/${job_id}` as any);
                                    setSelectedJob(job_id);
                                }}
                            />
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