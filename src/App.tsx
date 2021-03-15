import { useEffect, useCallback, FC } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from './hooks'
import { fetchRandomUsers } from './hooks/utils'
import { setUsers } from './reducers/users'
import { Users } from './components/Users'
import { CurrentUser } from './components/CurrentUser'

export const App: FC = () => {
  const dispatch = useAppDispatch()

  const fetchUsers = useCallback(
    async () => {
      const { results } = await fetchRandomUsers()
      dispatch(setUsers(results))
    },
    [dispatch],
  )

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Random Users</h1>
      <Container>
        <Users />
        <main>
          <CurrentUser />
        </main>
      </Container>
    </>
  )
}

const Container = styled.div`
  margin: 2rem auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 25% auto;
  grid-gap: 1rem;
  border: 1px solid #83ba43;
  border-radius: 4px;
  padding: 1rem;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
