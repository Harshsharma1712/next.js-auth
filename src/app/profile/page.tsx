"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

export default function ProfilePage() {

    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            router.push('/login')
        } catch (error: any) {
            toast.error(error.message);
        }
    }

    return (
        <div className=" text-center mt-5 flex flex-col items-center min-h-screen ">
            <h1>Profile</h1>
            <p>Profile Page</p>

            <hr />
            <button
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >Log Out</button>
        </div>
    );
}