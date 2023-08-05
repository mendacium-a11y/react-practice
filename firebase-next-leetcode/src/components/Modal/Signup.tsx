export default function SignUp() {
    return (
        <div>
            <form action="" className="flex flex-col gap-5 p-6">
                <h2 className="mx-auto text-4xl text-white">Sign Up</h2>
                <div className="flex flex-col gap-4">
                    <label htmlFor="password" className="text-2xl text-white">
                        Name
                    </label>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        className="rounded p-3 border-2 outline-none focus:border-blue-950 " type="email"
                        placeholder="Name" />
                </div>
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
                        placeholder="Password" />
                </div>
                <button className="text-black w-full my-6 bg-red-300 p-2 rounded-xl">
                    Register
                </button>
                 
                <button className="flex justify-start text-white text-sm p-2">
                    Already Have an Account?
                    <span className="text-blue-500">Log In</span>
                </button>


            </form>
        </div>
    )
}