import { signIn, signOut, useSession } from "next-auth/react";


export const Header = () => {
    const { data: sessionData } = useSession(); 


return (
    <div className="navbar bg-primary text-primary-content">
        {sessionData?.user?.name ? <div className="flex-1 pl-5 text-3xl font-bold">
            Notes for {sessionData.user.name}
        </div>:
        <button className="btn-primary" onClick={()=> void signIn()}>Sign in</button>
}
    </div>
)

};