// Write your code here\

import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  Input,
  Heading,
  Description,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const displayError = password.length < 8

  return (
    <AppContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <Input type="password" value={password} onChange={onChangePassword} />
        {displayError && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </CardContainer>
    </AppContainer>
  )
}

export default PasswordValidator
