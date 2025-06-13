interface User{
    name: string;
    email: string;
    userBio: string;
}

const User = (props: User) => {
    return (
        <>
            <div>{props.name}</div>
            <div>{props.email}</div>
            <div>{props.userBio}</div>
            
        </>
    )
}

export default User;