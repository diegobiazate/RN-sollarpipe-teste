import { SafeAreaView } from "react-native-safe-area-context";
import {Text} from 'react-native'
import { Button } from "../components/Button";
import useEmployeeContext from "../hooks/useEmployeeContext";

export function Home(){
  const { signout, employee } = useEmployeeContext()
  
  return(
    <SafeAreaView className="flex-1 bg-background px-8 pb-6 flex flex-col justify-between">
      <Text className="text-white font-bold text-5xl mt-6">
        Bem vindo, {employee?.name}
      </Text>

      <Button title="Sair" onClick={() => signout()} />
    </SafeAreaView>
  )
}