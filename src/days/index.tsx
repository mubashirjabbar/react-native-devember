import { StyleSheet, View, FlatList } from 'react-native';
import DayListItem from '../components/DayListItem';
// import DayListItem from '@components/core/DayListItem';

const days = [...Array(30)].map((val, index) => index + 1);



export default function HomeScreen() {
console.log("days",days);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },

  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
