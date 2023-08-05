export default function ResetPassword() {
    return(
        <div className="flex flex-col gap-3 p-3 mb-5">
            <h2 className="text-3xl mx-auto text-white my-4">Reset Password</h2>
            <label htmlFor="email" className="text-white text-lg
            my-3 px-2">
                Your E-mail</label>
                <input
                        type="email"
                        name="email"
                        id="email"
                        className="rounded-2xl p-3 border-2 outline-none focus:border-pink-950 " type="email"
                        placeholder="name@company.com" />
        </div>
    )
}