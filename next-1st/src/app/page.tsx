import { TodoItem } from '@/components/TodoItem'
import { prisma } from '@/db'
// import Image from 'next/image'
import Link from 'next/link'




export default async function Home() {

    const todos = await prisma.todo.findMany()
    // await prisma.todo.create({data : {title:"test",
    // description:"test-description", complete:false}})
    // await prisma.todo.deleteMany();


  return(
    <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-5xl">Todos</h1>
      <Link href="/new" className="text-4xl border border-slate-300 
      p-3 rounded-2xl hover:bg-slate-600 focus-within:bg-slate-700
       outline-none">New</Link>

    </header>
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo}/>
      ))}
    </ul>
    </>
  )
}
