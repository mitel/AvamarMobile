import 'regenerator/runtime';
import React from 'react-native';
import falcor from 'falcor';
import HttpDataSource from 'falcor-http-datasource';
import { LoginView } from './LoginView';
import { MenuView } from './MenuView';

const {
	AppRegistry,
  // StyleSheet,
  Navigator,
} = React;

// const styles = StyleSheet.create({
//   navigationContainer: {
//     flex: 1,
//   },
// });

const falcorModel = new falcor.Model({
  source: new HttpDataSource('http://localhost:8088/model.json'),
});

const AvamarMobile = React.createClass({
  getInitialState: function() {
    return {
      falcor: falcorModel,
    };
  },

  _renderScene: function(route, nav) {
    switch (route.id) {
    case 'menu':
      return <MenuView navigator={nav} falcor={falcorModel}/>;
    default:
      return <LoginView navigator={nav} falcor={falcorModel}/>;
    }
  },

  render: function() {
    // const context = this; // http://blog.getify.com/arrow-this
    return (
      <Navigator
        initialRoute={{name: 'LoginView', component: LoginView}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={this._renderScene}
      />);
  },
});

AppRegistry.registerComponent('AvamarMobile', () => AvamarMobile);
