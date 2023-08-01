import { prisma } from "@/db";
import { redirect } from "next/navigation"
import Link from "next/link";

async function createTodo ( data:FormData ) {
    // "use server"
    const title = data.get('title')?.valueOf()
    const description = data.get('description')?.valueOf()

    if (typeof title != "string" || typeof description != "string" || 
    title.length === 0 || description.length === 0){
        return new Error("error")
    }
    
    await prisma.todo.create({ data:{ title, description, complete:false } })
    redirect("/")


  }

export default function Page() {
    return (
        <>
            <header>
                <h1 className="text-4xl font-semibold">News</h1>
            </header>
            <form action={createTodo} className="flex flex-col my-5">
                <input type="text" name="title"
                    className=" border-slate-300 bg-transparent
                rounded px-2 py-1 outline-none my-2
                 focus-within:border-slate-100 border-2"/>
                <input type="text" name="description"
                    className="border-slate-300 bg-transparent
                rounded px-2 py-1 outline-none
                 focus-within:border-slate-100 my-2 border-2"/>
            </form>
            <div className="flex gap-2 justify-end">
                <Link href=".." className="rounded-xl bg-slate-200
                 border p-3 text-black
                  focus-within:bg-slate-300">Cancel</Link>
                <button type="submit" className="rounded-xl bg-slate-200
                 border p-3 text-black
                  focus-within:bg-slate-300"
                >Submit</button>
            </div>
        </>
    )
}