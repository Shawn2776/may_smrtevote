import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import Header from "./ui/dashboard/header";

const VoterList = ({ voters }) => {
  return (
    <div className="w-full min-h-[600px]">
      <Header type="voter" action="View all your voters" />
      <Table>
        <TableCaption>A list of your voters.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Voter ID</TableHead>
            <TableHead>Voter Key</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {voters.map((voter) => (
            <TableRow key={voter.id}>
              <TableCell className="font-medium">{voter.name}</TableCell>
              <TableCell className="font-medium">{voter.email}</TableCell>
              <TableCell>{voter.voterId}</TableCell>
              <TableCell>{voter.voterKey}</TableCell>
              <TableCell>
                <Button variant="danger">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VoterList;
