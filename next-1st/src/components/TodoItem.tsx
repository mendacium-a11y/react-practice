type TodoItemProps = {
    id: string
    title: string
    description: string
    complete: boolean
}

export function TodoItem({ id, title, description,
    complete }: TodoItemProps) {
    return (
        <>
            <li className="flex items-center gap-2">
                <input id={id} type="checkbox" name=""
                    className="cursor-pointer peer" />
                <label htmlFor={id}
                    className="cursor-pointer peer-checked:line-through text-2xl font-bold">
                    {title}
                </label>

            </li>
            <div className=" px-6 text-lg ">
                <p className="peer-checked:line-through">
                    {description}
                </p>

            </div>
        </>
    )
}