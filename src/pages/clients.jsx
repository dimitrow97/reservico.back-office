import Error from "@/components/common/error"
import ClientsDataTable from "../components/clients/clients-data-table"
import Loader from "../components/common/loader"
import { useGetClientsQuery } from "../features/clients/clients-api-slice"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Clients = () => {
    const {
        data: clients,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetClientsQuery()

    let content;
    if (isLoading) {
        content = <Loader />;
    } else if (isSuccess) {
        content = (
            <Card className="w-full h-full">
                <CardHeader>
                    <CardTitle>Clients</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <ClientsDataTable data={clients.data} />
                </CardContent>
            </Card>
        )
    } else if (isError) {
        content = <Error />;
    }

    return content
}

export default Clients