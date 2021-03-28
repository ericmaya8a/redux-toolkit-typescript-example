const URL = 'https://tinyfac.es/api/users'
interface Avatar {
  url: string;
}
interface User {
  avatars_origin: {id: number};
  first_name: string;
  last_name: string;
  gender: string;
  avatars: Avatar[]
}

export const fetchUsers = async () => {
  const users = await(await fetch(URL)).json()
  return users
  .sort((x: any,y: any) => x.first_name === y.first_name ? 0 : x.first_name > y.first_name ? 1 : -1)
  .map((user: User) => ({
    id: user.avatars_origin.id,
    firstName: user.first_name,
    lastName: user.last_name,
    gender: user.gender,
    avatar: user.avatars[1].url
  }))
}