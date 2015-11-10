import React from 'react-native';
import Button from 'apsl-react-native-button';

const {
  View,
  Text,
  StyleSheet,
} = React;

export const SidemenuContent = React.createClass({
  propTypes: {
    closeDrawer: React.PropTypes.func,
    navigator: React.PropTypes.object,
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Create SP Resources</Text>
        <Button
          // isLoading
          style={styles.buttonStyle7}
          textStyle={styles.textStyle6}
          onPress={() => {
            this.props.navigator.replace({ id: 'resourcePool' });
            // this.props.closeDrawer(); // don't do that after navigating away!!
          }}>
          Resource Pool
        </Button>
        <Button
          // isLoading
          style={styles.buttonStyle7}
          textStyle={styles.textStyle6}
          onPress={() => {
            this.props.closeDrawer();
          }}>
          Data Protection Res.
        </Button>
        <Button
          // isLoading
          style={styles.buttonStyle7}
          textStyle={styles.textStyle6}
          onPress={() => {
            this.props.closeDrawer();
          }}>
          Tenant
        </Button>
        <Button
          // isLoading
          style={styles.buttonStyle7}
          textStyle={styles.textStyle6}
          onPress={() => {
            this.props.closeDrawer();
          }}>
          Res. Share
        </Button>
        <Button
          // isLoading
          style={styles.buttonStyle7}
          textStyle={styles.textStyle6}
          onPress={() => {
            this.props.closeDrawer();
          }}>
          Folder
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
    color: 'blue',
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
  buttonStyle7: {
    borderColor: '#8e44ad',
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 3,
  },
});
