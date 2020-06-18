import {Dimensions} from 'react-native';
import Constants from 'expo-constants';
import Styled from 'styled-components/native';

export const Search = Styled.View`
    display: flex;
    flex-direction: row;
    height: auto;
    width: auto;
    border-radius: 10px;
    background-color: #ffffff;
    shadow-color: #333333;
    shadow-opacity: 0.1;
    shadow-radius: 2px;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
`;

export const InputSearch = Styled.TextInput`
    width: auto;
    height: 60px;
    color: #333;
    border-radius: 8px;
    padding: 0 24px;
    background-color: white;
`;

export const Menu = Styled.TouchableOpacity`
    width: auto;
    height: 60px;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
`;

export const SearchView = Styled.View`
    flex: 1;
    position: relative;
`;

export const Descript = Styled.View`
    display: flex;
    height: 100px;
    width: ${Dimensions.get('window').width + 20}px;
    border-radius: 10px;
    background-color: #ffffff;
    shadow-color: #333333;
    shadow-opacity: 0.1;
    shadow-radius: 2px;
    z-index: 2;
`;
