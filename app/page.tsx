import {getServerSession} from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SessionTip from '@/components/SessionTips/index'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
      <main className={"flex min-h-screen flex-col items-center justify-between p-24"}>
              <p>Hello {session?.user?.name ?? "guest"}</p>
              <SessionTip session={session} />
      </main>
  )
}
