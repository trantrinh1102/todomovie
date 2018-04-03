import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { List, ListItem, ListView, Card } from 'react-native-elements';

const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];

renderRow = (rowData, sectionID) => (
  <ListItem

    key={sectionID}
    title={rowData.name}
    subtitle={rowData.subtitle}
  />
)

class TopList extends Component {
  constructor(props) {
    super(props);
    this.state = { data }
  }
  render () {
    return (
      <View style={styles.container}>
        {/* <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={list}
          />
        </List> */}
        {/* <Text>aaa</Text>
         */}
         <FlatList
          data={this.state.data}
          renderItem={({ item: rowData }) => {
            return (
              <Card
                flexDirection='row'
                title={null}
                // image={{ url: "http://via.placeholder.com/160x160" }}
                containerStyle={styles.infoContainer}
                // wrapperStyle={styles.listContainer}
              >
                <Image style={styles.image} source={{uri: "http://via.placeholder.com/160x160" }}>
                  <Text style={{ marginBottom: 10 }}>
                    helloaaa
                  </Text>
                </Image>
              </Card>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

// How should I proceed, If I have to show full width and auto height of images inside a list (flatlist/sectionlist/listview) like the Instagram app?

const styles = StyleSheet.create({
  infoContainer: {
    // backgroundColor: 'blue',
    // width: 400,
    flex: 1,
    padding: 0,
    margin: 0,
    alignItems: 'stretch'
  },
  listContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height:19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  }
});

export default TopList;


