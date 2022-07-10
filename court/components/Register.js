import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, UseState } from 'react-native';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Fontisto } from '@expo/vector-icons';

const Register = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth();

    const handleSignup = () => {
            createUserWithEmailAndPassword (auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);

                navigation.navigate('Homescreen')
            })
            .catch(error => alert(error.message))
    }


    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.logo}>
                <Image style={{resizeMode : 'stretch',
                    height: 120,
                    width: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 60,
                    left: 10,
                }}
                       source={require('../assets/images/Fichier3.png')}/>
                <Text style={styles.text1}>
                    court
                </Text>

            </View>
            <View style={styles.rectangle}>
                <Text style={styles.seConnecter}>S'inscrire</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='E-mail'
                        value={email}
                        style={styles.inputText}
                        onChangeText={text => setEmail(text)}/>
                    <TextInput
                        placeholder='Mot de passe'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.inputText}
                        secureTextEntry/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleSignup}
                        style={styles.button1}>
                        <Text style={styles.textLogin}>S'inscrire</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>

                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF853C',
    },
    rectangle : {
        backgroundColor: '#F2F2F2',
        height: 590,
        width: 375,
        top: 100,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo : {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1 : {
        color: 'white',
        fontSize: 40,
        fontFamily: 'ProximaNovaBold',
        top: 70,
    },
    inputContainer: {
        width: '80%',
    },
    inputText : {
        backgroundColor: '#E3E3E3',
        borderRadius: 37,
        paddingHorizontal: 20,
        paddingVertical: 25,
        bottom: 95,
        marginTop: 35,
        fontFamily: 'ProximaNovaRegular',
    },
    buttonContainer : {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 35,
    },
    button1 : {
        backgroundColor: '#FF853C',
        borderRadius: 37,
        width: '100%',
        bottom: 30,
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
    button2 : {
        backgroundColor: '#1B1B1B',
        borderRadius: 37,
        width: '100%',
        bottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
    textLogin : {
        fontFamily: 'ProximaNovaBold',
        color: 'white',
        fontSize: 20,
        textAlign: "center",
    },
    textRegister : {
        fontFamily: 'ProximaNovaBold',
        color: 'white',
        fontSize: 20,
        textAlign: "center",
    },
    seConnecter : {
        color: '#1B1B1B',
        fontSize: 30,
        bottom: 80,
        fontFamily: 'ProximaNovaBold',
        right: 50,
    }
});

export default Register;