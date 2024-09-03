import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import {router, useRouter} from 'expo-router'
import {COLORS, SIZES} from '@/constants'
import styles from './nearbyJobs.style'
import NearbyJobCard from '@/components/common/cards/nearby/nearbyJobCard'


const NearbyJobs = () => {
    const {data, isLoading, error} = {
        data: [
            {
                job_id: 1,
                employer_logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
                employer_name: 'Google',
                job_title: 'React Developer',
                job_country: 'United States',
                job_employment_type: 'Full Time',
            },
            {
                job_id: 2,
                employer_logo: 'https://w7.pngwing.com/pngs/106/850/png-transparent-facebook-icon-logo-blue-square-symbol-social-facebook-blue-rectangle-logo-thumbnail.png',
                employer_name: 'Facebook',
                job_title: 'React Developer',
                job_country: 'United States',
                job_employment_type: 'Full Time',
            },
            {
                job_id: 3,
                employer_logo: 'https://w7.pngwing.com/pngs/832/502/png-transparent-amazon-logo-text-brand-amazon-text-service-retail-thumbnail.png',
                employer_name: 'Amazon',
                job_title: 'React Developer',
                job_country: 'United States',
                job_employment_type: 'Full Time',
            },
            {
                job_id: 2,
                employer_logo: 'https://w7.pngwing.com/pngs/106/850/png-transparent-facebook-icon-logo-blue-square-symbol-social-facebook-blue-rectangle-logo-thumbnail.png',
                employer_name: 'Facebook',
                job_title: 'React Developer',
                job_country: 'United States',
                job_employment_type: 'Full Time',
            },
            {
                job_id: 3,
                employer_logo: 'https://w7.pngwing.com/pngs/832/502/png-transparent-amazon-logo-text-brand-amazon-text-service-retail-thumbnail.png',
                employer_name: 'Amazon',
                job_title: 'React Developer',
                job_country: 'United States',
                job_employment_type: 'Full Time',
            },
            {
                job_id: 2,
                employer_logo: 'https://w7.pngwing.com/pngs/106/850/png-transparent-facebook-icon-logo-blue-square-symbol-social-facebook-blue-rectangle-logo-thumbnail.png',
                employer_name: 'Facebook',
                job_title: 'React Developer',
                job_country: 'United States',
                job_employment_type: 'Full Time',
            },
            {
                job_id: 3,
                employer_logo: 'https://w7.pngwing.com/pngs/832/502/png-transparent-amazon-logo-text-brand-amazon-text-service-retail-thumbnail.png',
                employer_name: 'Amazon',
                job_title: 'React Developer',
                job_country: 'United States',
                job_employment_type: 'Full Time',
            },
        ], 
        isLoading: false, error: null};
    // useFetch('search', {
    //     query: 'React Developer',
    //     num_pages: 1,
    // });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nearby Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>See All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : (
                    data.map((item, index) => (
                        <NearbyJobCard
                            item={item}
                            handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
                        />
                    )
                ))}
            </View>
        </View>
    )
}

export default NearbyJobs