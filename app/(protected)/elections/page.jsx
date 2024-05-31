import React from "react";
import { elections } from "@/data/";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdDelete, MdMore, MdUpdate } from "react-icons/md";

const ElectionsPage = () => {
  return (
    <div className="min-h-screen bg-bg">
      <div className="p-5 rounded-md bg-bgSoft">
        <Table>
          <TableCaption>A list of your elections.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Date Range</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Candidates</TableHead>
              <TableHead>% Complete</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {elections.map((election) => (
              <TableRow key={election.id}>
                <TableCell className="font-medium">{election.title}</TableCell>
                <TableCell>{`${election.startDate} - ${election.endDate}`}</TableCell>
                <TableCell>
                  <span
                    className={`capitalize rounded-md px-2 py-1 ${
                      election.status === "upcoming"
                        ? "text-blue-500 bg-blue-500/20"
                        : election.status === "open"
                        ? "text-emerald-500 bg-emerald-500/20"
                        : ""
                    }`}
                  >
                    {election.status}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="overflow-hidden text-ellipsis max-w-[200px] flex truncate break-all">
                    {election.description} ...
                  </span>
                </TableCell>
                <TableCell className="items-center text-center">
                  <Popover>
                    <PopoverTrigger>
                      {election.candidates.length}
                    </PopoverTrigger>
                    <PopoverContent>
                      {election.candidates.map((candidate) => (
                        <div
                          key={candidate.id}
                          className="flex items-center px-1 space-x-1 rounded-md cursor-pointer hover:bg-bg hover:text-white hover:font-medium"
                        >
                          <Link href={`/candidates/${candidate.id}`}>
                            {candidate.name}
                          </Link>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
                <TableCell className="text-center">0%</TableCell>
                <TableCell className="flex items-center justify-center h-full gap-1 mt-2 text-xl ">
                  <MdDelete className="h-full" />
                  <MdUpdate />
                  <MdMore className="rotate-180" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* <hr className="my-4 border-4 text-bgSoft border-bgSoft" /> */}
      <Link href="/elections/new">
        <div className="flex justify-center p-2 mt-4 border rounded-md bg-bgSoft hover:bg-textSoft hover:text-black border-textSoft">
          <span>Create New Election</span>
        </div>
      </Link>
    </div>
  );
};

export default ElectionsPage;
