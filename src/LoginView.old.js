import React from 'react-native';

const {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

export const LoginView = React.createClass({

  propTypes: {
    navigator: React.PropTypes.object,
    falcor: React.PropTypes.object,
  },

  getInitialState: () => {
    return {
      username: '',
      password: '',
    };
  },

  // logs in and then pushes the next page into the navigator
  _onSubmitPressed: async function() {
    const { username, password } = this.state;
    const resp = await this.props.falcor.call(['session', 'login'], [username, password]);
    if (resp.json.authToken) {
      // console.log(resp.json.authToken);
      this.props.navigator.push({ id: 'menu' });
    }
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
