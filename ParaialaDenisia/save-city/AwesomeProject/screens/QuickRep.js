import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const QuickRep = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default QuickRep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
