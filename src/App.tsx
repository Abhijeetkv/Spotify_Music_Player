import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { setupPlayer, addTracks } from '../musicPlayerService';

function App(): React.JSX.Element {
   const [isPlayerReady, setIsPlayerReady] = useState(false);

   async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTracks();
    }

    setIsPlayerReady(isSetup);
   }

   useEffect(() => {
    setup();
   })

   if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
    }
    
  return (
    <SafeAreaView>
      <StatusBar
      
      />
      <Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
