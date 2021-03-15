import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk, faMale, faFemale, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../hooks'
import { User } from '../reducers/users'
import { clearCurrentUser } from '../reducers/currentUser'
import { Avatar } from './Avatar'

export const CurrentUser: FC = () => {
  const dispatch = useAppDispatch();
  const currentUser: User | null = useAppSelector(state => state.currentUser.value)
  
  if (currentUser) {
    const { name, email, picture, phone, gender } = currentUser

    return (
      <Card>
        <span onClick={() => dispatch(clearCurrentUser())}><FontAwesomeIcon icon={faTimes} /></span>
        <Avatar imageUrl={picture.large} name={name.first} email={email} />
        <h2>{`${name.first} ${name.last}`}</h2>
        <p><FontAwesomeIcon icon={faPhone} /> <strong>{phone}</strong></p>
        <p><FontAwesomeIcon icon={faMailBulk} /> <strong>{email}</strong></p>
        <p><FontAwesomeIcon icon={gender === 'female' ? faFemale : faMale} /> <strong>{gender}</strong></p>
      </Card>
    )
  }

  return null
}

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #827a7a;
  box-shadow: 0 0 2px rgb(0 0 0 / 50%);
  padding: 1rem;
  position: relative;
  text-align: center;
  min-width: 50%;
  min-height: 50%;

  & span {
    border-radius: 2px;
    color: #827a7a;
    cursor: pointer;
    padding: 5px;
    position: absolute;
    right: 10px;
    top: 10px;

    &:hover {
      background-color: #cccccc;
      color: inherit;
    }
  }
`
