import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flex: _______________,
        flexDirection: _______________,
        justifyContent: _______________,
        _______________: 'center',
        _______________: 'whitesmoke',
        _______________: 30,
    },
    child: {
        width: _______________,
        height: _______________,
        justifyContent: _______________,
        alignItems: _______________,
    },
});

const Exercise4 = () => {
    return (
        <View>
            <View style={[{backgroundColor: 'skyblue'}]}>
                <Text>Square 1</Text>
            </View>
            <View style={[{backgroundColor: 'mediumaquamarine'}]}>
                <Text>Square 2</Text>
            </View>
            <View style={[{backgroundColor: 'crimson'}]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;
