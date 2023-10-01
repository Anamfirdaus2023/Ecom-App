import { Image, StyleSheet,  View } from 'react-native';
import { TextInput,Text, Button } from 'react-native-paper';

export default function Login({ navigation }) {
    const goToRegistration = () => {
        navigation.navigate('Registration');
      };
    return (
      <View style={styles.container}>
          <View style={{width:"100%",display:"flex",justifyContent:"center",flexDirection:"row",height:300}}>
       <Image source={require("../assets/logo2.jpeg")} style={{width:200,height:300,marginTop:50}}/>
       </View>
      <Text style={{textAlign:"center",marginTop:20,marginBottom:20,fontSize:30,color:"orange"}}>Login</Text>
     
       <TextInput style={styles.Inputs}
        label="Email"
      />
       <TextInput style={styles.Inputs}
        label="Password"
     
      />
      
        <Button style={{margin:10,borderRadius:10,height:50,padding:4}}  mode="contained" onPress={() => console.log('Pressed')}>
      Login
    </Button>
    <Text style={{marginLeft:20,marginTop:20}} onPress={goToRegistration}>Don't have an account? Registration</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
   width:"100%",
   flex:1,
   display:"flex",
   flexDirection:"column",
   justifyContent:"center",
   padding:50,
   backgroundColor:"white"
    },
  Inputs:{
    margin:10
  
  }
  });