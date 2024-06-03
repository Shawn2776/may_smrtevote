"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const DashboardElectionsTable = (inElections) => {
  const [elections, setElections] = useState(inElections.elections);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const itemsPerPage = 3;
  const totalPages = Math.ceil(elections.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    const sortedElections = [...elections].sort((a, b) => {
      if (field === "title") {
        return order === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (field === "dateRange") {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return order === "asc" ? dateA - dateB : dateB - dateA;
      } else if (field === "percent") {
        return order === "asc" ? a.percent - b.percent : b.percent - a.percent;
      }
      return 0;
    });

    setElections(sortedElections);
    setCurrentPage(1); // Reset to first page after sorting
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentElections = elections.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getSortSymbol = (field) => {
    if (sortField === field) {
      return sortOrder === "asc" ? " ▲" : " ▼";
    }
    return "";
  };

  return (
    <div className="flex flex-col p-2 bg-bgSoft">
      <h1 className="p-2 text-xl font-bold">Elections</h1>
      <hr className="mb-2 border-t border-neutral-700" />
      <div className="grid grid-cols-5 gap-2 px-2 mx-2">
        <div className="flex w-full col-span-2">
          <h2
            className="font-bold cursor-pointer"
            onClick={() => handleSort("title")}
          >
            Title{getSortSymbol("title")}
          </h2>
        </div>
        <div className="flex w-full col-span-2 gap-2">
          <p className="cursor-pointer" onClick={() => handleSort("dateRange")}>
            Date Range{getSortSymbol("dateRange")}
          </p>
        </div>
        <div className="flex w-full col-span-1">
          <p className="cursor-pointer" onClick={() => handleSort("percent")}>
            % Complete{getSortSymbol("percent")}
          </p>
        </div>
      </div>
      <div className="min-h-[250px]">
        {" "}
        {/* Set the minimum height */}
        {currentElections.map((election) => {
          return (
            <Link
              href={`/elections/${election.id}`}
              key={election.id}
              className="w-full hover:text-textSoft"
            >
              <div className="grid items-center grid-cols-5 gap-1 p-2 m-2 rounded-xl bg-neutral-800">
                <div className="flex flex-col w-full col-span-2">
                  <h2 className="text-xl font-bold truncate text-ellipsis">
                    {election.title}
                  </h2>
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
      </div>
      <div className="flex items-center justify-center w-full">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          <MdArrowLeft size={40} />
        </button>
        <span>
          page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <MdArrowRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default DashboardElectionsTable;
