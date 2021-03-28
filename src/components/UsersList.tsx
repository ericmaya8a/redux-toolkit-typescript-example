import { useState, FC } from 'react'
import { Card, Elevation, Spinner } from '@blueprintjs/core'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../hooks'
import { UserModal } from './UserModal'
import { getSelectedUser } from '../reducers/selectedUser'

export const UsersList: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { loading, filteredData } = useAppSelector((state) => state.userList)
  const dispatch = useAppDispatch()

  return (
    <>
      {loading ?
        <StyledSpinner /> :
        <UserListContainer>
          {filteredData.map((user) => (
            <StyledCard
              key={user.id}
              interactive
              elevation={Elevation.ONE}
              onClick={() => {
                dispatch(getSelectedUser(user))
                setIsOpen(true)
              }}
            >
              <Image src={user.avatar} alt="avatar" gender={user.gender} />
              <Name>{user.firstName} {user.lastName}</Name>
            </StyledCard>
          ))}
        </UserListContainer>
      }
      <UserModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

const UserListContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledCard = styled(Card)`
  align-items: center;
  display: flex;
`

export const Image = styled.img<{ gender: string }>`
  border-radius: 50%;
  border: 2px solid ${({gender}) => gender === 'male' ? '#0E5A8A' : '#F5498B'};
  height: 50px;
  margin-right: 1rem;
  width: 50px;
`

const Name = styled.h3`
  margin: 0;
`

const StyledSpinner = styled(Spinner)`
  margin-top: 1rem;
`
