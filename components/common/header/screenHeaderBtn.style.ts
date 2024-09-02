import { COLORS, SIZES } from '@/constants';
import { StyleSheet, ImageStyle, ViewStyle } from 'react-native';

interface Styles {
    btnContainer: ViewStyle;
}
interface BtnImgProps {
    width: string;
    height: string;
    borderRadius: number;
}

const styles = StyleSheet.create<Styles>({
    btnContainer: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


const btnImg = (dimensions: string) : ImageStyle =>({
    width: dimensions as any,
    height: dimensions as any,
    borderRadius: 10, // Example borderRadius, adjust as needed
});

export { styles, btnImg };
