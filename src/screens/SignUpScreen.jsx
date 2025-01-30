import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// useNvigation import
import {useNavigation} from '@react-navigation/native';
// animated import
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="w-full h-full bg-white">
      <StatusBar barStyle={'light-content'} />
      <Image
        className="w-full h-full absolute"
        source={require('../../assets/images/background.png')}
      />

      {/* lights = lambalar */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require('../../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require('../../assets/images/light.png')}
        />
      </View>

      {/* title = form alanı */}
      <View className="flex w-full h-full justify-around pt-40 pb-10">
        {/* title = başlık */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-5xl font-bold tracking-wider text-white">
            SignUp
          </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="w-full p-5 rounded-2xl bg-slate-200">
            <TextInput placeholder="UserName" placeholderTextColor={'gray'} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(200).springify()}
            className="w-full p-5 rounded-2xl bg-slate-200">
            <TextInput placeholder="Password" placeholderTextColor={'gray'} />
          </Animated.View>

          {/* button alanı - login signUp */}
          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
            className="w-full">
            <TouchableOpacity className="w-full p-3 mb-3 bg-sky-400 rounded-2xl">
              <Text className="text-center font-bold text-white text-2xl">
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            className="flex-row justify-center">
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-sky-700 font-bold mx-1">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
