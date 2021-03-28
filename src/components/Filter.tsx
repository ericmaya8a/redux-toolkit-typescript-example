import { FC } from 'react'
import { Navbar, Button } from '@blueprintjs/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale, faMale, faUsers } from '@fortawesome/free-solid-svg-icons'
import { fetchUsers } from '../hooks/utils'
import { useAppDispatch, useAppSelector } from '../hooks'
import { getUsersList, startLoading, clearLoading, filterUserList } from '../reducers/userList'

type FilterType = 'female' | 'male' | 'all'

export const Filter:FC = () => {
  const dispatch = useAppDispatch()
  const { loading, data } = useAppSelector(state => state.userList)
  const isDisabled = data.length === 0;

  const handleClick = async () => {
    dispatch(startLoading())
    const users = await fetchUsers()
    dispatch(getUsersList(users))
    dispatch(filterUserList(users))
    dispatch(clearLoading())
  }

  const handleFilter = (value: FilterType) => {
    const clonedData = [...data]
    if (value === 'all') {
      dispatch(filterUserList(data))
    } else {
      dispatch(filterUserList(clonedData.filter((user) => user.gender === (value))))
    }
  }

  return (
    <Navbar style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', height: 'auto'}}>
      <Navbar.Group>
        <Navbar.Heading>Filter by</Navbar.Heading>
        <Navbar.Divider />
        <Button
          icon={<FontAwesomeIcon icon={faFemale} />}
          minimal
          text="Female"
          intent="danger"
          disabled={isDisabled}
          onClick={() => handleFilter('female')}
        />
        <Button
          icon={<FontAwesomeIcon icon={faMale} />}
          minimal
          text="Male"
          intent="primary"
          disabled={isDisabled}
          onClick={() => handleFilter('male')}
        />
        <Button
          icon={<FontAwesomeIcon icon={faUsers} />}
          minimal
          text="All"
          intent="success"
          disabled={isDisabled}
          onClick={() => handleFilter('all')}
        />
      </Navbar.Group>
      <Navbar.Group align="right">
        <Navbar.Heading>Actions</Navbar.Heading>
        <Navbar.Divider />
        <Button text="Get Users" intent="primary" loading={loading} onClick={handleClick} />
      </Navbar.Group>
    </Navbar>
  )
}
