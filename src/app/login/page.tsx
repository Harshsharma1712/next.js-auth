"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter()

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const[loading, setLoading] = React.useState(false)

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login", user)
            toast.success("Login successful")
            router.push("/profile")
        } catch (error: any) {
            toast.error(error.message)
            
        } finally {
            setLoading(false)
        }  
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])

    return (
       <div className="text-center flex flex-col items-center">
        <h1>{loading ? "Processing" : "Login"}</h1>
        <br />

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
        onClick={onLogin}
         className="bg-blue-500 text-white p-2 rounded-lg
         hover:bg-blue-600 mt-3">
            {buttonDisabled ? "All field required" : "Login"}
        </button>
        <Link className="mt-3 text-blue-500" 
        href="/signup"> Visit SignUp Page </Link>

       </div>
    )
}