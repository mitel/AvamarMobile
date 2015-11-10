import React from 'react-native';
import Drawer from 'react-native-drawer';
import { MenuViewContent } from './MenuViewContent';
import { SidebarMenu } from './SidebarMenu';

export const MenuView = React.createClass({ // eslint-disable-line react/no-multi-comp
  propTypes: {
    navigator: React.PropTypes.object,
  },

  closeControlPanel: function() {
    this.refs.drawer.close();
  },
  openControlPanel: function() {
    this.refs.drawer.open();
  },
  render: function() {
    return (
      <Drawer
        ref="drawer"
        content={<SidebarMenu />}
        openDrawerOffset={90}
        type="displace"
        side="left"
        acceptTap
        >
        <MenuViewContent {...this.props}/>
      </Drawer>
    );
  },
});