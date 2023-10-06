import Image from 'next/image'
import Logs from '../components/Logs';  // Adjust the path according to your folder structure

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* ... rest of your existing code ... */}

      {/* Place the Logs component wherever you want it to render */}
      <Logs />

      {/* ... rest of your existing code ... */}
    </main>
  );
}