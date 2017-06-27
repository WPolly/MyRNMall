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
    TouchableOpacity,
    Switch
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
                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.titleStyle}>
                            {this.props.title}
                        </Text>

                        {this.renderRightView()}
                    </View>
                </TouchableOpacity>
            )
        },

        renderRightView() {
            if (this.props.isSwitch) {
                return (
                    <Switch value={this.state.isSwitchOn}
                            onValueChange={() => {
                                this.setState({isSwitchOn: !this.state.isSwitchOn})
                            }}/>
                )
            } else {
                return (
                    <View style={styles.rightViewStyle}>
                        <Text style={{marginRight: 5, fontSize: 10, color: 'gray'}}>{this.props.rightDsc}</Text>
                        <Image source={{uri: 'icon_cell_right_arrow'}}
                               style={{width: 7, height: 11}}/>
                    </View>
                )
            }
        }
    }
);

const styles = StyleSheet.create({
        container: {
            height: Platform.OS === 'ios' ? 40 : 42,
            backgroundColor: 'white',
            borderBottomColor: '#dddddd',
            borderBottomWidth: 0.5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },

        titleStyle: {
            color: '#333333',
            paddingLeft: 8,
        },

        rightViewStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 8,
        }
    }
);

module.exports = CommonItem;
