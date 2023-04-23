import React, { useState } from 'react';
import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import loginStyles from './Login.styles';
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay, withSpring, withSequence } from 'react-native-reanimated';


export default function Login() {
  const {height, width} = Dimensions.get('window');
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  const [isRegistering, setRegistering] = useState(false);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 2, 0]);

    return{
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
    }
  })

  const buttonAnimatedStyle = useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return{
      opacity:withTiming(imagePosition.value, {duration: 500}),
      transform: [{translateY: withTiming(interpolation, {duration:1000})}]
    }
  })

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return{
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration: 800}),
      transform: [{rotate: withTiming(interpolation + "deg", {duration:1000})}],
    }
  })

  const formAnimatedStyle = useAnimatedStyle(() => {

    return{
      opacity:imagePosition.value === 0 ? withDelay(400, withTiming(1, {duration: 800})) : withTiming(0, {duration: 300}),
    }
  })

  const formButtonAnimatedStyle = useAnimatedStyle(() =>{
    return{
      transform: [{scale:formButtonScale.value}]
    }
  });

  const loginHandler = () =>{
    imagePosition.value = 0;
    if (isRegistering){
      setRegistering(false);
    }
  };

  const registerHandler = () =>{
    imagePosition.value = 0;
    if (!isRegistering){
      setRegistering(true);
    }
  };

  return (
    <View style={loginStyles.container}>
      <Animated.View style={[StyleSheet.absoluteFill,imageAnimatedStyle ]}>
        <Svg height={height+100} width={width+100}>
          <ClipPath id='ClipPathId'>
            <Ellipse cx={width/2} rx={height} ry={height+100} />
          </ClipPath>
          <Image 
          href={require('./assets/login-background.jpg')} 
          height={height+100} 
          width={width+100} 
          preserveAspectRatio="xMidyMid slice" 
          clipPath='url(#ClipPathId)'
          />
        </Svg>
        <Pressable onPress={() => imagePosition.value = 1}>
          <Animated.View style={[loginStyles.closeButtonContainer, closeButtonContainerStyle]}>
            <Text>X</Text>
          </Animated.View>
        </Pressable>
      </Animated.View>

      <View style={loginStyles.buttonContainer}>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={loginStyles.button} onPress={loginHandler}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </Pressable>
        </Animated.View>

        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={loginStyles.button} onPress={registerHandler}>
            <Text style={loginStyles.buttonText}>Register</Text>
          </Pressable>
        </Animated.View>
       
       <Animated.View style={[loginStyles.formInputContainer, formAnimatedStyle]}>

          {isRegistering && (
            <TextInput placeholder='Full Name' placeholderTextColor="black" style={loginStyles.textInput}/>
          )}

          <TextInput placeholder='Email' placeholderTextColor="black" style={loginStyles.textInput}/>
          <TextInput placeholder='Password' placeholderTextColor="black" style={loginStyles.textInput}/>
          <Pressable onPress={()=> formButtonScale.value = withSequence(withSpring(1.5), withSpring(1))}>
            <Animated.View style={[loginStyles.formButton, formButtonAnimatedStyle]}>
            
              <Text style={loginStyles.buttonText}>
                {isRegistering ? 'Register' : 'Login'}
              </Text>
            
            </Animated.View>
          </Pressable>
      </Animated.View> 
      </View>
    </View>
  );
}
