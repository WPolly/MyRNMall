/**
 * Created by Administrator on 2017/6/25.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    Image
} from 'react-native';

const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');

const ToBannerView = React.createClass({

        getInitialState() {
            return {
                activePage: 0
            }
        },

        render() {
            return (
                <View>
                    <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled={true}
                                onMomentumScrollEnd={this.refreshIndicators}>
                        <View style={{width: width, height: 120, backgroundColor: 'red'}}/>
                        <View style={{width: width, height: 120, backgroundColor: 'green'}}/>
                    </ScrollView>
                    <View style={styles.dotsContainerStyle}>
                        {this.renderIndicators()}
                    </View>
                </View>
            );
        },

        renderIndicators() {
            let indicators = [];
            for (let i = 0; i < 2; i++) {
                indicators.push(
                    <Text key={i}
                          style={{
                              fontSize: 20,
                              fontWeight: 'bold',
                              color: this.state.activePage === i ? 'orange' : 'gray'
                          }}>
                        &bull;
                    </Text>
                )
            }
            return indicators;
        },

        refreshIndicators(e) {
            let offset = e.nativeEvent.contentOffset.x;
            let pageIndex = offset/width;
            this.setState({activePage:pageIndex});
        }
    }
);

const styles = StyleSheet.create({
    container: {},

    dotsContainerStyle: {
        backgroundColor: 'yellow',
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

module.exports = ToBannerView;