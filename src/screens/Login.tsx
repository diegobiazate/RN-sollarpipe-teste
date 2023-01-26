import { Alert, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from "react";
import { Button } from "../components/Button";

import useEmployeeContext from '../hooks/useEmployeeContext';
import { EmployeLoginType } from '../@types/employee';
import { Loading } from '../components/Loading';


export function Login(){
  const { signin, isLoading } = useEmployeeContext()
  
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  async function handleLogin(){
    if(!email || !pass){
      return Alert.alert('Ops', 'Digite o email e senha!')
    }
    const dataLogin: EmployeLoginType = {email, password: pass}
    signin(dataLogin)

    setEmail('')
    setPass('')
  }

  if(isLoading){
    return <Loading />
  }

  return(
    <ImageBackground 
      source={require('../assets/background.png')} 
      resizeMode="cover" 
      className="flex-1 justify-center px-8 bg-background"
    >
      <View className="flex items-center justify-center mt-6">
        <Image source={require('../assets/logo.png')} />
      </View>
    
      <View className="flex flex-col mt-8" >
        <Text className="text-white pl-2" >
          Email
        </Text>
        
        <TextInput 
          className="h-12 pl-4 rounded-full mt-3 bg-white text-background
          border-2 border-white focus:border-background placeholder:text-zinc-500"
          placeholder="exemplo@email.com"
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email}
        />

        <Text className="text-white pl-2 mt-9" >
          Senha
        </Text>
        
        <TextInput 
          secureTextEntry={true}
          className="h-12 pl-4 rounded-full mt-3 bg-white text-background
            border-2 border-white focus:border-background placeholder:text-zinc-500"
          placeholder="********"
          onChangeText={setPass}
          value={pass}
        />
      </View>

      <TouchableOpacity className="flex items-end mr-2 mt-7">
        <Text className="font-bold text-base text-white">
          Esqueceu sua senha?
        </Text>
      </TouchableOpacity>

      <View className="flex items-center justify-center gap-4 mt-32 px-1 mb-2">

        <Button title="Entrar" onClick={() => handleLogin()} />

        <Text className="font-bold text-base text-white"> 
          ou 
        </Text>

        <TouchableOpacity 
          activeOpacity={0.7}
          className="flex items-center justify-center border border-white 
          rounded-full h-14 w-full"
        >
          <Text className="font-bold text-base text-white">
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  )
}