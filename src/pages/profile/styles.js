import Styled from 'styled-components/native';

import Constants from 'expo-constants';

export const Container = Styled.View`
    flex: 1;
    background: #E4EEFA;
    padding: 0 24px;
    padding-top: ${Constants.statusBarHeight + 20}px;
`;