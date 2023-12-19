import { Text, View, StyleSheet, Pressable } from 'react-native';

type DayListItem = {
  day: number;
};

export default function DayListItem({ day }: DayListItem) {
  console.log(day);
  
  
  return (
    // <View style={styles.mainContainer}>
       <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>

    // </View>
   
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:"grey",
    flex: 1,
  },

    box: {
      backgroundColor: '#F9EDE3',
      flex: 1,
      aspectRatio: 1,
  
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#9b4521',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#9b4521',
      fontSize: 75,
      fontFamily: 'AmaticBold',
    }

});
