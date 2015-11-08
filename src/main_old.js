/* eslint-disable */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native

 npm install
 npm start - wait 1-2 minutes

 build/run from xcode
 */
'use strict'
require('regenerator/runtime');
var React = require('react-native');
var falcor = require('falcor');
var HttpDataSource = require ('falcor-http-datasource');

var {
  AppRegistry,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} = React;

var model = new falcor.Model({
  cache: {
    values: [
      {
        name: 'works!',
      },
      {
        name: 'gaga',
      },
    ],
    other: 'caca',
  },
});

let model2 = new falcor.Model({
  source: new HttpDataSource('http://localhost:8088/model.json')
});

let val;

// async function test() {
//   let json = await model.get('values[0].name', 'other');
//   console.log(json);
// }

// test();

// model.get('values[0].name', 'other').then( (json) => {
//   console.log(json);
// });

// let val2 = 'nimic';
// model2.getValue('greeting').then( (value) => {
//   console.log(value);
//   val2 = value;
// });

// let val3 = [];
// model2.get('version[0..1]').then( (json) => {
//   console.log(json);
//   // val3 = value;
// });

// model2.get('version[0]', 'version[1]').then( (json) => {
//   console.log(json);
//   // val3 = value;
// }, error => {
//   console.log(error);
// });

var AvamarMobile = React.createClass({
  getInitialState: function() {
    return {
      parm: 'start',
      authToken: '',
      serviceProvider: '',
      resourcePool: '',
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
            <Text>local test</Text>
        </TouchableHighlight> 
        <TouchableHighlight onPress={this._handleSession} style={styles.button}>
            <Text>login (default credentials)</Text>
        </TouchableHighlight> 
        <TouchableHighlight onPress={this._handleCreateRP} style={styles.button}>
            <Text>create rp</Text>
        </TouchableHighlight>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.welcome}>
          Messages: { this.state.parm }
        </Text>
        <Text style={styles.instructions}>
          authToken: { this.state.authToken }
        </Text>
        <Text style={styles.instructions}>
          serviceProvider: { this.state.serviceProvider }
        </Text>
        <Text style={styles.instructions}>
          resourcePool: { this.state.resourcePool }
        </Text>
      </View>
    );
  }, 

  _onPressButton: async function(event) {
    let value = await model.getValue('values[0].name'); 
    this.setState({...this.state, parm: value}); 
  },

  // deprecated - folosesc call ca sa pot trimite credentiale ca parametru
  _handleLogin: function(event) {
    let context = this;
    // fac un call catre authToken path dar care va seta authToken plus serviceProvider
    model2.get('authToken', 'serviceProvider').then( resp => {
      context.setState({...context.state, authToken: resp.json.authToken,
        serviceProvider: resp.json.serviceProvider});
    });
  },

  _handleSession: async function(event) {
    try { 
      let resp = await model2.call(['session', 'login'], ['admin', 'password']);
      this.setState({...this.state, authToken: resp.json.authToken,
        serviceProvider: resp.json.serviceProvider, 
        parm: 'success'
      });
    } catch (err) {
      this.setState({...this.state, parm: 'error'});
      console.log(err);
    }
  },

  _handleCreateRP: async function(event) {
    try {
      let sp = await model2.getValue('serviceProvider');
      let tok = await model2.getValue('authToken');
      await model2.call(['resourcePool', 'create'], [tok, sp, 'res-pool-1']);
      let rp = await model2.getValue('resourcePool');
      this.setState({...this.state, resourcePool: rp});
    } catch (err) {
      console.log(err);
    }
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    padding: 10,
      borderRadius: 5,
      backgroundColor: 'yellow',
  },
});

AppRegistry.registerComponent('AvamarMobile', () => AvamarMobile);
