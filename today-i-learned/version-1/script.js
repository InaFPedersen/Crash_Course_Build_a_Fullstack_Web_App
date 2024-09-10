///
/// Hardcoded data
///
const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source:
      'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

///
/// Selecting DOM elements
///
const shareBtn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const postBtn = document.querySelector('.btn-post');
const factsList = document.querySelector('.facts-list');

///
/// Load data from Supabase
///

const loadfacts = async () => {
  const response = await fetch(
    'https://rfqsrqsjuzwvniswrxkd.supabase.co/rest/v1/facts',
    {
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmcXNycXNqdXp3dm5pc3dyeGtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1OTkzNzIsImV4cCI6MjA0MTE3NTM3Mn0.nW9Ww2L_nLk6_xyp4NjAA1d35nl0scmmkVCccjiXtdk',
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmcXNycXNqdXp3dm5pc3dyeGtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1OTkzNzIsImV4cCI6MjA0MTE3NTM3Mn0.nW9Ww2L_nLk6_xyp4NjAA1d35nl0scmmkVCccjiXtdk`,

        // apikey: process.env.SUPABASE_KEY,
        // authorization: `Bearer ${process.env.SUPABASE_KEY}`,
      },
    }
  );
  const data = await response.json();
  const filteredData = data.filter((fact) => fact.category === 'technology');
  createFactsList(data);
};
loadfacts();

///
/// Create DOM elements: Render facts in list
///
factsList.innerHTML = '';

function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class="fact">
    <p>${fact.text}
      <a class="source" href=${fact.source} target="_blank">(Source)</a> 
      <span class="tag" style="background-color: ${
        CATEGORIES.find((category) => category.name === fact.category).color
      }">${fact.category}</span>
    </p>
    <div class="vote-buttons">
      <button>👍 
        <strong>${fact.votesInteresting}</strong>
      </button>
      <button>🤯 
        <strong>${fact.votesMindblowing}</strong>
      </button>
      <button>⛔️ 
        <strong>${fact.votesFalse}</strong>
      </button>
    </div> 
  </li>`
  );
  const htmlJoined = htmlArray.join('');

  factsList.insertAdjacentHTML('afterbegin', htmlJoined);
}

///
/// Toggle form visibility
///
shareBtn.addEventListener('click', () => {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    shareBtn.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    shareBtn.textContent = 'Share a fact';
  }
});

postBtn.addEventListener('click', () => {
  form.classList.add('hidden');
  shareBtn.textContent = 'Share a fact';
});

/*
Testing code

let votesInteresting = 0;
let votesMindblowing = 0;
let votesFalse = 0;

const calculateFactYear = (year) => {
  const currentYear = new Date().getFullYear();
  const yearsAgo = currentYear - year;
  console.log(`The fact was created ${yearsAgo} years ago`);
};

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((element) => element.name);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map((element) => calculateFactYear(element.createdIn));

console.log(factAges)

*/
