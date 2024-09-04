import { View, Text, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native'
import React from 'react'
import {useRouter, Stack, useLocalSearchParams, router } from 'expo-router'
import { useCallback, useState } from 'react'
import {COLORS, icons, SIZES} from '../../constants'
import  useFetch  from '../../hooks/useFetch'
import ScreenHeaderBtn from '../../components/common/header/screenHeaderBtn'
import Company from '../../components/jobDetails/company/company';
import Tabs  from '../../components/jobDetails/tabs/tabs';
import Specifics from '../../components/jobDetails/specifics/specific'
import About from '../../components/jobDetails/about/About'
import Footer from '../../components/jobDetails/footer/Footer'

const JobDetails = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const tabs = ["About", "Qualifications", "Responsibilities", "Benefits", "Apply"]
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    
    const {data, isLoading, error, refetch} = {data: {
        companyLogo: 'https://pngimg.com/uploads/amazon/amazon_PNG13.png',
        companyName: 'Google',
        jobTitle: 'Software Engineer',
        location: 'Mountain View, CA'
    }, isLoading: false, error: null, refetch: () => {}}
    // useFetch(
    //     'job-details', {
    //         job_id : params.id
    //     }
    // )
    const [refreshing, setRefreshing] = useState(false)
    const handleOnRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, [])

    const displayTabContent = () => {
        switch(selectedTab) {
            case "About":
                return (
                    <About 
                        info={data[0]?.job_description ?? 'No description available'}
                    />
                )
            case "Qualifications":
                return (
                    <Specifics 
                        title='Qualifications'
                        points={data[0]?.job_highlights?.Qualifications ?? ['N/A']}
                    />
                )
            case "Responsibilities":
                return (
                    <Specifics 
                        title='Responsibilities'
                        points={data[0]?.job_highlights?.Responsibilities ?? ['N/A']}
                    />
                )
            case "Benefits":
                return (
                    <Specifics 
                        title='Benefits'
                        points={data[0]?.job_highlights ?? ['N/A']}
                    />
                )
            case "Apply":
                return (
                    <Specifics 
                        title='Apply'
                        points={data[0]?.job_highlights ?? ['N/A']}
                    />
                )
            default:
                return (
                    null
                )
        }
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle: '',
                    headerLeft: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.left}
                            onPress={() => router.back()}
                            dimensions='60%'
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.share}
                            onPress={() => {}}
                            dimensions='60%'
                        />
                    ),
                }}
            >
            </Stack.Screen>

            <>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />}
                >
                    {isLoading ? (
                        <ActivityIndicator size='large' color={COLORS.primary} />
                    ) : error ? (
                        <View>
                            <Text>Something went wrong</Text>
                        </View>
                    ) : (
                        <View style={{padding: SIZES.medium, paddingBottom: 100 }}>
                            {/* <Text>Job Details</Text> */}
                            <Company 
                                companyLogo={data.companyLogo}
                                companyName={data.companyName}
                                jobTitle={data.jobTitle}
                                location={data.location}
                            />
                            <Tabs 
                                tabs={tabs}
                                selectedTab={selectedTab}
                                setSelectedTab={setSelectedTab}
                            />

                            {displayTabContent()}
                        </View>
                    )}
                </ScrollView>
                <Footer 
                    url={data[0]?.job_google_link ?? 'https://www.google.com'}
                />
            </>
        </SafeAreaView>
    )
}

export default JobDetails