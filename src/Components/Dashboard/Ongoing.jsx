/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const Ongoing = ({setComplete, ongoing, setOngoing}) => {
  const axiosPublic = useAxiosPublic();
  const {user} = useContext(AuthContext)
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks", "ongoing"],
    queryFn: async () => {
        const res = await axiosPublic.get(`/todo?status=ongoing&email=${user.email}`);
      return res.data;
    },
  });
  // console.log(tasks);
  const handelStatus = (id) => {
    const toastId = toast.loading("Completing....");
    axiosPublic.patch(`/todo/complete/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("Task Completed", { id: toastId });
        setComplete(true)
      } else {
        toast.error("Something Wrong", { id: toastId });
        console.log(res.data);
      }
    });
  };
  if (ongoing) {
    refetch()
    setOngoing(false)
  }
  return (
    <div className=" text-white  mb-10">
      <h1 className=" text-4xl text-white font-semibold mb-4">Ongoing</h1>
          <div className="overflow-x-auto max-h-60 overflow-scroll rounded-lg border-2 shadow-2xl shadow-red-500 glass">
            <table className="table ">
              {/* head */}
              <thead>
                <tr className=" text-gray-800 text-lg">
                  <th></th>
                  <th>Title</th>
                  <th>Priority</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
               {
                tasks.map((task) => (
                  <tr key={task._id}>
                    <td onClick={() => handelStatus(task._id)}>
                  <input
                    type="radio"
                    name="radio-8"
                    className="radio radio-accent glass "
                  />
                </td>
                    <td className=" max-w-32 overflow-x-scroll">{task.title}</td>
                    <td>{task.priority}</td>
                    <td>{task.deadline}</td>
                  </tr>
                ))
               }
              </tbody>
            </table>
          </div>
        </div>
  );
};

export default Ongoing;
