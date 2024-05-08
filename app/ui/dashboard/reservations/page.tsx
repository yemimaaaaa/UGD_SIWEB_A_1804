import { fetchLatestReservations } from "@/app/lib/data";
import LatestReservation from "../latest-reservations";
export default async function Page() {
    const latestReservations = await fetchLatestReservations();
    return (
        <main>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        <LatestReservation latestReservations={latestReservations} />
      </div>
        </main>
        );
}