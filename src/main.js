import 'regenerator/runtime';
import React from 'react-native';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux/native';
import { createFalcorMiddleware, falcorReducer } from 'redux-falcor';
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

const _reducer = combineReducers({
  entities: falcorReducer,
  // Other reducers here
});

const _falcorModel = new falcor.Model({
  source: new HttpDataSource('http://localhost:8088/model.json'),
});

const _finalCreateStore = compose(
  applyMiddleware(createFalcorMiddleware(_falcorModel))
)(createStore);

const _reduxStore = _finalCreateStore(_reducer);

_reduxStore.subscribe(() =>
  console.log(_reduxStore.getState())
);

const AvamarMobile = React.createClass({
  _renderScene: function(route, nav) {
    switch (route.id) {
    case 'menu':
      return <MenuView navigator={nav} />;
    default:
      return <LoginView navigator={nav} />;
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

const app = React.createClass({ // eslint-disable-line react/no-multi-comp
  render() {
    return (
      <Provider {...{ store: _reduxStore }}>
        {() => <AvamarMobile />}
      </Provider>
    );
  },
});

AppRegistry.registerComponent('AvamarMobile', () => app);
