/**
 * Created by Administrator on 2017/6/15.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

var CommonItem = require('./CommonItemMore');

const MoreScreen = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                {this.renderToolbar()}
                <ScrollView>
                    <CommonItem title="扫一扫"/>
                </ScrollView>
            </View>
        );
    },

    renderToolbar() {
        return (
            <View style={styles.toolBarContainer}>
                <Text style={styles.toolbarTitleStyle}>
                    更多
                </Text>
                <TouchableOpacity onPress={()=>alert('setting')}
                                  style={styles.rightSettingView}>
                    <Image source={{uri:'icon_mine_setting'}}
                           style={styles.toolbarSettingIconStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex:1
    },

    toolBarContainer: {
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    toolbarTitleStyle: {
        color: 'white',
        fontSize: 16,
    },

    toolbarSettingIconStyle: {
        width:Platform.OS === 'ios' ? 28: 24,
        height:Platform.OS === 'ios' ? 28: 24,
    },

    rightSettingView: {
        position: 'absolute',
        right: 8,
    }
});

module.exports = MoreScreen;