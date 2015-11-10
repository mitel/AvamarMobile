import React from 'react-native';
import { connect } from 'react-redux/native';
import { callPath, retrieveValue } from 'redux-falcor';

import { SidemenuContent } from './SidemenuContent';
import { sideMenuWrapper } from './sideMenuWrapper';

const {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

function mapStateToProps(state) {
  return {
    falcorModel: state.entities,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    falcorCall: (...args) => dispatch(callPath(...args)),
    falcorRetrieveValue: (...args) => dispatch(retrieveValue(...args)),
  };
}

const ResourcePoolFormView = React.createClass({

  propTypes: {
    navigator: React.PropTypes.object, // prop coming from AvamarMobile component
    falcorModel: React.PropTypes.object, // prop coming via mapProps/connect
    falcorCall: React.PropTypes.func, // prop coming via mapDispatch/connect
    falcorRetrieveValue: React.PropTypes.func, // prop coming via mapDispatch/connect
  },

  // local state outside of redux
  getInitialState: () => {
    return {
      name: '',
      message: '',
    };
  },

  // logs in and then pushes the next page into the navigator
  _onSubmitPressed: async function() {
    this.setState({...this.state, message: ''});
    const { name } = this.state;

    try {
      const authToken = await this.props.falcorRetrieveValue(['authToken']);
      const serviceProviderId = await this.props.falcorRetrieveValue(['serviceProvider']);
      const resp = await this.props.falcorCall(['resourcePool', 'create'], [authToken, serviceProviderId, name]);
      // console.log(resp);
      if (('json' in resp) && ('resourcePool' in resp.json)) {
        this.setState({...this.state,
          message: 'Resource Pool created, you may now create a Data Protection Resource',
          name: '',
        });
      } else {
        this.setState({...this.state, message: 'Error occured'});
      }
    } catch (err) {
      console.log(err);
      this.setState({...this.state, message: 'error..'});
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Create a new Resource Pool
        </Text>
        <View>
          <TextInput
            placeholder="name"
            onChange={(event) => this.setState({name: event.nativeEvent.text})}
            style={styles.formInput}
            value={this.state.username} />
          <TouchableHighlight onPress={this._onSubmitPressed} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.title}>
          {this.state.message}
        </Text>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "stretch",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  formInput: {
    height: 36,
    padding: 10,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5,
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 8,
    color: "#555555",
  },
  button: {
    height: 36,
    flex: 1,
    backgroundColor: "#555555",
    borderColor: "#555555",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    alignSelf: "center",
  },
});

const ResourcePoolComponent = connect(mapStateToProps, mapDispatchToProps)(ResourcePoolFormView);
export const ResourcePoolForm = sideMenuWrapper(ResourcePoolComponent, SidemenuContent);
