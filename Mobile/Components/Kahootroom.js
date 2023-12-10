import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import Context from './Context';

const Kahootroom = () => {
    const {user,setuser}=useContext(Context);
    const kahootid=user.kahootcode;
  return (
    <View>
        <Text>{kahootid}</Text>
      <Text>Kahootroom</Text>
    </View>
  )
}

export default Kahootroom