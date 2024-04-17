import { redirect } from "next/navigation";
import FormJwt from "./_components/FormJwt";

export default function JWT() {
    redirect('/rsa')
    return <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full min-h-screen max-w-[1490px] items-center justify-center text-sm lg:flex">
            <FormJwt />
        </div>
    </main>
}