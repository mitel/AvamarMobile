import React from 'react-native';
import Drawer from 'react-native-drawer';

/*
  A higher-order component is just a function that takes an existing component
  and returns another component that wraps it.
  usage:
    export sideMenuWrapper from this file
    const App_after = sideMenuWrapper(App_before) where you want to use it
    <App_after /> in JSX

  https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775
  https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750

  this is a HOC that wrapps an existing component by adding a side menu drawer
  may be used to wrap any view with a drawer having a custom sidemenu content
*/

const sidebarHOC = (MainContent, SidemenuContent) => React.createClass({

  propTypes: {
    navigator: React.PropTypes.object,
  },

  render() {
    return (
      <Drawer ref="drawer"
              content={<SidemenuContent closeDrawer={() => {this.refs.drawer.close();}}/>}
              openDrawerOffset={90}
              type="displace"
              // acceptTap
              side="left">
        <MainContent {...this.props}/>
      </Drawer>
    );
  },

});

// this HoC is going to wrap my main app component
// at the same time the HoC itself may be wrapped using the connect/redux-react as it is a component
// 'interested' in the application state (as i keep the SideMenu state as part of the app state)
export const sideMenuWrapper = (MainContent, SidemenuContent) => sidebarHOC(MainContent, SidemenuContent);
