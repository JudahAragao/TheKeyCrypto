import { redirect } from "next/navigation"

export default function Home() {
  redirect('/rsa')
  return <main className="flex min-h-screen flex-col items-center justify-between">
    <div className="w-full min-h-screen max-w-[1490px] items-center justify-center text-sm lg:flex">

    </div>
  </main>
}
