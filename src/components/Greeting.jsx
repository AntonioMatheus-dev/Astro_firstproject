import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="greeting">
      <p class="greeting-message">{greeting}</p>
      <button type="button" onClick={() => setGreeting(randomMessage())}>
        Outra saudação
      </button>
    </div>
  );
}