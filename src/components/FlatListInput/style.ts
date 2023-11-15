import { StyleSheet, Dimensions, Platform } from "react-native"


const height = Dimensions.get("window")

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0ca4a4',


    },

    // gif: {
    //     width: "100%",
    //     marginTop: 15,
    //     alignSelf: "center",
    //     backgroundColor: "transparent",


    // },
    // backgroundCats: {
    //     width: "100%",
    //     marginTop: 15,
    //     alignSelf: "center"
        
    // },
    // textTitle: {
    //     flexDirection: 'row',
    //     alignItems: 'baseline',
    //     justifyContent: 'space-between',
    //     paddingRight: 15,
    //     paddingLeft: 15,

    // },

    // title: {

    //     marginTop: 45,
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //     color: 'white',
        
    // },
    // tbar: {
        
    //     width: 15,
    //     height: 15,

    // },
    // login: {
        
    //     width: 20,
    //     height: 20,

    // },
    // logo:{
    //     marginTop: 20,
    //     width: 114,
    //     height: 193,
    //     alignSelf: "center",

    // },
    input: {
        marginTop: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(78, 233, 235, 0.4)',
        backgroundColor: "rgba(255, 255, 255, 0.0)", // alterar para transparente
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 7,
        color:'#FFFFFF',
        
    },

    // button: {
    //     flexDirection: 'row',
    //     backgroundColor: 'rgba(12, 164, 164, 0.4)',
    //     padding: 8,
    //     color: 'white',
    //     borderTopWidth: 1,
    //     borderTopColor: 'rgba(78, 233, 235, 0.4)',
        
    // },
    // buttonText: {
    //     paddingTop: 5,
    //     paddingLeft: 30,
    //     color: '#FFF',
    //     fontSize: 17,


    // },
    // imgs: {
    //     width: 30,
    //     height: 30,
    //     paddingLeft: 20,
        
    //     alignItems: 'center'
       
    // },
    // acess:{
    //     flexDirection: 'row',
    // },

    // imgSeta: {
    //     color:'#0ca4a4', 
    //     marginTop: 25,
    //     width: 15,
    //     height: 10,
    //     paddingLeft: 5,
    // },
    // forget:{
    //     color:'#FFF', 
    //     marginTop: 5,
    //     fontSize: 12,
    //     fontWeight: '400',
    //     paddingLeft: 300,
    // },
    // acessText:{
    //     color:'#0ca4a4', 
    //     marginTop: 25,
    //     fontSize: 10,
    //     fontWeight: 'bold',
    //     paddingLeft: 340,
    // },
    inputArea:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    input2:{
        width: '90%',
        marginTop: 17,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(78, 233, 235, 0.4)',
        backgroundColor: "rgba(255, 255, 255, 0.0)", // alterar para transparente
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 7,
        color:'#FFFFFF',
    },

    icon: {
        marginTop: -28.5,
        marginLeft: 366,
        width: '10%',
        alignItems: 'center',
        borderBottomWidth: 0.7,
        borderBottomColor: 'rgba(78, 233, 235, 0.4)',
    },
    
    // footer: {

    //     marginTop:328,
    //     fontStyle: "italic",
    //     fontSize: 15,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     color: 'white',

    // },
    // footer2: {

    //     marginTop:630,
    //     fontStyle: "italic",
    //     fontSize: 15,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     color: 'white',
      

    // }


})