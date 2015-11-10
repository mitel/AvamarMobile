import React from 'react-native';
import { connect } from 'react-redux/native';
import { callPath } from 'redux-falcor';

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
  };
}

const LoginViewContent = React.createClass({

  propTypes: {
    navigator: React.PropTypes.object, // prop coming from AvamarMobile component
    falcorModel: React.PropTypes.object, // prop coming via redux-connect
    falcorCall: React.PropTypes.func, // prop coming via redux-connect
  },

  // local state outside of redux
  getInitialState: () => {
    return {
      username: '',
      password: '',
      message: '',
    };
  },

  // logs in and then pushes the next page into the navigator
  _onSubmitPressed: async function() {
    this.setState({...this.state, message: ''});
    const { username, password } = this.state;

    // testing, delete this line and uncomment below
    this.props.navigator.replace({ id: 'menu' });

    // try {
    //   // equivallent to falcor.model.call(...)
    //   const resp = await this.props.falcorCall(['session', 'login'], [username, password]);
    //   if ('json.authToken' in resp) { // test if resp object has json.authToken property
    //     this.props.navigator.push({ id: 'menu' });
    //   } else {
    //     this.setState({...this.state, message: 'no authtoken received'});
    //   }
    // } catch (err) {
    //   console.log(err);
    //   this.setState({...this.state, message: 'error..'});
    // }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Sign In
        </Text>
        <View>
          <TextInput
            placeholder="admin"
            onChange={(event) => this.setState({username: event.nativeEvent.text})}
            style={styles.formInput}
            value={this.state.username} />
          <TextInput
            placeholder="password"
            secureTextEntry
            onChange={(event) => this.setState({password: event.nativeEvent.text})}
            style={styles.formInput}
            value={this.state.password} />
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

export const LoginView = connect(mapStateToProps, mapDispatchToProps)(LoginViewContent);
