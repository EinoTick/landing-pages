import BentoGrid from "./components/BentoGrid";
import ActionsCard from "./components/ActionsCard";
import BellCard from "./components/BellCard";
import InboxCard from "./components/InboxCard";
import PreferencesCard from "./components/PreferencesCard";

export default function App() {
  return (
    <BentoGrid>
      {/* Row 1: Tech Stack (4-col) + Deployment Pulse (8-col) */}
      <ActionsCard />
      <BellCard />

      {/* Row 2: Project Console (8-col) + Infrastructure (4-col) */}
      <InboxCard />
      <PreferencesCard />
    </BentoGrid>
  );
}
