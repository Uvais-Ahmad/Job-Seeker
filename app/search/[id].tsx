import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'

import NearbyJobCard from '@/components/common/cards/nearby/nearbyJobCard'
import ScreenHeaderBtn from '@/components/common/header/screenHeaderBtn'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'
import useFetch from '@/hooks/useFetch'

const JobSearch = () => {
    const rapidApiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY;
    const params = useLocalSearchParams();
    const router = useRouter()
    const [searchResult, setSearchResult] = useState([{
        job_id: "",
        job_title: "",
        company_name: "",
        company_logo: "",
        location: "",
        salary: "",
        job_type: "",
        job_description: "",
        job_requirements: "",
        job_responsibilities: "",
        job_posted_date: "",
        job_deadline_date: "",
        job_link: "",
    }]);
    const [searchLoader, setSearchLoader] = useState<boolean>(false);
    const [searchError, setSearchError] = useState<any>(null);
    const [page, setPage] = useState<number>(1);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([]);

        try {
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    'x-rapidapi-key': rapidApiKey,
                    'x-rapidapi-host': "jsearch.p.rapidapi.com",
                },
                params: {
                    query: params.id,
                    page: page.toString(),
                },
            };

            const response = await axios.request(options);
            setSearchResult(response.data.data);
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction: string) : void => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }

    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimensions='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />

            <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <NearbyJobCard
                        item={item}
                        handleNavigate={() => router.push(`/job-details/${item?.job_id}` as any)}
                    />
                )}
                keyExtractor={(item) => item.job_id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{params.id}</Text>
                            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : searchError && (
                                <SafeAreaView style={styles.errorMessageBox}>
                                    <Text style={styles.errorMessageText}>Oops, You have reached API Request Limit</Text>
                                </SafeAreaView>
                            )}
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    !searchError && <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default JobSearch