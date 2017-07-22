/**
 * Created by xiaoshan on 2017/7/19.
 * 22:38
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');

const HomeMiddleCell = React.createClass({

    getDefaultProps() {
        return {
            title: '',
            subTitle: '',
            rightIconUri: '',
            titleColor: '',
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <View style={{marginLeft: 15}}>
                    <Text style={{color: this.props.titleColor}}>{this.props.title}</Text>
                    <Text style={{fontSize:11}}>{this.props.subTitle}</Text>
                </View>
                <Image source={{uri: this.props.rightIconUri}} style={{width: 60, height: 30}}/>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        width: width/2,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'blue',
    },
});

module.exports = HomeMiddleCell;