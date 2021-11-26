import React, {userState, useState} from 'react';

// formik
import {Formik} from 'formik';

//Icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent

} from './../Components/styles';

import {View, ActivityIndicator } from 'react-native';

//API Client
import axios from 'react-native-axios';

//colors
const {brand, darkLight, primary} = Colors;


const Login = ({navigation}) => {
        const [hidePassword, setHidePassword] = useState(true);
        const [message, setMessage] = useState();
        const [messageType, setMessageType] = useState();

        const handleLogin = (credentials, setSubmitting) => {
            handleMessage(null);
            const url = 'https://shielded-escarpment-20777.herokuapp.com/User/signin'

            axios.post(url, credentials).then((response)=> {
                const result = response.data;
                const {message, status, data} = result;

              if(status !== 'SUCCESS'){
                  handleMessage(message, status);
              } else{
                  navigation.navigate('Home', {...data[0]});
              }
              setSubmitting(false);
            })
            .catch(error =>{
                console.log(error.JSON());
                setSubmitting(false);
                handleMessage(" Ocorreu um erro. Verifique sua conexão e tente novamente");
            })
        }
    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessage(type);
    };

    return(
        <StyledContainer>
            <InnerContainer>
                <PageLogo realizeMode="cover" source={require('./../assets/panda_logo.png')}/>
                <PageTitle> Panda </PageTitle>
                <Subtitle> Login </Subtitle>


                <Formik
                    initialValues={{email:'', password: ''}}
                    onSumit={(values, {setSubmitting}) => {
                        if (values.email == '' || values.password == ''){
                            handleMessage('Preencha todos os campos, por favor.');
                            setSubmitting(false);
                        } else{
                            handleLogin(values, setSubmitting);
                        }

                    }}
                >{({handleChange, handleSubmit, values, isSubmitting }) => (<StyledFormArea>
                    <MyTextInput 
                        label=" E-mail"
                        icon="mail"
                        placeholder="exemple@gmail.com"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleChange('email')}
                        value = {values.email}
                        keyboardType = "email-address"
                    />

                    <MyTextInput 
                        label=" Senha"
                        icon="lock"
                        placeholder="*********"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleChange('password')}
                        value = {values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MsgBox type={messageType}>{message}</MsgBox>
                    {!isSubmitting &&(
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>
                            Entrar
                        </ButtonText>
                    </StyledButton>
                    )}

                    {isSubmitting &&(
                    <StyledButton disable={true}>
                        <ActivityIndicator size="large" color={primary}/>
                    </StyledButton>
                    )}

                    {/* <Br/> */}
                    <StyledButton google={true} onPress={() => navigation.navigate('Home')}>
                        <Fontisto name="google" color={primary} size={25}/>
                        <ButtonText google={true}>
                            Entrar com Google
                        </ButtonText>
                    </StyledButton>
                    <ExtraView>
                        <ExtraText> Não possui uma conta?</ExtraText>
                        <TextLink onPress={() => navigation.navigate('SignUp')}>
                            <TextLinkContent> Cadastrar </TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </StyledFormArea>
                )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name = {hidePassword ? 'md-eye-off' : 'md-eye'} size={27} color={darkLight} />
                </RightIcon>
            )}

        </View>
    )
}

export default Login;