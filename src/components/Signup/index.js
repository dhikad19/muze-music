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
    Text,
    TextSpan} from './SignupComponents'


const SignupData = () => {
    return (
        <>
            <Container>
            <FormWrap>
                <Icon to='/'>Mu<span>ze</span></Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign Up <br/> <span>For Your Free 30 Days Trial</span></FormH1>
                        <FormLabel htmlFor='for'>User Name</FormLabel>
                        <FormInput type='username' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Sign Up</FormButton>
                        <Text>Already have an account? <TextSpan to='login'>Sign In</TextSpan></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
        </>
    )
}

export default SignupData
