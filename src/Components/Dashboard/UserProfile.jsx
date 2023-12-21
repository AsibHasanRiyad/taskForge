import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="rounded-lg border-2 shadow-2xl shadow-red-500 glass h-full">
      <div className=" flex justify-center items-center py-4">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      </div>
      <h1 className=" text-white text-4xl text-center mb-2">{user?.displayName}</h1>
      <h1 className=" text-white text-xl text-center">{user?.email}</h1>
    </div>
  );
};

export default UserProfile;