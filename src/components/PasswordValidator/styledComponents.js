// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const CardContainer = styled.div`
  background-color: #475569;
  height: 50vh;
  width: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
`

export const Heading = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
`

export const Description = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 12px;
  font-weight: 500px;
`
