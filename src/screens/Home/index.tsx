import React from "react";
import { Text, ImageBackground, Image, SafeAreaView, View, TouchableOpacity, Linking  } from "react-native";
import { style } from "./style";
import { DrawerActions, NavigationContainer, useNavigation } from "@react-navigation/native";
import vital from '../../../assets/img/vital-removebg-preview.png'
import peop from '../../../assets/img/peop-removebg-preview.png'
import halter from '../../../assets/img/halter-removebg-preview.png'
import login from '../../../assets/img/login-removebg-preview.png'

const cats = "../../../assets/img/catsGym.png"

//iniciando alteração



const Home = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <>

      <SafeAreaView style={style.container}>
        
          
          {/* <Rout /> */}
          <View style={style.textTitle}>
            <Text style={style.title}> ARENA FITNESS - COMPLEXO ACADEMIA</Text>
            <TouchableOpacity onPress={() =>  navigation.navigate('Login') }>
            <Image source={login} style={style.login} />
            </TouchableOpacity>
          </View>

          <ImageBackground source={require(cats)} style={style.backgroundCats}>
            <TouchableOpacity style={style.button}>
              <Image source={vital} style={style.imgs}/>
              <Text style={style.buttonText}>Avaliação Funcional</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
              <Image source={peop} style={style.imgs}/>
              <Text style={style.buttonText}>Aulas Coletivas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
              <Image source={halter} style={style.imgs}/>
              <Text style={style.buttonText}>Trainning</Text>
            </TouchableOpacity>

            <Text style={style.footer2}>Desenvolvido por: W.F</Text>
          </ImageBackground>

      
      </SafeAreaView >



    </>

  )
}

export default Home;