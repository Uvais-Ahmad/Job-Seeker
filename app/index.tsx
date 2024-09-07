import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React , {useState} from 'react'
import { Link, Stack, useRouter } from 'expo-router'
import { COLORS, icons, images, SIZES  } from '../constants'
import ScreenHeaderBtn from '@/components/common/header/screenHeaderBtn'
import Welcome from '@/components/home/welcome/Welcome'
import PopularJobs from '@/components/home/popular/Popularjobs'
import NearbyJobs from '@/components/home/nearby/Nearbyjobs'

const Index : React.FC = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>('');
  return (
    <SafeAreaView style={styles.root}>
      <Stack.Screen
        options={{
          headerStyle : {
            backgroundColor: COLORS.lightWhite,
          },
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimensions='60%'
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimensions='60%'
            />
          ),
          headerTitle: "",
          headerShadowVisible: false
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollViewView}>
          <Welcome 
            searchText={searchText}
            setSearchText={setSearchText}
            handleClick={() => {
              if(searchText) {
                router.push(`/search/${searchText}` as any)
              }
            }}
          />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView >
      {/* <Link href='/profile' style={styles.link}>Go to Profile</Link> */}
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  root : {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: COLORS.lightWhite
  },
  link : {
    color: "green"
  },
  scrollViewView : {
    flex: 1,
    padding: SIZES.medium
  }
})