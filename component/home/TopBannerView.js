/**
 * Created by Administrator on 2017/6/25.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');
const TopBannerListView = require('./TopBannerListView');
const data = require('../../local_data/TopMenu.json');

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
                        {this.renderPager()}
                    </ScrollView>
                    <View style={styles.dotsContainerStyle}>
                        {this.renderIndicators()}
                    </View>
                </View>
            );
        },

        renderPager() {
            let listArr = data.data;
            let pagers = [];
            for (let i=0; i<listArr.length; i++) {
                pagers.push(
                    <TopBannerListView key={i} dataArr={listArr[i]}/>
                );
            }
            return pagers;
        },

        renderIndicators() {
            let indicators = [];
            for (let i = 0; i < 2; i++) {
                indicators.push(
                    <Text key={i}
                          style={{
                              fontSize: 20,
                              fontWeight: 'bold',
                              color: this.state.activePage === i ? 'orange' : 'gray',
                              marginRight:5
                          }}>
                        &bull;
                    </Text>
                )
            }
            return indicators;
        },

        refreshIndicators(e) {
            let offset = e.nativeEvent.contentOffset.x;
            let pageIndex = offset / width;
            this.setState({activePage: pageIndex});
        }
    }
);

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 120,
        backgroundColor: 'white'
    },

    dotsContainerStyle: {
        backgroundColor: 'white',
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

module.exports = ToBannerView;