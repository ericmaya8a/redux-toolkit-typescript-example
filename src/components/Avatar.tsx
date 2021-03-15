import { FC } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setCurrentUser } from '../reducers/currentUser'

interface Props {
  imageUrl: string;
  name: string;
  email: string;
}

export const Avatar: FC<Props> = ({ imageUrl, name, email }) => {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector(state => state.users.values).filter((user) => user.email === email)[0]

  return (
    <AvatarContainer src={imageUrl} alt={name} onClick={() => dispatch(setCurrentUser(currentUser))} />
  )
}

const AvatarContainer = styled.img`
  border-radius: 50%;
  border: 2px solid #827a7a;
  cursor: pointer;
`
