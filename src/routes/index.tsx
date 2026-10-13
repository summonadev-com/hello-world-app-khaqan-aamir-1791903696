import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-900 mb-4">Hello Khaqan</h1>
        <p className="text-xl text-indigo-700">Welcome to your app</p>
      </div>
    </div>
  );
}
