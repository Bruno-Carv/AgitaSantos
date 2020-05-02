import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import Linha from '../../components/linha';

import { Container, Form, Image } from './styles';

import LogoPrefeitura from '../../assets/logoPrefeitura.png';

export default function SignIn(){
    return(
        <Container>
            <Form>
                <Image source={LogoPrefeitura}/>
                <Input 
                    placeholder="Username or Email"
                />
                <Input 
                    placeholder="Password"
                />
                <Button 
                    Text="LOG IN" 
                    style={{ paddingTop: 20 }}    
                />
                <Linha />
            </Form>
        </Container>
    );
}