import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' ,
        backgroundColor:'#f8f8f8'
    },
    button: {
      marginTop:10,
      borderRadius:10,
      width:100,
      height:25,
      backgroundColor:'#F28123'
    },
    buttonText: {
      fontWeight:'bold',
      textAlign:'center',
      marginTop:2.5,
      color:'#f8f8f8'
    },
    input: { 
      borderColor: '#38726C', 
      borderWidth: 1.5,
      width:300, 
      marginTop:15 
    },
    inputS: { 
      borderColor: '#38726C', 
      borderWidth: 1.5,
      width:300, 
      marginTop:15,
      height:175
    },
    img: {
      width:80,
      height:100,
    },
    text: {
      color:'#563F1B',
      fontSize:16
    },
    bg: {
      flex: 1,
      resizeMode: "stretch",
      justifyContent: "center",
      opacity:20
    }
});

export default styles