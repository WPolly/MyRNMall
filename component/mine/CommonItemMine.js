/**
 * Created by Administrator on 2017/6/29.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

const CommonItemMine = React.createClass({
        getDefaultProps() {
            return {
                iconUri: '',
                title: '',
                shortDes: '',
            }
        },

        getInitialState() {
            return {

            }
        },

        render() {
            return (
                <TouchableOpacity>
                    <View style={styles.container}>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Image source={{uri: this.props.iconUri}}
                                   style={{width: 26, height: 26, borderRadius: 13, marginRight: 5}}/>
                            <Text style={{color: '#333333', fontSize: 14}}>
                                {this.props.title}
                            </Text>
                        </View>

                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Text style={{color: 'gray', fontSize: 11, marginRight: 5}}>
                                {this.props.shortDes}
                            </Text>
                            <Image source={{uri: 'icon_cell_right_arrow'}}
                                   style={{width: 8, height: 12}}/>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
    }
);

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 8,
        paddingRight: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dddddd',
    }
});

module.exports = CommonItemMine;