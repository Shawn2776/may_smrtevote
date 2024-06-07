import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../pagination";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import Link from "next/link";
import { MdDelete, MdMore, MdUpdate } from "react-icons/md";
import { Button } from "../button";
import Header from "./header";

const ElectionTable = ({ elections }) => {
  console.log(elections);
  return (
    <div className="w-full min-h-[600px]">
      <Header type="election" action="View all your elections" />
      <Table>
        <TableCaption>A list of your elections.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date Range</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Ballot</TableHead>
            <TableHead>% Complete</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {elections.map((election) => (
            <TableRow
              key={election.id}
              className="transition-all duration-200 ease-in-out cursor-pointer hover:bg-red-500"
            >
              <TableCell className="font-medium">{election.name}</TableCell>
              <TableCell>{`${election.electionDate}`}</TableCell>
              <TableCell>
                <span
                  className={`capitalize rounded-md px-2 py-1 ${
                    election.status === "PENDING"
                      ? "text-blue-500 bg-blue-500/20"
                      : election.status === "OPEN"
                      ? "text-emerald-500 bg-emerald-500/20"
                      : election.status === "CLOSED"
                      ? "text-red-500 bg-red-500/20"
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
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    {election.electionType === "poll"
                      ? election.Ballot.Question.length > 0
                        ? "View Questions"
                        : "Add Question"
                      : election.Ballot.Candidate.length > 0
                      ? "View Candidates"
                      : "Add Candidate"}
                  </PopoverTrigger>
                  <PopoverContent>
                    {election.Ballot.Question.length > 0
                      ? election.Ballot.Question.map((q) => (
                          <div key={q.id}>
                            <Popover>
                              <PopoverTrigger className="px-2 py-1 rounded-md hover:bg-neutral-500 hover:text-white">
                                {q.question}
                              </PopoverTrigger>
                              <PopoverContent>
                                <ul>
                                  <li>
                                    {q.option1 ? "1. " : ""}
                                    {q.option1}
                                  </li>
                                  <li>
                                    {q.option2 ? "2. " : ""}
                                    {q.option2}
                                  </li>
                                  <li>
                                    {q.option3 ? "3. " : ""}
                                    {q.option3}
                                  </li>
                                  <li>
                                    {q.option4 ? "4. " : ""}
                                    {q.option4}
                                  </li>
                                </ul>
                              </PopoverContent>
                            </Popover>
                          </div>
                        ))
                      : election.Ballot.Candidate.map((c) => (
                          <div key={c.id}>
                            <Popover>
                              <PopoverTrigger className="px-2 py-1 rounded-md hover:bg-neutral-500 hover:text-white">
                                {c.name}
                              </PopoverTrigger>
                              <PopoverContent>
                                <ul>
                                  <li>{c.position}</li>
                                  <li>{c.notes}</li>
                                </ul>
                              </PopoverContent>
                            </Popover>
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

      <div className="flex justify-center">
        <Button className="mt-16 text-white" variant="icon">
          Create New Election
        </Button>
      </div>
      <hr className="mt-4 mb-4" />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ElectionTable;
