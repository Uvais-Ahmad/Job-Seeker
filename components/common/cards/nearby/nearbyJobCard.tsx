import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './nearbyJobCard.style'

interface NearbyJobCardProps {
    item: any;
    handleNavigate: () => void;
}


const NearbyJobCard : React.FC<NearbyJobCardProps> = ({item, handleNavigate}) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={handleNavigate}
        >
            <TouchableOpacity style={styles.logoContainer}>
                <Image
                    source={{uri: item.employer_logo ?? 'https://png.pngtree.com/png-clipart/20210616/ourmid/pngtree-modern-office-job-vacancy-announcement-illustration-png-image_3475706.jpg'}}
                    style={styles.logImage}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            
            <View style={styles.textContainer}>
                <Text style={styles.jobName} numberOfLines={1}>{item.job_title}</Text>
                <Text style={styles.jobType}>{item.job_employment_type}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default NearbyJobCard