import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Switch
} from 'react-native';

import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileImage from '../../assets/user-profile.png';

export default function PerfilArea() {
    const [containerProfileVisible, setContainerProfileVisible] = useState(false);    
    
    const [aluno, setAluno] = useState({
        name: '',
        age: 0,
        sex: 0,
        creditLimit: 0.00,
        student: false
    });

    const onPress = () => setCount(prevCount => prevCount + 1)

    const handleChangeTextName = function(input) {
        setAluno((prevState) => ({
            ...prevState,
            name: input
        }))
    }

    const handleChangeTextAge = function(inputValue) {
        setAluno(prevState => ({
            ...prevState,
            age: parseInt(inputValue)
        }))
    }

    const handleChangeValorCredito = function(inputValue) {
        setAluno(prevState => ({
            ...prevState,
            creditLimit: inputValue
        }))
    } 

    const handleChangeIsAluno = function(inputValue) {
        setAluno(prevState => ({
            ...prevState,
            student: inputValue
        }))
    }
    
    return (
        <View style={styles.containerGeral}>
            <TextInput 
                style={styles.input}
                onChangeText={(input) => handleChangeTextName(input)} 
                value={aluno.name}
                maxLength={30}
                placeholder='Digite seu nome'
            />

            <TextInput 
                style={styles.input}
                onChangeText={(input) => handleChangeTextAge(input)} 
                value={aluno.age}
                maxLength={30}
                placeholder='Digite sua idade'
            />

            <Picker
              selectedValue={aluno.sex}
            >
              <Picker.Item key={0} value={0} label="Masculino"/> 
              <Picker.Item key={1} value={1} label="Feminino"/> 
            </Picker>

            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                onValueChange={(value) => handleChangeValorCredito(value)}
                value={aluno.creditLimit}
                step={1}
            />

            <Text> Seu limite: {aluno.creditLimit}</Text>

            <View style={styles.containerSwitch}>
                <Text> Aluno: {aluno.student ? 'Sim' : 'Não'} </Text>

                <Switch 
                    value={aluno.student}
                    onValueChange={(selectedValue) => handleChangeIsAluno(selectedValue)}
                />

            </View>

            <Button
                title={containerProfileVisible ? 'Esconder perfil' : 'Mostrar perfil'}
                onPress={() => setContainerProfileVisible(!containerProfileVisible)}
            />

        {containerProfileVisible ? (
            <View style={styles.profileContainer}>

                <Image
                source={ProfileImage}
                style={styles.imageStyle}
                />

                <View style={styles.textProfileContainer}>       
                    <Text style={styles.profileText1}> {aluno?.name} </Text>        
                    <Text style={styles.profileText2}> Idade: {aluno?.age} </Text>
                    <Text style={styles.profileText2}> Sexo: {aluno?.sex} </Text> 
                    <Text style={styles.profileText2}> Limite: R$ {aluno?.creditLimit} </Text> 
                    <Text style={styles.profileText2}> Aluno: {aluno.student ? 'sim' : 'não'} </Text>
                </View>

            </View> ) : null}

        </View>
        
    )
};

const styles = StyleSheet.create({
    containerGeral: {
        flexDirection: 'column', // inner items will be added vertically
        flexGrow: 1,            // all the available vertical space will be occupied by it
        justifyContent: 'space-between' // will create the gutter between body and footer
    },
    
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1,
        marginVertical: 15
    },

    containerSwitch: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },  

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        minWidth: 200
    },

    imageStyle: {
        flex: 1,
        height: 100,
        width: 100,
        borderColor: '#000',
    },

    textProfileContainer: {
        flex: 3,
        padding: 5,
        textAlign: 'left',
    },

    profileText1: {
        fontSize: 25,
        color: '#000'
    },

    profileText2: {
        fontSize: 13,
        color: '#000'
    },

    slider: {
        marginVertical: 20
    }
});