import React from 'react'
import { Container, 
        FormWrap,
        Icon,
        FormContent,
        Form,
        FormH1,
        FormInput,
        FormButton,
        FormLabel,
        Text} from './SigninComponents'

const SignIn = () => {
    return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>Mu<span>ze</span></Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>LogIn with your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>LogIn</FormButton>
                        <Text>Forgot your password?<span> reset now</span></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
    </>
    )
}

export default SignIn
