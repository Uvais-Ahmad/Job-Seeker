import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {styles, container, jobName, logoContainer, publisher} from './popularjobcard.style'

interface PopularJobCardProps {
    item: any;
    selectedJob: number;
    handleCardPress: (job_id: number) => void;
}


const PopularJobCard : React.FC<PopularJobCardProps> = ({item, selectedJob, handleCardPress}) => {
    return (
        <TouchableOpacity 
            style={container(selectedJob, item)}
            onPress={() => handleCardPress(item.job_id)}
        >
            <TouchableOpacity style={logoContainer(selectedJob, item)}>
                <Image
                    source={{uri: item.employer_logo ?? 'https://png.pngtree.com/png-clipart/20210616/ourmid/pngtree-modern-office-job-vacancy-announcement-illustration-png-image_3475706.jpg'}}
                    style={styles.logoImage}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
            
            <View style={styles.infoContainer}>
                <Text style={jobName(selectedJob, item)} numberOfLines={1}>{item.job_title}</Text>
                <Text style={styles.location}>{item.job_country}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PopularJobCard