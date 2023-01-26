import axios, { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { EmployeeContextType, EmployeeLoggedType, EmployeeType, EmployeLoginType } from "../@types/employee";
import { api } from "../lib/axios";

export const EmplyeeContext = createContext({} as EmployeeContextType)

interface EmployeeContextProviderProps {
  children: ReactNode
}

export function EmployeeContextProvider({children}: EmployeeContextProviderProps){
  const [employeeLogged, setEmployeeLogged] = useState<EmployeeLoggedType | null>(null);
  const [employee, setEmployee] = useState<EmployeeType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { navigate } = useNavigation();

  useEffect(() => {
    getAsyncStorage()
  }, [])

  useEffect(() => {
    if(!employeeLogged){
      navigate('signin');
    }else{
      setAsyncStorage();
      getEmployeers();
      navigate('home');
    }
  }, [employeeLogged])

  async function signin({email, password}: EmployeLoginType) {
    try {
      setIsLoading(true)

      const response = await api.post('/authentication/login', {
        "email": email,
        "password": password
      })

      setEmployeeLogged(response.data)
      
    } catch (error) {
      setIsLoading(true)
      const errors = error as Error | AxiosError;
      if(axios.isAxiosError(errors) && errors.message.includes('401')){
        return Alert.alert('Ops', 'E-mail e/ou senha incorretos!')
      }
      return Alert.alert('Ops', 'Erro ao realizar o login')
    }finally  {
      setIsLoading(false)
    }
  }

  async function signout() {
    setEmployeeLogged(null)
    deleteAsyncStorage()
  }

  async function setAsyncStorage() {
    try {
      if(employeeLogged){
        const jsonValue = JSON.stringify(employeeLogged)
        await AsyncStorage.setItem('@solarpipe_employee', jsonValue)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function getAsyncStorage() {
    try {
      const employeeAsyncStorage = await AsyncStorage.getItem('@solarpipe_employee')
      if (employeeAsyncStorage != null){
        setEmployeeLogged(JSON.parse(employeeAsyncStorage)) 
      }else{
        setEmployeeLogged(null);
      } 
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteAsyncStorage() {
    try {
      await AsyncStorage.removeItem('@solarpipe_employee')    
    } catch (error) {
      console.log(error)
    }
  }

  async function getEmployeers() {
    try {
      if(employeeLogged){
        api.defaults.headers.common['Authorization'] = `Bearer ${employeeLogged.access_token}`;
        const response = await api.get(`/employees/${employeeLogged.employeeUuid}`);
        setEmployee(response.data)
      }
    } catch (error) {
      const errors = error as Error | AxiosError;
      console.log(errors)
      if(axios.isAxiosError(errors) && errors.message.includes('401')){
        signout()
        return Alert.alert('Ops', 'Não foi possível localizar os dados do empregado')
      }
      signout()
      return Alert.alert('Ops', 'Erro ao localizar os dados do empregado')
    }
  }

  return(
    <EmplyeeContext.Provider
      value={{
        employeeLogged,
        employee,
        signin,
        signout,
        isLoading
      }}
    >
      {children}
    </EmplyeeContext.Provider>
  )
}