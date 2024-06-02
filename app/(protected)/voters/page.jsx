import { voters } from "@/data";

const VotersPage = () => {
  return (
    <div>
      {voters.map((voter) => (
        <div key={voter.id}>
          <h2>{voter.name}</h2>
          <p>{voter.email}</p>
          <p>{voter.voterKey}</p>
          <p>******</p>
          <p>
            {voter.elections.map((election, index) => (
              <div key={index}>
                <span>Election ID: {election.electionId}</span>
              </div>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VotersPage;
