import prisma from "@/lib/prisma";
import TheWinnerName from "./names";
import AddParticipant from '../components/addParticipant';

export default async function SettingNames() {
  const getNames = await prisma.participant.findMany({
    select: {
      name: true,
      id: true
    },
  });

  const intonumbers = getNames.map((name) => (
    name.name
  ))

  return (
    <div>
      <TheWinnerName winnerName={intonumbers} />
    </div>
  )
}