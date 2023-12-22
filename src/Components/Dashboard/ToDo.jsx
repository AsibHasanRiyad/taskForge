/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const ToDo = ({ reload, setReload, setOngoing }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks", "todo"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/todo?status=todo&email=${user.email}`
      );
      return res.data;
    },
  });
  // console.log(reload);
  if (reload) {
    refetch();
  }
  setReload(false);
  console.log(reload);
  const handelDelete = (id) => {
    const toastId = toast.loading("Deleting....");
    axiosPublic.delete(`/todo/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success("Deleted", { id: toastId });
        refetch();
      } else {
        toast.error("Something Wrong", { id: toastId });
      }
    });
  };

  // handel status
  const handelStatus = (id) => {
    const toastId = toast.loading("ongoing....");
    axiosPublic.patch(`/todo/ongoing/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Task ongoing", { id: toastId });
        refetch();
        setOngoing(true)
      } else {
        toast.error("Something Wrong", { id: toastId });
        console.log(res.data);
      }
    });
  };

  return (
    <div className=" text-white  mb-10">
      <h1 className=" text-4xl text-white font-semibold mb-4">Todo</h1>
      <div className="overflow-x-auto max-h-60 overflow-scroll rounded-lg border-2 shadow-2xl shadow-red-500 glass">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className=" text-gray-800 text-lg">
              <th></th>
              <th>Title</th>
              <th>Priority</th>
              <th>Deadline</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tasks.reverse().map((task) => (
              <tr key={task._id}>
                <td onClick={() => handelStatus(task._id)}>
                  <input
                    type="radio"
                    name="radio-8"
                    className="radio radio-info glass"
                  />
                </td>
                <td className=" overflow-x-scroll">{task.title}</td>
                <td>{task.priority}</td>
                <td>{task.deadline}</td>
                <td
                  onClick={() => handelDelete(task._id)}
                  className=" cursor-pointer hover:text-teal-500"
                >
                  x
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDo;
