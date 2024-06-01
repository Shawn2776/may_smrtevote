import { elections } from "@/data";
import Link from "next/link";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-4">
      <div className="flex flex-col p-2 bg-bgSoft">
        <h1 className="p-2 text-xl font-bold">Elections</h1>
        <hr className="mb-2 border-t border-neutral-700" />
        <div className="grid grid-cols-5 gap-2 px-2 mx-2">
          <div className="flex w-full col-span-2">
            <h2 className="text-xl font-bold">Title</h2>
          </div>
          <div className="flex w-full col-span-2 gap-2">
            <p>Date Range</p>
          </div>
          <div className="flex w-full col-span-1 ">
            <p className="w-full text-center">Percent Complete</p>
          </div>
        </div>
        {elections.map((election) => {
          return (
            <Link
              href={`/elections/${election.id}`}
              key={election.id}
              className="w-full hover:text-textSoft"
            >
              <div className="grid items-center grid-cols-5 gap-1 p-2 m-2 rounded-xl bg-neutral-800">
                <div className="flex flex-col w-full col-span-2">
                  <h2 className="text-xl font-bold">{election.title}</h2>
                  <p>{election.status}</p>
                </div>
                <div className="flex w-full col-span-2 gap-2">
                  <p>{election.startDate}</p>
                  <p>{election.endDate}</p>
                </div>
                <div className="flex w-full col-span-1 ">
                  <p className="w-full text-center">0%</p>
                </div>
              </div>
            </Link>
          );
        })}
        <div className="flex items-center justify-center w-full">
          <MdArrowLeft size={40} /> page 1 of 5 <MdArrowRight size={40} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
