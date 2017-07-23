/**
 * Created by Administrator on 2017/6/15.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform
} from 'react-native';

const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');
const TopBannerView = require("./TopBannerView");
const HomeMiddleFirst = require('./HomeMiddleFirst');
const HomeMiddleSecond = require('./HomeMiddleSecond');

const HomeScreen = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                {/*首页搜索栏*/}
                {this.renderSearchBar()}
                <TopBannerView/>
                <HomeMiddleFirst/>
                <HomeMiddleSecond/>
            </View>
        );
    },

    renderSearchBar() {
        return(
                <View style={styles.searchBarStyle}>
                    <TouchableOpacity onPress={()=>alert('广州')}>
                        <Text style={styles.textAreaStyle}>广州</Text>
                    </TouchableOpacity>

                    <TextInput placeholder='输入商家, 品类, 商圈'
                               style={styles.searchInputStyle}/>

                    <TouchableOpacity onPress={()=>alert('消息')}>
                        <Image source={{uri:'icon_homepage_message'}}
                               style={styles.searchBarRightIconStyle}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>alert('扫描')}>
                        <Image source={{uri:'icon_homepage_scan'}}
                               style={styles.searchBarRightIconStyle}/>
                    </TouchableOpacity>
                </View>
            );
    }
});

const styles = StyleSheet.create({
    searchBarStyle: {
        height: Platform.OS === 'ios' ? 64 : 44,
        width: width,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    searchInputStyle: {
        flexDirection: 'row',
        width: width*0.7,
        backgroundColor:'white',
        marginTop: 7,
        marginBottom: 7,
        borderRadius:13,
    },
    textAreaStyle: {
        color:'white',
    },
    searchBarRightIconStyle: {
        width: 24,
        height: 24,
    },
});

module.exports = HomeScreen;