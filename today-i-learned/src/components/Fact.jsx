import { CATEGORIES } from '../App';
import VoteButton from './VoteButton';

const Fact = ({ fact, setFacts }) => {
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;
  return (
    <li className="fact">
      <p>
        {isDisputed ? <span className="disputed">[❗️ DISPUTED]</span> : null}
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          (Source)
        </a>
        <span
          className="tag"
          style={{
            backgroundColor: CATEGORIES.find(
              (category) => category.name === fact.category
            ).color,
          }}
        >
          {fact.category}
        </span>
      </p>
      <div className="vote-buttons">
        <VoteButton
          voteIcon={'👍'}
          votes={fact.votesInteresting}
          fact={fact}
          setFacts={setFacts}
          origin="votesInteresting"
        />
        <VoteButton
          voteIcon={'🤯'}
          votes={fact.votesMindblowing}
          fact={fact}
          setFacts={setFacts}
          origin="votesMindblowing"
        />
        <VoteButton
          voteIcon={'⛔️'}
          votes={fact.votesFalse}
          fact={fact}
          setFacts={setFacts}
          origin="votesFalse"
        />
      </div>
    </li>
  );
};

export default Fact;
