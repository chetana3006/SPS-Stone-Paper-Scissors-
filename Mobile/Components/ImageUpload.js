import React,{useState} from 'react';
import { StyleSheet, Text, View,Modal,Alert,KeyboardAvoidingView,Button,TextInput, Image, ToastAndroid} from 'react-native';
// import {TextInput,Button, IconButton} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import axios from 'axios';
import localhost from '../Config';
const ImageUpload = () => {

    const [description,setdescription] = useState("")
    const [Location,setLocation] = useState("")
    const [picture,setPicture] = useState("")
    const [modal,setModal] = useState(false)
    const [enableshift,setenableShift] = useState(false)

    
    const submitData = ()=>{
        console.log(picture);
        console.log({"description":description,"location":Location,"picture":picture});
        axios.post(`http://${localhost}/comp/complaint`,{"description":description,"location":Location,"picture":picture}).then((res)=>{
            ToastAndroid.show('Complaint sent successfully!', ToastAndroid.SHORT);
        }).catch((e)=>{
            alert('Some error occured!');
          })
   
  }


const pickFromGalleryWithPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (status === "granted") {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.5,
        });
  
        if (!result.canceled) {
          const image = result.assets[0]; // Access image from "assets" array
  
          const newFile = {
            uri: image.uri,
            type: `test/${image.uri.split(".").pop()}`, // Use `pop()` instead of indexing
            name: `test.${image.uri.split(".").pop()}`,
          };
  
          handleUpload(newFile);
          setModal(false);
        }
      } catch (error) {
        console.error(error.message); // handle error
      }
    } else {
      Alert.alert("Permission denied for accessing the gallery");
    }
  };
  const pickFromCameraWithPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
  
    if (status === "granted") {
      try {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.5,
        });
        if (!result.canceled) {
            const image = result.assets[0]; // Access image from "assets" array
    
            const newFile = {
              uri: image.uri,
              type: `test/${image.uri.split(".").pop()}`, // Use `pop()` instead of indexing
              name: `test.${image.uri.split(".").pop()}`,
            };
    
            handleUpload(newFile);
            setModal(false);
          }
        } catch (error) {
          console.error(error.message); // handle error
        }
    } else {
      Alert.alert("Permission denied for accessing the camera");
    }
  };
     const handleUpload = (image)=>{
        // alert(image)
          const data = new FormData()
          data.append('file',image)
          data.append('upload_preset','complaint')
          data.append("cloud_name","daqnlvhjm")
  
          fetch("https://api.cloudinary.com/v1_1/daqnlvhjm/image/upload",{
              method:"post",
              body:data
          }).then(res=>res.json()).
          then(data=>{
              setPicture(data.url)
              alert("images loaded uploaded")
              setModal(false)
          }).catch(err=>{
              Alert.alert("error while uploading")
          })
     }
     
    return(
        <View >
{/*     
            <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: picture }}
            /> */}
            <TextInput
                label='Location'
                style={styles.inputStyle}
                value={Location}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                onChangeText={text => setLocation(text)}
                placeholder='Enter the site and block number'
                />
            <TextInput
                label='Description'
                multiline={true}
                numberOfLines={5}
                style={styles.inputStyle}
                value={description}
                onFocus={()=>setenableShift(false)}
                theme={theme}
                onChangeText={text => setdescription(text)}
                placeholder='Enter the text..'
            />
            
            
             <Button 
             style={styles.btn}
              title="Upload Image"
              onPress={() => setModal(true)}>
                    
             </Button>
             
             <Button 
              title="Upload"
              onPress={() => submitData()}>   
             </Button>
             
     
             
             <Modal
             animationType="slide"
             transparent={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             >
              <View style={styles.modalView}>
                  <View style={styles.modalButtonView}>
                        <Button 
                         theme={theme}
                        title='camera'
                         onPress={() =>pickFromCameraWithPermissions()}>
                                
                        </Button>
                        <Button 
                         theme={theme}
                         title=' gallery'
                          onPress={() => pickFromGalleryWithPermissions()}>
                               
                        </Button>
                  </View>
                <Button 
                 title='cancel'
                onPress={() => setModal(false)}>
                        
                </Button>
              </View>
             </Modal>
                           </View>
    )
 };
 const styles=StyleSheet.create({
    root:{
       flex:1,
    },
    inputStyle:{
        margin:"4%",
        borderWidth:2,
        borderColor:"black",
        padding:20,

    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"white"

    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    },btn:{
        backgroundColor:"blue"
    },
    textarea:{
        height:"30%",
        borderWidth:2,
        borderColor:"black",
        // padding:"30%",
        margin:"4%"
    }
})
const theme = {
    colors:{
        primary:"#006aff"
    }
}
 
  
  export default ImageUpload;