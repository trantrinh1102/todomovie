
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import TopList from './TopList';

export default () => {
  return <ScrollableTabView
    style={{marginTop: 20, }}
    scrollWithoutAnimation={true}
    tabBarBackgroundColor='#3d3d3d'
    tabBarActiveTextColor='#ffffff'
    tabBarInactiveTextColor='#f1f2f6'
    tabBarUnderlineStyle={{ backgroundColor: '#f53b57'}}
    // activeTabStyle={{ backgroundColor: 'f53b57' }}
    initialPage={0}
    renderTabBar={()=><DefaultTabBar style={styles.container} />}
  >
    <TopList tabLabel='TOP LIST' />
    <Text tabLabel='GENRE'></Text>
    <Text tabLabel='NOW PLAYING'></Text>
    <Text tabLabel='UPCOMING'></Text>
  </ScrollableTabView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#808080',
  },
  tabLabel: {
    color: '#000000',
  }
})


{/* <ScrollableTabView contentProps={{bounces: true, keyboardShouldPersistTaps: true}}>
<ReactPage tabLabel="React" />
<FlowPage tabLabel="Flow" />
<JestPage tabLabel="Jest" />
</ScrollableTabView>/ */}
