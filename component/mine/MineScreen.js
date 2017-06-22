/**
 * Created by Administrator on 2017/6/15.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

var MineScreen = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    哈哈哈
                </Text>
            </View>
        );
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'blue',
    },
});

module.exports = MineScreen;