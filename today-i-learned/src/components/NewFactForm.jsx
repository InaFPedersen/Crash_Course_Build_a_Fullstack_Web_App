import { useState } from 'react';
import { CATEGORIES } from '../App';
import supabase from '../supabase';

const isValidHttpUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};

const NewFactForm = ({ setFacts, setShowForm }) => {
  const [text, setText] = useState('');
  const [source, setSource] = useState('http://');
  const [category, setCategory] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const textLength = text.length;

  const handleSubmit = async (e) => {
    // 1. Prevent browser reload
    e.preventDefault();

    // 2. Check if the data is valid, create new fact
    if (text && isValidHttpUrl(source) && category && textLength <= 200) {
      // 3.1 Create a new fact object
      // const newFact = {
      //   id: Math.round(Math.random() * 1000000),
      //   text,
      //   source,
      //   category,
      //   votesInteresting: 0,
      //   votesMindblowing: 0,
      //   votesFalse: 0,
      //   createdIn: new Date().getFullYear(),
      // };

      // 3.2 Upload fact to Supabase and receive the new fact object
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from('facts')
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false);

      if (error) {
        console.error('Error inserting data:', error.message);
        return;
      }
      if (!error) {
        // 4. Add the new fact to the UI: add the fact to state
        setFacts((prevFacts) => [newFact[0], ...prevFacts]);
      }
      // 5. Clear the form
      setText('');
      setSource('http://');
      setCategory('');

      // 6. Close the form
      setShowForm(false);
    }
  };

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((categories) => (
          <option key={categories.name} value={categories.name}>
            {categories.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large btn-post" disabled={isUploading}>
        Post
      </button>
    </form>
  );
};

export default NewFactForm;
