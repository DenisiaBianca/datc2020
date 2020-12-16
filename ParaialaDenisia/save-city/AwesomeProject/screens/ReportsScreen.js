import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';

const ReportsScreen = ({navigation}) =>  {
    return (
      <View style={styles.container}>
        <Text>Reports Screen</Text>
        <Button 
        title="Click here !" 
        onPress={() => alert("Button Clicked")}
        />
      </View>
    );
};

export default ReportsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})