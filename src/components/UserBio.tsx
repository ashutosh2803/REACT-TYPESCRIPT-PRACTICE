interface Props{
  userBio: string;
  handleUserBioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserBio = ({handleUserBioChange, userBio}: Props) => {
  return (
    <>
      <input onChange={handleUserBioChange} value={userBio} />
    </>
  );
};

export default UserBio;