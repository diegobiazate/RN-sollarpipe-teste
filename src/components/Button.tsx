import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

type ButtonProps = {
  title: string;
  onClick: () => void;
}


export function Button({ title, onClick }: ButtonProps){
  return(
    <TouchableOpacity
      className="flex items-center justify-center rounded-full h-14 w-full"
      activeOpacity={0.7}
      onPress={onClick}
    >
      <LinearGradient 
        colors={['rgba(242, 127, 62, 0.5)', 'rgba(183, 83, 119, 0.7)', 'rgba(101, 52, 164, 0.4)', 'rgba(101, 52, 164, 0.5)']} 
        start={{x: 0, y: 0.5}}
        end={{x: 1.2, y: 1.5}}
        style={styles.linearGradient}
      >
        <Text style={styles.buttonText}>
          {title}
        </Text>
      </LinearGradient>
      
    </TouchableOpacity>
  )
}

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});