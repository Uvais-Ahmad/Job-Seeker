import React, {useCallback} from 'react'
import { Slot, Stack } from 'expo-router'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    DMRegular: require('@/assets/fonts/DMSans-Regular.ttf'),
    DMMedium: require('@/assets/fonts/DMSans-Medium.ttf'),
    DMBold: require('@/assets/fonts/DMSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <Stack />
    </View>
    
  )
}
export default RootLayout