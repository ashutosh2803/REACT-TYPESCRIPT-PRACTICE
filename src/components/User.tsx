import { useState } from "react";

interface User{
    name: string;
    email: string;
}

const User = (props: User) => {
    const [userBio, setUserBio] = useState<string>("");
    return (
        <>
            <div>{props.name}</div>
            <div>{props.email}</div>
        </>
    )
}

export default User;