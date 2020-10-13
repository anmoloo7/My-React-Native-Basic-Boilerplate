import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { actions } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import look from '../../js/look';

function HomeScreen() {
  const dispatch = useDispatch();
  const authState = useSelector((store) => store.authState);
  return (
    <View style={look.container}>
      <TouchableOpacity onPress={() => dispatch(actions.logout())}>
        <Text>Logout : {authState.user}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;