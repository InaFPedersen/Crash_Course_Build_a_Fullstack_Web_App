const Header = ({ showForm, setShowForm }) => {
  const appTitle = 'Today I Learned!';

  return (
    <header className="header">
      <div className="logo">
        <img
          src="logo.png"
          width="68px"
          height="68px"
          alt="Today I Learned logo"
        />
        <h1>{appTitle}</h1>
      </div>
      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? 'Close' : 'Share a fact'}
      </button>
    </header>
  );
};

export default Header;
