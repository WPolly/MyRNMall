/**
 * Created by Administrator on 2017/7/16.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity,
} from 'react-native';

const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');


const TopBannerListView = React.createClass({
    getDefaultProps() {
        return {
            dataArr: []
        }
    },

    getInitialState() {
        let ds = new ListView.DataSource({rowHasChanged: (row1, row2)=> row1 !== row2});

        return {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    },

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
                      contentContainerStyle={styles.contentViewStyle}/>
        )
    },

    renderRow(cellData) {
        return (
        <TouchableOpacity onPress={()=>alert(cellData.title)}>
            <View style={styles.rowCellStyle}>
                <Image source={{uri: cellData.image}} style={{width:50, height:50}}/>
                <Text style={{fontSize:12}}>{cellData.title}</Text>
            </View>
        </TouchableOpacity>
        )
    }
});

const styles = StyleSheet.create({
    contentViewStyle: {
        width: width,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    rowCellStyle: {
        width: 70,
        height: 70,
        backgroundColor: 'white',
        marginLeft:(width-(70*5))/6,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

module.exports = TopBannerListView;