import { getVotersByUserId } from "@/actions/voters";
import VoterList from "@/components/voter-list";
import React from "react";

const VoterPage = async () => {
  const voters = await getVotersByUserId();
  return (
    <div>
      <VoterList voters={voters} />
    </div>
  );
};

export default VoterPage;
