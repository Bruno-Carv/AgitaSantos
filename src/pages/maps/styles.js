import Styled from 'styled-components/native';

export const Search = Styled.View`
    display: flex;
    flex-direction: row;
    height: 60px;
    width: 350px;
    border-radius: 10px;
    background-color: #ffffff;
    shadow-color: #333333;
    shadow-opacity: 0.1;
    shadow-radius: 2px;
    margin-bottom: 140%;
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
`;