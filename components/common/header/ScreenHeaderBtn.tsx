import { View, Text, TouchableOpacity, Image, ImageStyle } from 'react-native'
import React from 'react'
import { btnImg,styles } from './screenHeaderBtn.style'
interface ScreenHeaderBtnProps {
    iconUrl: any,
    dimensions: string,
    handlePress?: () => void
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({iconUrl, dimensions, handlePress}) => {

    const dynamicImageStyle = btnImg(dimensions);
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image 
                source={iconUrl}
                resizeMode='cover'
                style={dynamicImageStyle}
            />
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn