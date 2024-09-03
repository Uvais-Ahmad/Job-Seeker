import { View, Text , Image} from 'react-native'
import React from 'react'
import styles from './company.style'
import {icons } from '@/constants'

interface CompanyProps {
    companyLogo: string;
    companyName: string;
    jobTitle: string;
    location: string;
}

const Company: React.FC<CompanyProps> = ({companyLogo, companyName, jobTitle, location}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image source={{uri :companyLogo}} style={styles.logoImage} />
            </View>
            <View style={styles.jobTitleBox}>
                <Text style={styles.jobTitle}>{jobTitle}</Text>
            </View>

            <View style={styles.companyInfoBox}>
                <Text style={styles.companyName}>{companyName} /</Text>
                <View>
                    <Image 
                        source={icons.location} 
                        style={styles.locationImage} 
                        resizeMode='contain'
                    />
                </View>
                <Text style={styles.locationName}>{location}</Text>
            </View>
        </View>
    )
}

export default Company