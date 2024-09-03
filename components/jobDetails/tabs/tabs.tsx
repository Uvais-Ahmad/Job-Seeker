import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles, btn, btnText } from './tabs.style';
import { SIZES } from '@/constants';

interface TabsProps {
    tabs: string[];
    selectedTab: string;
    setSelectedTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({tabs, selectedTab, setSelectedTab}) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={tabs}
                renderItem={({item}) => (
                    <TabButton 
                        name={item}
                        selectedTab={selectedTab}
                        onHandleSearchType={setSelectedTab}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                contentContainerStyle={{columnGap: SIZES.small / 2}}
            />
        </View>
    )
}

interface TabButtonProps {
    name: string;
    selectedTab: string;
    onHandleSearchType: (tab: string) => void;
}
const TabButton: React.FC<TabButtonProps> = ({ name, selectedTab, onHandleSearchType }) => {
    return (
        <TouchableOpacity 
            style={btn(name, selectedTab)}
            onPress={() => onHandleSearchType(name)}
        >
            <Text style={btnText(name, selectedTab)}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Tabs