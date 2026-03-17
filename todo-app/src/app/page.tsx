export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="w-full max-w-xl px-6 py-16">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Todo App
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Add, complete, and delete your tasks.
        </p>
      </main>
    </div>
  );
}
