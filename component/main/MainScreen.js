/**
 * Created by Administrator on 2017/6/15.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";

const HomeScreen = require('../home/HomeScreen');
const ShopScreen = require('../shop/ShopScreen');
const MineScreen = require('../mine/MineScreen');
const MoreScreen = require('../more/MoreScreen');

var MainScreen = React.createClass({
        getInitialState() {
            return {
                selectedTab: 'home'
            }
        },

        render() {
            return (
                <TabNavigator>
                    {this.renderNavigatorTab('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected',
                        'home', <HomeScreen/>)}
                    {this.renderNavigatorTab('商城', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected',
                        'shop', <ShopScreen/>)}
                    {this.renderNavigatorTab('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected',
                        'mine', <MineScreen/>)}
                    {this.renderNavigatorTab('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected',
                        'more', <MoreScreen/>)}
                </TabNavigator>
            );
        },

        renderNavigatorTab(title, iconNormal, iconSelected, selectedTab, component) {
            return (
                <TabNavigatorItem
                    title={title}
                    renderIcon={() => <Image source={{uri: iconNormal}}
                                             style={styles.bottomIconStyle}/> }
                    renderSelectedIcon={() => <Image source={{uri: iconSelected}}
                                                     style={styles.bottomIconStyle}/>}
                    onPress={() => this.setState({selectedTab: selectedTab})}
                    selected={this.state.selectedTab === selectedTab}>
                    {component}
                </TabNavigatorItem>
            )
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