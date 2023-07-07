'use client';

import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  console.log(messages);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold">My GPT</h1>
      <p className="text-2xl">my personal assistant</p>
      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {messages.length > 0
          ? messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </div>
          ))
          : null}

        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </main>
  );
}
