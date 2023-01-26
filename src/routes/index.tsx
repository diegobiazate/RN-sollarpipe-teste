import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native'
import { AppRoute } from "./app.routes";
import { EmployeeContextProvider } from "../contexts/EmployeeContext";

export function Routes(){
  return(
    <SafeAreaView className="flex-1 bg-background">
      <NavigationContainer>
        <EmployeeContextProvider>
          <AppRoute />
        </EmployeeContextProvider>
      </NavigationContainer>
    </SafeAreaView>
  )
}