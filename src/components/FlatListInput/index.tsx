import React, { useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native'
import { style } from "./style";
import { Ionicons } from '@expo/vector-icons'

const FlatListInput = () => {
    const [input, setInput] = useState('');
    const [senha, setSenha] = useState('');
    const [hidePass, setHidePass] = useState(true);

    const outputs = [
        {
            id: '00001',
            placeholder: 'Email ou CPF',
            keyboardType: 'email-address',
            valor: input,
            secureTextEntry: false
        },
        {
            id: '00002',
            placeholder: 'Senha',
            keyboardType: 'default',
            valor: senha,
            secureTextEntry: hidePass
        }


    ];
    const renderItem = ({ item }) => (
        <TextInput
            style={item.id === '00001' ? style.input : style.input2}
            placeholder={item.placeholder}
            placeholderTextColor="#FFF"
            keyboardType={item.keyboardType}
            value={item.valor}
            secureTextEntry={item.secureTextEntry}
            onChangeText={(text) => handleInputChange(item.id, text)}
        />
    );
    const handleInputChange = (id, text) => {
        if (id === '00001') {
            setInput(text);
        } else if (id === '00002') {
            setSenha(text);
        }
    };

    return (
        <View >
            <FlatList
                data={outputs}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <View style={style.inputArea}>
                <TouchableOpacity style={style.icon} onPress={() => setHidePass(!hidePass)}>
                    {hidePass ?
                        <Ionicons name="eye" color="#FFF" size={25} />
                        :
                        <Ionicons name="eye-off" color="#FFF" size={25} />
                    }
                </TouchableOpacity>
            </View>


        </View>
    )





}

export default FlatListInput;
