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
const cellData = require('../../local_data/HomeMiddleFirstData.json');
const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');

const HomeMiddleFirst = React.createClass({

    render() {
        return (
            <View style={{flexDirection: 'row', marginTop: 12}}>
                <View style={styles.container}>
                    <Image source={{uri: cellData.dataLeft[0].img1}} style={{width: 80, height: 20}}/>
                    <Image source={{uri: cellData.dataLeft[0].img2}} style={{width: 60, height: 30, margin: 3}}/>
                    <Text style={{fontSize:12, color: 'gray'}}>{cellData.dataLeft[0].title}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 10, color: '#4DC9F0'}}>{cellData.dataLeft[0].price}</Text>
                        <Text style={{fontSize: 10, color: '#FB675E', backgroundColor: '#FFCF2F'}}>{cellData.dataLeft[0].sale}</Text>
                    </View>
                </View>
                <View>
                    <HomeMiddleCell
                        title={cellData.dataRight[0].title}
                        subTitle={cellData.dataRight[0].subTitle}
                        titleColor={cellData.dataRight[0].titleColor}
                        rightIconUri={cellData.dataRight[0].rightImage}/>
                    <HomeMiddleCell
                        title={cellData.dataRight[1].title}
                        subTitle={cellData.dataRight[1].subTitle}
                        titleColor={cellData.dataRight[1].titleColor}
                        rightIconUri={cellData.dataRight[1].rightImage}/>
                </View>
            </View>
        );
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

module.exports = HomeMiddleFirst;