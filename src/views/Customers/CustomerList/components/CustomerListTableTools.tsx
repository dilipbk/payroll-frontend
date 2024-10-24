import CustomerListSearch from './CustomerListSearch'
// import CustomerTableFilter from './CustomerListTableFilter'
import { TableQueries } from '../../types'
import CustomerListTableFilter from './CustomerListTableFilter'

const CustomersListTableTools = ({
    tableData,
    setTableData,
}: {
    tableData: TableQueries
    setTableData: React.Dispatch<React.SetStateAction<TableQueries>>
}) => {
    const handleInputChange = (val: string) => {
        const newTableData = structuredClone(tableData)
        newTableData.query = val
        newTableData.pageIndex = 1
        if (typeof val === 'string' && val.length > 1) {
            setTableData(newTableData)
        }

        if (typeof val === 'string' && val.length === 0) {
            setTableData(newTableData)
        }
    }

    return (
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-3">
            <div>
                <CustomerListTableFilter />
            </div>

            <div className="grow">
                <CustomerListSearch onInputChange={handleInputChange} />
            </div>
        </div>
    )
}

export default CustomersListTableTools
