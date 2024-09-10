import { useState } from 'react';
import supabase from '../supabase';

function VoteButton({ voteIcon, votes, fact, setFacts, origin }) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleVote = async (originName) => {
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from('facts')
      .update({
        [originName]: fact[originName] + 1,
      })
      .eq('id', fact.id)
      .select();
    setIsUpdating(false);

    if (error) {
      console.error('Error updating data:', error.message);
      return;
    }

    if (!error) {
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
    }
  };

  return (
    <button onClick={() => handleVote(origin)} disabled={isUpdating}>
      {voteIcon} <strong>{votes}</strong>
    </button>
  );
}

export default VoteButton;
