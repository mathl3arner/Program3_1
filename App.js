import React from 'react';
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import students from "./students";
import LoginScreen from './screens/LoginScreen';
import StudentScreen from './screens/StudentScreen';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddStudentScreen from './screens/AddStudentScreen';
import SectionListScreen from './screens/SectionListScreen';
import { fetchStudents } from './api'

const TabNavigator = createBottomTabNavigator({
  Main: LoginScreen,
  SectionList: SectionListScreen,
  StudentScreen: StudentScreen,
  AddStudentScreen: AddStudentScreen,
});

const AppNavStack = createStackNavigator(
  {
    'LoginScreen': LoginScreen,
    'SectionListScreen': SectionListScreen,
    'ClassListScreen': StudentScreen,
    'AddStudentScreen': AddStudentScreen,
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

AppNavStack.navigationOptions = {
  headerTintColor: '#a41034',
  headerStyle: {
    backgroundColor: 'lightskyblue',
  },
}

// const MainNavigator = createBottomTabNavigator(
//   {
//     Main: LoginScreen,
//     SectionList: SectionListScreen,
//     StudentScreen: StudentScreen,
//     AddStudentScreen: AddStudentScreen,
//   },
// );

//Navigator composition. MainNavigator is a stack navigator and added into
//AppNavigator as one route
const AppNavigator = createStackNavigator(
  {
    Main: TabNavigator,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login'
  }
  // {
  //   Main: { screen: LoginScreen },
  //   SectionList: { screen: SectionListScreen },
  //   StudentScreen: { screen: StudentScreen },
  //   AddStudentScreen: { screen: AddStudentScreen },
  // },
  // {
  //   initialRouteName: 'Main'
  // }
);
// AppNavigator;

export default class App extends React.Component {
  state = {
    students: null,
  }

  componentDidMount() {
    // fetch('https://randomuser.me/api/?results=20&nat=us')
    //   .then(response => response.json())
    //  // .then(result => this.setState({students: result.results}))
    //   .then(({ results }) => {
    //     console.log(results);
    //    // this.setState({ students: results});
    //     const processStudents = (user) => {
    //       return {
    //         name: `${user.name.first} ${user.name.last}`,
    //         number: user.phone,
    //       }
    //     }
    //      const addKeys = (val, key) => ({ key: key, ...val })
    //      this.setState({ students: results.map(processStudents).map(addKeys) })
    //   })
    this.getStudents();
  }

  getStudents = async () => {
    const results = await fetchStudents();
    this.setState({ students: results });
  }

  addStudent = (newStudent) => {
    this.setState(
      {
        students: [...this.state.students, newStudent],
      });
  }

  render() {
    return <AppNavigator screenProps={{ students: this.state.students, onSubmit: this.addStudent }} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});