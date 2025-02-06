import Image from 'next/image';

export default function Navbar() {
    return (
      <header className="bg-white shadow">
        <div className="flex gap-2 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div>
            <Image
            src="/Logoicon.png"
            alt="Comforty"
            width={40}
            height={40} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Comforty</h1>
        </div>
      </header>
    );
  }