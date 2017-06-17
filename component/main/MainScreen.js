/**
 * Created by Administrator on 2017/6/15.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";

var HomeScreen = require('../home/HomeScreen');
var ShopScreen = require('../shop/ShopScreen');
var MineScreen = require('../mine/MineScreen');
var MoreScreen = require('../more/MoreScreen');

var MainScreen = React.createClass({

        getInitialState() {
            return {
                selectedTab: 'home'
            }
        },

        render() {
            return (
                <TabNavigator>
                    <TabNavigatorItem
                        title={"首页"}
                        renderIcon={() => <Image source={{uri: 'icon_tabbar_homepage'}}
                                                 style={styles.bottomIconStyle}/> }
                        renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}}
                                                         style={styles.bottomIconStyle}/>}
                        onPress={() => this.setState({selectedTab:'home'})}
                        selected={this.state.selectedTab === 'home'}>
                        <HomeScreen/>
                    </TabNavigatorItem>

                    <TabNavigatorItem
                        title={"商城"}
                        renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}}
                                                 style={styles.bottomIconStyle}/> }
                        renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_merchant_selected'}}
                                                         style={styles.bottomIconStyle}/>}
                        onPress={() => this.setState({selectedTab:'shop'})}
                        selected={this.state.selectedTab === 'shop'}>
                        <ShopScreen/>
                    </TabNavigatorItem>

                    <TabNavigatorItem
                        title={"我的"}
                        renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}}
                                                 style={styles.bottomIconStyle}/> }
                        renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_mine_selected'}}
                                                         style={styles.bottomIconStyle}/>}
                        onPress={() => this.setState({selectedTab:'mine'})}
                        selected={this.state.selectedTab === 'mine'}>
                        <MineScreen/>
                    </TabNavigatorItem>

                    <TabNavigatorItem
                        title={"更多"}
                        renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}}
                                                 style={styles.bottomIconStyle}/> }
                        renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_misc_selected'}}
                                                         style={styles.bottomIconStyle}/>}
                        onPress={() => this.setState({selectedTab:'more'})}
                        selected={this.state.selectedTab === 'more'}>
                        <MoreScreen/>
                    </TabNavigatorItem>
                </TabNavigator>
            );
        }
    }
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14ff1a',
    },
    bottomIconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    }
});

module.exports = MainScreen;