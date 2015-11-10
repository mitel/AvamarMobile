import React from 'react-native';

const {
  View,
  Text,
  StyleSheet,
} = React;

export const SidemenuContent = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle6}>test</Text>
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
});
