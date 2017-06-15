/**
 * Created by Administrator on 2017/6/15.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

var MainScreen = React.createClass({
        render() {
            return (
                <View style={styles.container}>
                    <Text>
                        主要框架
                    </Text>
                </View>
            );
        }
    }
);

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#81ffdf',
    },
    welcome: {
        fontSize:20,
        textAlign:'center',
        margin: 10
    }
});

module.exports = MainScreen;