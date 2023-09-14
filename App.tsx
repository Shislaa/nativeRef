import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App(): JSX.Element {
  const [Item, setItems] = useState([
    {  item: 'Item 1' },
    {  item: 'Item 2' },
    {  item: 'Item 3' },
    {  item: 'Item 4' },
    {  item: 'Item 5' },
    {  item: 'Item 6' },
    {  item: 'Item 7' },
    {  item: 'Item 8' },
    {  item: 'Item 9' }
  ]);

  const [DATA, setData] = useState ([
    {
      title: 'Title 1',
      data : ['Item 1-1', 'Item 1-2']
    }
  ]);
  // const items = () => {
  //   return Item.map((object) => {
  //     return (
  //       <View style={styles.item} key={object.key}>
  //         <Text style={styles.text}>{object.item}</Text>
  //       </View>

  //     );
  //   });
  // }

  // const itemsWithForEach = () => {
  //   return Item.map((element, index) => {
  //     return (
  //       <View>
  //         <Text>{Item[index].item}</Text>
  //       </View>

  //     )
  //   })
  // }
  // console.log(items())
  // console.log(itemsWithForEach())
  // console.log(typeof(styles))

  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = () => {
    const newdata = DATA.length + 1;
    setIsRefreshing(true);
    setData([...DATA, { title : `Title ${newdata}`, data:[`Item ${newdata}-1`, `Item ${newdata}-2`]}])
    setIsRefreshing(false);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={DATA}
        renderItem={({ item }) =>(
          <View style = {styles.item}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.title}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
          refreshing = {isRefreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
          />
        } 
      />

      {/* <FlatList
        data= {Item}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.item}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
          refreshing = {isRefreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
          />
        }
      /> */}

      {/* <ScrollView 
      refreshControl={
        <RefreshControl
        refreshing = {isRefreshing}
        onRefresh={onRefresh}
        />
      }>
        {items()}
      </ScrollView> */}
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  title: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 70
  },
  item :{
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },

  text: {
    color: 'black',
    fontSize: 30,
  },
  safeAreaStyle: {
    backgroundColor: '#ffffff'
  },
  button: {
    width: 400,
    heigth: 60
  }
});

export default App;
