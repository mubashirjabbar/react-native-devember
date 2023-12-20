import { Text, View, StyleSheet, Pressable } from 'react-native';

type DayListItemProps = {
  day: number;
  onPress?: () => void;
};

export default function DayListItem({ day, onPress }: DayListItemProps) {
  return (
    <Pressable style={styles.box} onPress={onPress}>
      <Text style={styles.text}>{day}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  },
});
