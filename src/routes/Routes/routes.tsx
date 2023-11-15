// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { Image, Text, StyleSheet } from 'react-native'

// import App from '../../screens/Login';
// import tbar from '../../assets/img/tbar.png'
// import Home from '../../screens/Home';

// const Tab = createBottomTabNavigator();

// export default function Rout() {

//     return (
//         <Text style= {style.text}> ARENA FITNESS - COMPLEXO ACADEMIA
//         <Tab.Navigator
//             screenOptions={{

//                 headerShown: false,
//                 tabBarStyle: { backgroundColor: '#0ca4a4' },
//                 tabBarActiveTintColor: '#ba70f7',
//                 tabBarInactiveTintColor: '#ffffff',


//             }}
//         >

          
//             <Tab.Screen name=" " component={Home} options={{

//                 tabBarIcon: () => (
//                     <Image
                        
//                         resizeMode='contain'
//                         style={{ width: 20 }}
//                         source={tbar}
//                     />
//                 ),

//             }}
            
//             />
            
  
//         </Tab.Navigator>
//             </Text>
//     )
// }


// const style = StyleSheet.create({

//     text: {
//         paddingLeft: 15,
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#fff',
//         paddingTop: 12,
//         paddingBottom: 2,
        
//     }
// });