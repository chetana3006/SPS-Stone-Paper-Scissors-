import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Context from './Context';
import axios from 'axios';

const Kahootroom = () => {
    const {user,setuser}=useContext(Context);
    const kahootid=user.kahootcode;
    useEffect(()=>{
      axios.post("http://localhost:8000/site/getAllMessages",{
        "roomId":kahootid
      }).then((res)=>{
        console.log(res.data);
      }).catch((e)=>{
        console.log(e);
      })
    },[])
  return (
    <View>
        <Text>{kahootid}</Text>
      <Text>Kahootroom</Text>
    </View>
  )
}

export default Kahootroom