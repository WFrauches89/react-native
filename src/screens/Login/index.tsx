import React, { Component, useState } from "react";
import { Text, ImageBackground, Image, TextInput, SafeAreaView, View, FlatList, TouchableOpacity, Linking  } from "react-native";
import { style } from "./style";
import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'
import tbar from '../../../assets/img/tbar.png'
import seta from '../../../assets/img/seta-removebg-preview.png'
import cad from '../../../assets/img/cad.png'
import FlatListInput  from "../../components/FlatListInput/index";

const gifBack = "../../../assets/gif/aca.gif"
const logo = "../../../assets/img/logo_mu_negativa.png"




const Login = ({ navigation }) => {

  // const [hidePass, setHidePass] = useState(true);

  return (
    <>

      <SafeAreaView style={style.container}>
        

          {/* <Rout /> */}
          <View style={style.textTitle}>
            <Text style={style.title}> ARENA FITNESS - COMPLEXO ACADEMIA</Text>
            <TouchableOpacity onPress={() =>  navigation.navigate('Home')}>
              {/* alterar a ação */}
              <Image source={tbar} style={style.tbar} />
            </TouchableOpacity>
          </View>

          <ImageBackground source={require(gifBack)} style={style.gif}>
            <Image source={require(logo)} style={style.logo} />
            <FlatListInput/>
            <>
{/*            
            <TextInput style={style.input} //procurar propriedades para senha e demais propriedades da TextInput - verificar mais itens!
              placeholder="Email ou CPF"
              placeholderTextColor="#FFF"
              keyboardType="default"
              value={input}
              onChangeText={(input) => setInput(input)}
            /> */}

            {/* <View style={style.inputArea}>
              <TextInput style={style.input2} //procurar propriedades para senha e demais propriedades da TextInput - verificar mais itens!
                placeholder="Senha"
                placeholderTextColor="#FFF"
                keyboardType='default'
                value={senha}
                onChangeText={(pass) => setSenha(pass)}
                secureTextEntry={hidePass}
              />
              <TouchableOpacity style={style.icon} onPress={() => setHidePass(!hidePass)}>
                {hidePass ?
                  <Ionicons name="eye" color="#FFF" size={25} />
                  :
                  <Ionicons name="eye-off" color="#FFF" size={25} />
                }
              </TouchableOpacity> 
            </View> */}
             </>
            <>
              <TouchableOpacity onPress={() => alert('As redefinições foram enviandas para o e-mail cadastrado.')}>
                <Text style={style.forget}> ESQUECEU A SENHA?</Text>
              </TouchableOpacity>
            </>
            <TouchableOpacity onPress={() => alert('Login realizado.')}>
              <View style={style.acess}>
                <Text style={style.acessText}> ACESSAR </Text>
                <Image source={seta} style={style.imgSeta} />
              </View>
            </TouchableOpacity>
            <Text style={style.footer}>Desenvolvido por: W.F</Text>
          </ImageBackground>
        
      </SafeAreaView >



    </>

  )
}

export default Login;