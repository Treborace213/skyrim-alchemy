export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p className="mb-3">
          Skyrim Alchemy is a utility tool designed to enhance your potion-brewing experience in{' '}
          <em>The Elder Scrolls V: Skyrim</em>. Whether you're crafting a specific effect or trying to make the most valuable potion possible, this tool aims to make the process faster and easier.
        </p>
        <p>
          The app is designed mobile-first but works well on desktop too. A dedicated desktop layout is planned for future updates.
        </p>
      </section>

      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Features</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>Ingredient browser: view all ingredients along with their four alchemical effects and other details</li>
          <li>Effect browser: view each effect, its description, and properties</li>
          <li>Effect search: find ingredients that share specific effects</li>
        </ul>
      </section>

      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Feature Roadmap</h1>
        <p className="mb-3">Coming soon:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Potion combo finder: discover ingredient combinations for specific effect combos</li>
          <li>Potion strength calculator: calculate effectiveness based on your Alchemy skill, perks and equipment</li>
          <li>Profit optimizer: identify the most valuable potions from selected ingredients</li>
          <li>Dedicated desktop layout: improved interface for desktop users</li>
        </ul>
      </section>

      <footer className="mt-6 italic text-center">
        <p>Feedback is welcome!</p>
      </footer>
    </div>
  );
}