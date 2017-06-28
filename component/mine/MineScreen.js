/**
 * Created by Administrator on 2017/6/15.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');

const MineScreen = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userProfileViewStyle}>
                    <Image source={{uri: 'dog'}} style={styles.avatarStyle}/>
                    <Text style={{color: 'white', fontSize: 18}}>美团外卖</Text>
                    <Image source={{uri: 'avatar_vip'}} style={{width: 20, height: 20}}/>
                    <Image source={{uri: 'icon_cell_right_arrow'}}
                           style={{width: 8, height: 12, position: 'absolute', right: 10}}/>
                </View>

                <View style={styles.userDataView}>
                </View>
            </View>
        );
    }
})

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: '#fd4b1f',
        justifyContent:'space-between',
    },
    userProfileViewStyle: {
        flexDirection: 'row',
        marginTop:20,
        marginLeft:10,
        alignItems: 'center',
    },
    avatarStyle: {
        width: 75,
        height: 75,
        borderRadius: 37,
        borderWidth: 1,
        borderColor: '#feffd7',
        marginRight: 4,
    },
    userDataView: {
        width: width,
        height: 42,
        position: 'absolute',
        bottom: 0,
        backgroundColor:'rgba(255,255,255,0.4)',
    }
});

module.exports = MineScreen;