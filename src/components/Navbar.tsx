import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Skyrim Alchemy</div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
        </li>
        <li>
          <Link href="/effects" className="hover:text-gray-300 transition-colors">Effects</Link>
        </li>
        <li>
          <Link href="/ingredients" className="hover:text-gray-300 transition-colors">Ingredients</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;