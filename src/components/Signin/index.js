import React from 'react'
import { Container, 
        FormWrap,
        Icon,
        FormContent,
        Form,
        FormButton,
        FormH1,
        FormButtonSec,
        FormH2} from './SigninComponents'

const SignIn = () => {
    return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>Mu<span>ze</span></Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Loud your speaker</FormH1>
                        <FormH2>listen now, join Mu<span>ze</span> today.</FormH2>
                        <FormButton to='signup'>Sign Up</FormButton>
                        <FormButtonSec to='login'>Sign In</FormButtonSec>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
    </>
    )
}

export default SignIn
