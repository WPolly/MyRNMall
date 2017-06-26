/**
 * Created by Administrator on 2017/6/26.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';

const CommonItem = React.createClass({

        getDefaultProps() {
            return {
                title: '',
                isSwitch: false,
                rightDsc: ''
            }
        },

        getInitialState() {
            return {
                isSwitchOn: false
            }
        },

        render() {
            return (
                <View style={styles.container}>
                    <Text>
                        {this.props.title}
                    </Text>
                </View>
            )
        },
    }
);

const styles = StyleSheet.create({
        container: {
            height:Platform.OS === 'ios' ? 40: 30,
            backgroundColor:'white',
            borderBottomColor:'#dddddd',
            borderBottomWidth: 0.5,
            flexDirection: 'row',
            alignItems: 'center'
        },

    }
);

module.exports = CommonItem;
