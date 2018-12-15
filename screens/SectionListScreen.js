import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

// const TabBarComponent = (props) => (<BottomTabBar {...props}/>);

// const TabScreens = createBottomTabNavigator(
//     {
//         tabBarComponent: props =>
//             <TabBarComponent {...props}
//                 style={{borderTopColor: '#605F60'}}/>,
//     }
// )

export default class SectionListScreen extends React.Component {
    openHome = () => {
        //this.props.navigation.navigate("Main");
        this.props.navigation.navigate('Main')
        //it allows us explicitly navigate to any route in the other navigator
        // this.props.navigation.navigate("AddStudentScreen");
    };

    openStudent = () => {
        this.props.navigation.navigate('StudentScreen')
    }

    static navigationOptions = {
        title: 'SectionList',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            //<View style={styles.container}>
            //        <Text style={styles.text}>You are currently logged out.</Text>
            <ScrollView>
                <Button title="Press to Log Out to Home" onPress={this.openHome} />
                <Text>The button above navigates to the Home Page.</Text>
                <TouchableOpacity>
                    <Button title="Go to a Class Name 1" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 2" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 3" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 4" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 5" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 6" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 7" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 8" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 9" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 10" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 11" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 12" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 13" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 14" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 15" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 16" onPress={this.openStudent}></Button>
                    <Button title="Go to a Class Name 17" onPress={this.openStudent}></Button>
                </TouchableOpacity>
            </ScrollView>
            //    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1
    },
    text: {
        textAlign: "center"
    }
});