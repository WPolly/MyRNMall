/**
 * Created by Administrator on 2017/6/15.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');
const CommonItemMine = require('./CommonItemMine');

const MineScreen = React.createClass({

    render() {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <View style={styles.userProfileViewStyle}>
                        <Image source={{uri: 'dog'}} style={styles.avatarStyle}/>
                        <Text style={{color: 'white', fontSize: 18, marginRight: 2}}>Polly</Text>
                        <Image source={{uri: 'avatar_vip'}} style={{width: 20, height: 20}}/>
                        <Image source={{uri: 'icon_cell_right_arrow'}}
                               style={{width: 8, height: 12, position: 'absolute', right: 10}}/>
                    </View>

                    <View style={styles.userDataView}>
                        {this.renderUserDataView()}
                    </View>
                </View>

                <View style={{marginBottom:10}}>
                    <CommonItemMine iconUri="draft" title="我的订单" shortDes="查看全部订单"/>
                    <View style={styles.myOrderContainer}>
                        {this.renderMyOrder()}
                    </View>
                </View>

                <View style={{marginBottom:10}}>
                    <CommonItemMine iconUri="pay" title="我的钱包" shortDes="账户余额:¥100"/>
                    <CommonItemMine iconUri="card" title="优惠券" shortDes="0"/>
                </View>

                <View style={{marginBottom:10}}>
                <CommonItemMine iconUri="collect" title="积分商城"/>
                </View>

                <View style={{marginBottom:10}}>
                    <CommonItemMine iconUri="like" title="今日推荐"/>
                </View>

                <View style={{marginBottom:10}}>
                    <CommonItemMine iconUri="new_friend" title="我要合作" shortDes="轻松开店，招财进宝"/>
                </View>
            </View>
        );
    },

    renderUserDataView() {
        let itemArr = [];
        let data = [{num: '100', title: '优惠券'},
            {num: '12', title: '评价'},
            {num: '50', title: '收藏'}];

        for (let i = 0; i < data.length; i++) {
            itemArr.push(
                <TouchableOpacity key={i} onPress={() => {
                    alert(data[i].title)
                }}>
                    <View style={styles.userDataCellView}>
                        <Text style={{color: 'white', fontSize: 12}}>{data[i].num}</Text>
                        <Text style={{color: 'white', fontSize: 12}}>{data[i].title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return itemArr;
    },

    renderMyOrder() {
        let orderViewArr = [];
        let data = [{iconUri: 'order1', title: '待付款'},
            {iconUri: 'order2', title: '待使用'},
            {iconUri: 'order3', title: '待评价'},
            {iconUri: 'order4', title: '退款/售后'}];

        for (let i = 0; i < data.length; i++) {
            orderViewArr.push(
                <TouchableOpacity key={i}>
                    <View style={{width: width / 4, alignItems: 'center'}}>
                        <Image source={{uri: data[i].iconUri}}
                               style={{width: 33, height: 22, marginBottom: 3}}/>
                        <Text style={{fontSize: 11}}>
                            {data[i].title}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return orderViewArr;
    },
});

const styles = StyleSheet.create({
    headerContainer: {
        height: 150,
        backgroundColor: '#fd4b1f',
        justifyContent: 'space-between',
    },
    userProfileViewStyle: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        alignItems: 'center',
    },
    avatarStyle: {
        width: 75,
        height: 75,
        borderRadius: 37,
        borderWidth: 1,
        borderColor: '#feffd7',
        marginRight: 5,
    },
    userDataView: {
        width: width,
        height: 42,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0.4)',
        flexDirection: 'row',
    },
    userDataCellView: {
        width: width / 3 + 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
        marginBottom: 3,
        borderRightWidth: 1,
        borderRightColor: 'white',
    },
    myOrderContainer: {
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#dddddd',
    },
});

module.exports = MineScreen;