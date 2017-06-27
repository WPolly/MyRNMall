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

const CommonItem = require('./CommonItemMore');

const MoreScreen = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                {this.renderToolbar()}
                <ScrollView>
                    <View style={styles.viewMargin}>
                        <CommonItem title="扫一扫"/>
                    </View>

                    <View style={styles.viewMargin}>
                        <CommonItem title="省流量模式" isSwitch="true"/>
                        <CommonItem title="消息提醒"/>
                        <CommonItem title="邀请好友"/>
                        <CommonItem title="清空缓存" rightDsc="1.94M"/>
                    </View>

                    <View style={styles.viewMargin}>
                        <CommonItem title="意见反馈"/>
                        <CommonItem title="问卷调查"/>
                        <CommonItem title="支付帮助"/>
                        <CommonItem title="网络诊断"/>
                        <CommonItem title="关于美团"/>
                        <CommonItem title="我要应聘"/>
                    </View>

                    <View style={styles.viewMargin}>
                        <CommonItem title="精品应用"/>
                    </View>
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
    },

    viewMargin: {
        marginTop: 10,
    }
});

module.exports = MoreScreen;