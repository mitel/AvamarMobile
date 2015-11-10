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
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle6}>test</Text>
        <Button
          // isLoading
          style={styles.buttonStyle7}
          textStyle={styles.textStyle6}
          onPress={() => {
            this.props.closeDrawer(); // de vazut cum modific asta, am nevoie de o referinta la drawer din menu content
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
