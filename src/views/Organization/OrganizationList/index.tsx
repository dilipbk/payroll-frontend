import { AdaptiveCard, Container } from '@/components/shared'
import OrganizationListTable from './components/OrganizationList'
import OrganizationListActionTools from './components/OrganizationListActionTools'
import OrganizationListTableTools from './components/OrganizationListTableTools'
import { useState } from 'react'
import { TableQueries } from '../types'

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
                            <h3>Companies</h3>
                            <OrganizationListActionTools />
                        </div>
                        <OrganizationListTableTools
                            tableData={tableData}
                            setTableData={setTableData}
                        />
                        <OrganizationListTable
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
