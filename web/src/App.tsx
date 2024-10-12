import './App.css';
import App from './App_copy.tsx';

import React from 'react';
import {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

function WebApp() {
  return (
    <div className="App">
      <App/>
      
    </div>
  );
}

export default WebApp;
