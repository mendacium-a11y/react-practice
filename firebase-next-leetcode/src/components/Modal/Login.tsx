export default function Login() {
    return (
        <div>
            <form action="" className="flex flex-col gap-5 p-6 border pb-16">
                <h2 className="mx-auto text-4xl text-white">Sign In</h2>
                <div className="flex flex-col gap-4">
                    <label htmlFor="email" className="text-2xl text-white">
                        E-mail
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="rounded p-3 border-2 outline-none focus:border-blue-950 " type="email"
                        placeholder="name@company.com" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="password" className="text-2xl text-white">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="rounded p-3 border-2 outline-none focus:border-blue-950 " type="email"
                        placeholder="name@company.com" />
                </div>
                <button className="text-black w-full  bg-red-300 p-2 rounded-xl">
                    Login
                </button>
                <button className="flex justify-end text-white px-2">
                    Forgot Password
                </button>
                <button className="flex justify-start text-white px-2">
                    Not Registered?
                    <span className="text-blue-500">Create Account</span>
                </button>


            </form>
        </div>
    )
}