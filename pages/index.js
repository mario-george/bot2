import { startDiscordBot } from '../components/discord-bot';

export default function Home() {
  useEffect(() => {
    startDiscordBot();
  }, []);

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      // Your page content here...
    </div>
  );
}
