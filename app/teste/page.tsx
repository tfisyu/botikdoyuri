import prisma from "@/lib/prisma";
import TheWinner from "./Numbers";

export default async function WinnerNumberr() {
  const getNumbers = await prisma.participant.findMany({
    select: {
      number: true,
    },
  });

	const intonumbers = getNumbers.map((number) => (
		number.number
	))

	const transform = intonumbers.flat(1)
	const nnumber = transform.map(Number)

	return (
    <div>
      <TheWinner winnerNumber={nnumber}/>
    </div>
  )
}