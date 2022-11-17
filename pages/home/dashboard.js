import React from "react"
import { signOut, useSession, getSession } from "next-auth/react"
import { loading } from "../../components/loading"


export default function Home() {
  const {data: session} = useSession();

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <p>Seja Bém Vindo (ª)</p>
      <button onClick={() => signOut()}>Sair</button>
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

