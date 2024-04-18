import Link from "next/link";

export default function Home() {

  return <main className="flex flex-col items-center justify-between">
    <div className="w-full min-h-[calc(100vh-50px)] max-w-[1490px] items-center justify-center text-sm lg:flex">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
        <p className="text-lg mb-8">A página que você está procurando não existe.</p>
        <Link href="/">
          <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 ease-in-out">
            Voltar para a página inicial
          </button>
        </Link>
      </div>
    </div>
  </main>
}
