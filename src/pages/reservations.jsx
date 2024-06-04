import ReservationsDataTable from "../components/reservations/reservations-data-table"
import Loader from "../components/common/loader"
import { useGetReservationsQuery } from "../features/reservations/reservations-api-slice"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Error from "@/components/common/error"

const Reservations = () => {
    const {
        data: reservations,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetReservationsQuery()

    let content;
    if (isLoading) {
        content = <Loader />;
    } else if (isSuccess) {
        content = (
            <Card className="w-full h-full">
                <CardHeader>
                    <CardTitle>Reservations</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <ReservationsDataTable data={reservations.data} />
                </CardContent>
            </Card>
        )
    } else if (isError) {
        content = <Error />;
    }

    return content
}

export default Reservations