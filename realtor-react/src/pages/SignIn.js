import { useState } from "react"

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((oldState) => ({
            ...oldState,
            [e.target.id]: e.target.value
        }))
    }

    return (
        <section className="text-center text-3xl font-bold mt-6">
            <h1>Sign In</h1>
            <div className="flex flex-wrap justify-center max-w-6xl mx-auto px-6 py-12 items-center">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="key" className="w-full rounded-2xl" />
                </div>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                    <form>
                        <input type="email" id="email" value={email} onChange={onChange} placeholder="Email address"
                            className="w-full px-4 py-2 text-xl
                            text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" />
                        <div>
                            <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={onChange} placeholder="Password"
                                className="w-full px-4 py-2 text-xl
                        text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}