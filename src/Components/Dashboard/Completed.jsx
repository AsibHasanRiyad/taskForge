/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Completed = ({complete, setComplete}) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks", "complete"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/todo?status=complete&email=${user.email}`
      );
      return res.data;
    },
  });
  console.log(complete);
  if (complete) {
    refetch()
    setComplete(false)
  }
  return (
    <div className=" text-white  mb-10">
      <h1 className=" text-4xl text-white font-semibold mb-4">Completed</h1>
      <div className="overflow-x-auto max-h-60 rounded-lg border-2 shadow-2xl shadow-red-500 glass">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className=" text-gray-800 text-lg">
              <th>Title</th>
              <th>Priority</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tasks.map((task) => (
              <tr key={task._id}>
                <td className=" max-w-32 overflow-x-scroll">{task.title}</td>
                <td>{task.priority}</td>
                <td>{task.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Completed;
