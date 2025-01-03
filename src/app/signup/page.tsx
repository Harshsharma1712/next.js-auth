"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])

    const onSignup = async () => {

        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user)
            router.push("/login");
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }

    }

    return (
       <div className="text-center flex flex-col items-center">
        <h1>{loading ? "Processing" : "SignUp"}</h1>
        <br />
        <label htmlFor="username">username</label>
        <input 
        className="border border-gray-300 p-2 rounded-lg "
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder="username"
        />

        <label htmlFor="email">email</label>
        <input 
        className="border border-gray-300 p-2 rounded-lg "
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="email"
        />

        <label htmlFor="password">password</label>
        <input 
        className="border border-gray-300 p-2 rounded-lg "
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="password"
        />

        <button
        onClick={onSignup}
         className="bg-blue-500 text-white p-2 rounded-lg
         hover:bg-blue-600 mt-3">
            {buttonDisabled ? "All feild required" : "Signup"}
        </button>
        <Link className="mt-3 text-blue-500" 
        href="/login"> Visit Login Page </Link>

       </div>
    )
}