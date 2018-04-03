import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';

class Settings extends Component {
  onBackHome = () => {
    this.props.navigation.navigate('Feed');
  }
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
            button onPress={this.onBackHome}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
