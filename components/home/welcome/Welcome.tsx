import { View, Text, TouchableOpacity,
  TextInput, Image, FlatList
} from 'react-native'
import React, {useState} from 'react'
import {useRouter} from 'expo-router'
import {styles, tab, tabText} from './welcom.style';
import { icons, SIZES } from '@/constants';

interface WelcomeProps {
  searchText: string;
  setSearchText: (text: string) => void;
  handleClick: () => void;
}

const Welcome : React.FC<WelcomeProps> = ({searchText, setSearchText, handleClick}) => {
  const router = useRouter();
  const jobTypes = ["Full-Time", "Part-Time", "Remote", "Freelance", "Internship"];
  const [activeJobType, setActiveJobType] = useState("Full-Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Uvais Ahmad!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({item, index}) => (
            <TouchableOpacity 
              style={tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}` as any);
              }}
            >
              <Text style={tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{columnGap: SIZES.small}}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Welcome