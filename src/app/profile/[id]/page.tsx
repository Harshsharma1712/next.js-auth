export default function UserProfile({params}: any) {
    return (
        <div className=" text-center mt-5 flex flex-col items-center min-h-screen ">
        <h1>Profile</h1>
        <p className="text-4xl">
            <span className="p-2 ml-2"
            >Profile Page {params.id}</span>
        </p>
        </div>
    );
}