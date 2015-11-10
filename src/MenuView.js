import React from 'react-native';
import Button from 'apsl-react-native-button';

import { SidemenuContent } from './SidemenuContent';
import { sideMenuWrapper } from './sideMenuWrapper';

const {
  StyleSheet,
  View,
  Text,
} = React;

const MenuViewContent = React.createClass({ // eslint-disable-line react/no-multi-comp

  propTypes: {
    navigator: React.PropTypes.object,
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Swipe the menu on the left to create some stuff ;)</Text>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  textStyle: {
    color: '#8e44ad',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
});

// exporting the component wrapped with a side-menu drawer menu
export const MenuView = sideMenuWrapper(MenuViewContent, SidemenuContent);

