import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "@/constants";

const styles = StyleSheet.create({
    logoImage: {
        width: "70%",
        height: "70%",
    },
    companyName: {
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
        color: "#B3AEC6",
        marginTop: SIZES.small / 1.5,
    },
    infoContainer: {
        marginTop: SIZES.large,
    },
    infoWrapper: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    location: {
        fontSize: SIZES.medium - 2,
        fontFamily: FONT.regular,
        color: "#B3AEC6",
    },
});

interface ItemProps {
    job_id: number;
}

const publisher = (selectedJob : number, item : ItemProps): TextStyle => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
})

const jobName = (selectedJob : number, item: ItemProps) : TextStyle => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
})

const logoContainer = (selectedJob: number, item: ItemProps) : ViewStyle=> ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
})

const container = (selectedJob : number, item : ItemProps): ViewStyle => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.gray,
})

export {styles, publisher, jobName, logoContainer, container};
