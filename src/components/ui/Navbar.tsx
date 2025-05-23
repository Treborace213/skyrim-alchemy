import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav
      /* Do not change the height with tailwind. Use --navbar-height. */
      className="bg-menu px-3 flex justify-between items-center sticky top-0 z-100 mb-4 space-x-6"
      style={{ height: 'var(--navbar-height' }}
    >
      <div className="text-xl font-bold text-center">Skyrim Alchemy</div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-fg-tint transition-colors">Home</Link>
        </li>
        <li>
          <Link href="/effects" className="hover:text-fg-tint transition-colors">Effects</Link>
        </li>
        <li>
          <Link href="/ingredients" className="hover:text-fg-tint transition-colors">Ingredients</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;