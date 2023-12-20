import { View, Text } from 'react-native';
import React from 'react';

const DayDetails = ({ route }) => {
  const { day } = route.params;

  return (
    <View>
      <Text style={{ fontSize: 100 }}>{`Day ${day} Details Screen`}</Text>
    </View>
  );
};

export default DayDetails;
