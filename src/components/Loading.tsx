import { ActivityIndicator, View } from "react-native";

export function Loading(){
  return(
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3D2F49'
      }}
    >
      <ActivityIndicator 
        color='#FFF' 
        size={48}
      />
    </View>
  )
}