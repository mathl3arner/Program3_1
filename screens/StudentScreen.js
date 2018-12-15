import React from "react";
import { Button, View, StyleSheet, Text, SectionList, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import studentData from '../students';

export default class StudentScreen extends React.Component {
    openHome = () => {
        this.props.navigation.navigate("Main");
        // this.props.navigation.navigate("AddStudentScreen");
    };

    static navigationOptions = {
        title: 'Student Name Here',
    };

    constructor(props) {
        super(props);
        this.state = {
            isloading: true,
        }
    }

    componentDidMount() {
        return fetch('https://randomuser.me/api/?results=5')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isloading: false,
                    dataSource: responseJson.firstname
                }, function () {

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Button title="Press to go to back to Section List" onPress={() => navigate('SectionList')} />
                <SectionList
                    renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                    renderSectionHeader={({ section: { title } }) =>
                        <Text style={{ fontWeight: 'bold' }}>{title}</Text>}
                    sections={[
                        { title: studentData.firstNames, data: [studentData.firstNames, studentData.lastNames] }
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
            </ScrollView>
        );
    }
}

const processStudents = (user) => {
    return {
        name: `${user.name.first} ${user.name.last}`,
        number: user.phone,
        image: user.picture.medium,
    }
}

export const fetchStudents = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=20&nat=us');
        const { results } = await response.json();
        return results.map(processStudents).map(addKeys);
    }
    catch (err) {
        console.log(err);
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