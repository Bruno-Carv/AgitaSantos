import React from 'react';
import { ActivityIndicator, Modal, Portal, Provider } from 'react-native-paper';

export default function Loading({visible = false}){
    return(
        <Provider>
            <Portal>
                <Modal visible={visible} dismissable={false}>
                    <ActivityIndicator animating={true} size={100} color='#358062' />
                </Modal>
            </Portal>
        </Provider>
    );
}