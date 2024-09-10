import { CATEGORIES } from '../App';
import Category from './Category';

const CategoryFilter = ({ setCurrentCategory }) => {
  return (
    <aside>
      <ul>
        <li className="category">
          <button
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory('all')}
          >
            All
          </button>
        </li>
        {CATEGORIES.map((category) => (
          <Category
            category={category}
            key={category.name}
            setCurrentCategory={setCurrentCategory}
          />
        ))}
      </ul>
    </aside>
  );
};

export default CategoryFilter;
