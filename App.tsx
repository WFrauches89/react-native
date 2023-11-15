import React from "react";
import { View, Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "./src/screens/Login"
import Home from "./src/screens/Home"

// import { SafeAreaView } from 'react-native'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import App from './App';
// import App3 from './App3'; 

// // Stack Navigator
const Stacke = createNativeStackNavigator();

export default function Main() {
    return(
        <NavigationContainer>
            <Stacke.Navigator initialRouteName="Login">
                <Stacke.Screen 
                name="Login" 
                component={Login}
                options={{
                    headerShown: false,
                }}
                
                />
                <Stacke.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false,
                }}/>
            </Stacke.Navigator>
        </NavigationContainer>

    )

}

// const Main = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Drawer.Navigator initialRouteName="App">
//           <Drawer.Screen name="App" component={App} />
//           <Drawer.Screen name="App3" component={App3} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// };

// export default Main;

