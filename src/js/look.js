import { StyleSheet } from 'react-native';

const Styles= StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal:30,
        height:"100%",
        width:"100%"
    },
    formContainer: {
        alignItems: "center",
        paddingVertical:30,
        width:"100%"
    },
    text: {
        color: "green"
    },
    textInput: {
        borderWidth: 2,
        borderColor: "green",
        width:"100%"
    },
    textInputError: {
        color:"red",
        width:"100%"
    },
    button:{
        backgroundColor:"green",
        paddingHorizontal:30,
        paddingVertical:15
    },
    buttonText:{
        color:"white"
    }
});

export default Styles;