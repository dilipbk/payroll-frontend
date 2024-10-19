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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <CustomerListSearch onInputChange={handleInputChange} />
            <CustomerListTableFilter />
        </div>
    )
}

export default CustomersListTableTools
