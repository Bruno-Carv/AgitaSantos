import { AsyncStorage } from "react-native";

export const getUser = async () => {

    const data = await AsyncStorage.getItem('data');
    return JSON.parse(data);
}

export const getID = async () => {
    const data = await AsyncStorage.getItem('data');
    const artist = JSON.parse(data);
    return artist._id;
}

export const signIn = async (params) => {
    const data = JSON.stringify(params);
    await AsyncStorage.setItem('data', data);
};

export const signOut = async () => {
    await AsyncStorage.multiRemove('data').then(() => {
        return true;
    }).catch(() => {
        return false;
    });
}

export const Auth = {
    signIn,
    signOut,
    getUser
};