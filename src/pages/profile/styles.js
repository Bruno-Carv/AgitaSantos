import Styled from 'styled-components/native';

import Constants from 'expo-constants';

export const Container = Styled.ScrollView`
    flex: 1;
    padding: 0 24px;
    padding-top: ${Constants.statusBarHeight + 20}px;
`;