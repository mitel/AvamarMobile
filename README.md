# AvamarMobile
Mobile app for testing an API proxy powered by Netflix falcor

Uses react-native and falcor to consume REST resources proxied by falcor-router.
The code for the api-proxy here: https://github.com/mitel/api-proxy

Bundled with webpack.

http://recordit.co/44j786nwlL

##Getting Started

Install Node.js - check the NVM project for that: https://github.com/creationix/nvm

You need to also run an Avamar Server with the REST API package installed, plus the API-proxy at https://github.com/mitel/api-proxy.

Quick start for testing the app in the iOS simulator on Mac:
- `npm install`
- `npm start`
- open Apple Xcode and run/build

This react-native app uses `react-native-webpack-server`, more detailed instructions at: https://github.com/mjohnston/react-native-webpack-server.