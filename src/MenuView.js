import React from 'react-native';
import Button from 'apsl-react-native-button';

import { SidemenuContent } from './SidemenuContent';
import { sideMenuWrapper } from './sideMenuWrapper';

const {
  StyleSheet,
  View,
} = React;

const MenuViewContent = React.createClass({ // eslint-disable-line react/no-multi-comp

  propTypes: {
    navigator: React.PropTypes.object,
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.buttonStyle} textStyle={styles.textStyle}
          onPress={() => {
            console.log('world!');
          }}>
          Hello
        </Button>
        <Button
          style={styles.buttonStyle1} textStyle={styles.textStyle}
          onPress={() => {
            console.log('world!');
          }}>
          Hello
        </Button>
        <Button
          style={styles.buttonStyle2} textStyle={styles.textStyle}
          onPress={() => {
            console.log('world!');
          }}>
          Hello
        </Button>
        <Button
          style={styles.buttonStyle7} textStyle={styles.textStyle6}
          onPress={() => {
            this.props.navigator.replace({ id: 'login' });
          }}>
          Back
        </Button>
        <Button
          isLoading
          style={styles.buttonStyle7} textStyle={styles.textStyle6}
          onPress={() => {
            console.log('world!');
          }}>
          Hello
        </Button>
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
    color: 'white',
  },
  textStyle6: {
    color: '#8e44ad',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
  buttonStyle: {
    borderColor: '#f39c12',
    backgroundColor: '#f1c40f',
  },
  buttonStyle1: {
    borderColor: '#d35400',
    backgroundColor: '#e98b39',
  },
  buttonStyle2: {
    borderColor: '#c0392b',
    backgroundColor: '#e74c3c',
  },
  buttonStyle3: {
    borderColor: '#16a085',
    backgroundColor: '#1abc9c',
  },
  buttonStyle4: {
    borderColor: '#27ae60',
    backgroundColor: '#2ecc71',
  },
  buttonStyle5: {
    borderColor: '#2980b9',
    backgroundColor: '#3498db',
  },
  buttonStyle6: {
    borderColor: '#8e44ad',
    backgroundColor: '#9b59b6',
  },
  buttonStyle7: {
    borderColor: '#8e44ad',
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 3,
  },
});

// exporting the component wrapped with a side-menu drawer menu
export const MenuView = sideMenuWrapper(MenuViewContent, SidemenuContent);

