import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function BankHeader() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.headerText}> Banco Sujeito </Text>
                <Icon style={styles.barsStyle} name="pencil" onClick/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        paddingVertical: 25,
        backgroundColor: '#3498db'
    },

    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        textAlign: 'center'
    },

    headerText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        flex: 2.4,
        textAlign: 'center'
    },

    barsStyle: {
        fontSize: 20,
        flex: 0.2,
        color: '#fff',
        textAlign: 'center'
    }
})

