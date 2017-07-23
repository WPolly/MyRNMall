/**
 * Created by Administrator on 2017/7/16.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const HomeMiddleCell = require('./HomeMiddleCell');
const cellData = require('../../local_data/HomeMiddleSecondBottomData.json');
const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');

const HomeMiddleSecond = React.createClass({

    render() {
        return (
            <View style={{flexDirection: 'row', marginTop: 12}}>
                <View>
                    <HomeMiddleCell
                        title={cellData.data[0].maintitle}
                        subTitle={cellData.data[0].deputytitle}
                        titleColor={cellData.data[0].typeface_color}
                        rightIconUri={this.handleRightIconUrl(cellData.data[0].imageurl)}/>
                    <HomeMiddleCell
                        title={cellData.data[1].maintitle}
                        subTitle={cellData.data[1].deputytitle}
                        titleColor={cellData.data[1].typeface_color}
                        rightIconUri={this.handleRightIconUrl(cellData.data[1].imageurl)}/>
                </View>
                <View>
                    <HomeMiddleCell
                        title={cellData.data[2].maintitle}
                        subTitle={cellData.data[2].deputytitle}
                        titleColor={cellData.data[2].typeface_color}
                        rightIconUri={this.handleRightIconUrl(cellData.data[2].imageurl)}/>
                    <HomeMiddleCell
                        title={cellData.data[3].maintitle}
                        subTitle={cellData.data[3].deputytitle}
                        titleColor={cellData.data[3].typeface_color}
                        rightIconUri={this.handleRightIconUrl(cellData.data[3].imageurl)}/>
                </View>
            </View>
        );
    },

    handleRightIconUrl(url) {
        let result = '';
        if (url.search('w.h') !== -1) {
            result = url.replace('w.h', '100.100');
            console.log(url);
        }
        return result;
    }
});

const styles = StyleSheet.create({
    container: {
        width: width/2 - 1,
        height: 101,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'white',
        marginRight: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'blue',
    },
});

module.exports = HomeMiddleSecond;