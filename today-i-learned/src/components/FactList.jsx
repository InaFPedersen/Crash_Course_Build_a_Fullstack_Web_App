import Fact from './Fact';

function FactList({ facts, setFacts }) {
  if (facts.length === 0)
    return <p className="message">No facts found, create the first one</p>;

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact fact={fact} setFacts={setFacts} key={fact.id} />
        ))}
      </ul>
    </section>
  );
}

export default FactList;
