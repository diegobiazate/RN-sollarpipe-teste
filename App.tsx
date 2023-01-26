import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';

import { 
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontLoaded] = useFonts({Poppins_500Medium, Poppins_700Bold});

  if(!fontLoaded){
    return <Loading />
  }

  return (
    <>
      <Routes />
      <StatusBar 
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
    </>
  );
}
