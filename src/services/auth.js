import { AsyncStorage } from "react-native";

export const getTokey = async () => await AsyncStorage.getItem('user');

export const signIn = async (tokey) => await AsyncStorage.setItem('tokey',tokey);

export const signOut = async () => await AsyncStorage.removeItem('tokey');

export const Auth = { 
    signIn,
    signOut,
    getTokey
};