import { getVotersByUserId } from "@/actions/voters";
import VoterList from "@/components/voter-list";
import React from "react";

const VoterPage = async () => {
  const voters = await getVotersByUserId();
  return (
    <div className="min-h-screen bg-bg">
      <div className="p-5 rounded-md bg-bgSoft">
        <VoterList voters={voters} />
      </div>
    </div>
  );
};

export default VoterPage;
