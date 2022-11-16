import React from "react"
import { signOut, useSession, getSession } from "next-auth/react"


export default function Home() {
  const {data: session} = useSession();

  // if (loading) {
  //   return <p>Loading...</p>
  // }

  return (
    <>
      {/* {session ? ( */}
        {/* <> */}
          <p>Seja Bém Vindo (ª)</p>
          
        <button onClick={() => signOut()}>Sair</button>
        {/* </>
      ) : (
        <p>
          <p>Você não tem permissão para ver esta página.</p>
          <button>Logar</button>
        </p>
      )} */}
    </>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if(!session){
    
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
return {
  props: {
    session
  }
}
}

