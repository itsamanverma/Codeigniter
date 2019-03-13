import React from 'react'
import SocialLogin from 'react-social-login'
import { Button } from '@material-ui/core'

const sButton = ({ children, triggerLogin, ...props }) => (
    <Button className='SocialButton' onClick={triggerLogin} {...props} variant='outlined' >
        {children}
    </Button>
)

export default SocialLogin(sButton)
