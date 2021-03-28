import { FC } from 'react'
import styled from 'styled-components'
import { Filter } from './components/Filter'
import { UsersList } from './components/UsersList'

export const App: FC = () => {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Redux Toolkit example</h1>
      <Container>
        <Filter />
        <UsersList />
      </Container>
    </>
  )
}

const Container = styled.div`
  margin: 2rem auto;
  max-width: 1200px;
`
