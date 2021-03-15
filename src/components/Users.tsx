import { FC } from 'react'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../hooks'
import {  fetchRandomUsers } from '../hooks/utils'
import { setUsers } from '../reducers/users'
import { clearCurrentUser } from '../reducers/currentUser'
import { Avatar } from './Avatar'

export const Users: FC = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.values)

  const handleClick = async () => {
    const { results } = await fetchRandomUsers()
    dispatch(clearCurrentUser())
    dispatch(setUsers(results))
  }

  return (
    <UsersContainer>
      <ul>
        {users.map(({picture, name, email}, index) => (
          <li key={index}>
            <Avatar imageUrl={picture.thumbnail} name={`${name.first} ${name.last}`} email={email} />
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Fetch new users</button>
    </UsersContainer>
  )
}

const UsersContainer = styled.aside`
  text-align: center;

  ul {
    padding: 0;

    li {
      list-style: none;
    }
  }

  button {
    background-color: #83ba43;
    border-radius: 4px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 10px;
    text-transform: capitalize;

    &:hover {
      background-color: #7a9857;
    }
  }
`
