import { Link } from 'react-router-dom';

export const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-xl font-semibold text-gray-800">Expense Tracker</span>
    </Link>
  );
};
