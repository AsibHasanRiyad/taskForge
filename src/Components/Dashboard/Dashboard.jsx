import { useState } from "react";
import AddTask from "./AddTask";
import Completed from "./Completed";
import Ongoing from "./Ongoing";
import ToDo from "./ToDo";
import UserProfile from "./UserProfile";

const Dashboard = () => {
    const [tasks, setTasks] = useState([])
  return (
    <div className=" my-20 px-20 bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] rounded-md ">
        <h1 className=" text-center font-semibold text-4xl py-6">Task<span className=" text-white">Bar</span></h1>
      <div className=" grid grid-cols-3 gap-10">
        <div className=" col-span-2">
          <AddTask tasks={tasks} setTasks={setTasks} />
        </div>
        <div className=" col-span-1    ">
          <UserProfile />
        </div>
        <div className=" col-span-1    ">
          <ToDo tasks={tasks} setTasks={setTasks} />
        </div>
        <div className=" col-span-1    ">
          <Ongoing />
        </div>
        <div className=" col-span-1    ">
          <Completed />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
