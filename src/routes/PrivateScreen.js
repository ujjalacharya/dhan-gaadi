import React, {useState, useEffect} from "react";
import LoginScreen from "../screens/LoginScreen";
import {AsyncStorage} from "react-native"

export const PrivateScreen = ({ toRender: Screen, ...rest }) => {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    fetchToken();
    
  }, [isAuth])

  const fetchToken = async() => {
    
    try {
      let token = await AsyncStorage.getItem("token");
      if (token){
        setIsAuth(true)
      }
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }

  return isAuth ? <Screen {...rest} /> : <LoginScreen {...rest} />;
};

export default PrivateScreen;
