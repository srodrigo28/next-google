import { auth, signIn } from "@/auth";

export default async function SignIn(){
    const session = await auth();
    console.log(session)
    const user = session?.user;
    // const email = session?.email;
    // const image = session?.image;
    return(
        <form
        
            action={async() => {
                "use server"
                await signIn("google")
            }}
        >
            <button type="submit">SingIn Google</button>
        </form>
    )
}