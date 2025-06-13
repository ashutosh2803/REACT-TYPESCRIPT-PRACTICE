import { useState } from 'react'
import './App.css'
import User from './components/User'
import UserBio from './components/UserBio'

function App() {
  const [userBio, setUserBio] = useState<string>("");

  const handleUserBioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserBio(event.target.value);
  };

  return (
    <>
      <UserBio userBio={userBio} handleUserBioChange={handleUserBioChange} />
      <User name="Ashutosh" email="ashutosh@example.com" userBio={userBio}/>
    </>
  )
}

export default App
