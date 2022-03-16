import React from 'react';
import { Text, View , StyleSheet} from 'react-native';

export default function Task(props) {
  return(
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item : {
    marginVertical: 15
  },
  itemText: {
    width: '100%',
    fontSize: 20
  },
});