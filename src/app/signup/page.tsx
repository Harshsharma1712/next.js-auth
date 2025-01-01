"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {

    }

    return (
       <div className="text-center flex flex-col items-center">
        <h1>Signup</h1>
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
            SignUp
        </button>
        <Link className="mt-3 text-blue-500" 
        href="/login"> Visit Login Page </Link>

       </div>
    )
}