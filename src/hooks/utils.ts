const URL = 'https://tinyfac.es/api/users'
interface User {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  avatar: string;
}

interface FetchProps {
  avatars: {
    height: number;
    size: string;
    url: string;
    width: number;
  }[];
  avatars_origin: {
    facebook_profile_link: string;
    id: number;
    name: string;
  };
  first_name: string;
  gender: string;
  last_name: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  const users: FetchProps[] = await(await fetch(URL)).json()
  return users
  .sort((x, y) => x.first_name === y.first_name ? 0 : x.first_name > y.first_name ? 1 : -1)
  .map((user) => ({
    id: user.avatars_origin.id,
    firstName: user.first_name,
    lastName: user.last_name,
    gender: user.gender,
    avatar: user.avatars[1].url
  }))
}