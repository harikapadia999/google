import { useSession, signIn, signOut } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <img
          onClick={signOut}
          src={session.user.image}
          alt="user-image"
          className="h-10 w-10 p-1 rounded-full hover:bg-gray-200 cursor-pointer"
        />
      </>
    );
  }
  return (
    <>
      <button
        className="bg-blue-500 px-6 py-2 text-white font-medium rounded-md hover:brightness-105 hover:shadow-md"
        onClick={signIn}
      >
        Sign in
      </button>
    </>
  );
}
