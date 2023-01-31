import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setEmail: (value: string) => void;
  setAvatarUrl: (value: string) => void;
}

const defaultState: User = {
  firstName: 'Nick',
  lastName: 'Barnard',
  email: 'name@email.com',
  avatarUrl: '/some-url/pic.jpg',
  setFirstName: () => {},
  setLastName: () => {},
  setEmail: () => {},
  setAvatarUrl: () => {},
};

export const UserContext = createContext<User>(defaultState);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [firstName, setFirstName] = useState<string>(defaultState.firstName);
  const [lastName, setLastName] = useState<string>(defaultState.lastName);
  const [email, setEmail] = useState<string>(defaultState.email);
  const [avatarUrl, setAvatarUrl] = useState<string>(defaultState.avatarUrl);

  const user: User = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    avatarUrl: avatarUrl,
    setFirstName: (value: string) => setFirstName(value),
    setLastName: (value: string) => setLastName(value),
    setEmail: (value: string) => setEmail(value),
    setAvatarUrl: (value: string) => setAvatarUrl(value),
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default function App() {
  return (
    <UserProvider>
      <User />
      {/* or <App /> */}
    </UserProvider>
  );
}

function User() {
  const { firstName, lastName } = useContext(UserContext);

  return (
    <h1>
      Hello, {firstName} {lastName}
    </h1>
  );
}
