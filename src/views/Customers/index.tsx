import { AdaptiveCard, Container } from '@/components/shared'
import CustomerListTable from './CustomerList'
import CustomerListActionTools from './CustomerList/CustomerListActionTools'
import CustomersListTableTools from './CustomerList/CustomerListTableTools'
import { useState } from 'react'
import { TableQueries } from './types'

const EmployeeList = () => {
    const [tableData, setTableData] = useState<TableQueries>({
        pageIndex: 1,
        pageSize: 5,
    })

    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Customers</h3>
                            <CustomerListActionTools />
                        </div>
                        <CustomersListTableTools
                            tableData={tableData}
                            setTableData={setTableData}
                        />
                        <CustomerListTable
                            tableData={tableData}
                            setTableData={setTableData}
                        />
                    </div>
                </AdaptiveCard>
            </Container>
        </>
    )
}

export default EmployeeList
