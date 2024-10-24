import DataTable, {
    OnSortParam,
    ColumnDef,
    Row,
} from '@/components/shared/DataTable'
import type { TableQueries, User } from '../types'
import { useEffect, useMemo, useState } from 'react'
import { Avatar, Tag, Tooltip } from '@/components/ui'
import { Link, useNavigate } from 'react-router-dom'
import { TbEye, TbPencil } from 'react-icons/tb'

// const statusColor: Record<string, string> = {
//     active: 'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900',
//     blocked: 'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900',
// }

// const NameColumn = ({ row }: { row }) => {
//     return (
//         <div className="flex items-center">
//             <Avatar size={40} shape="circle" src={row.img} />
//             <Link
//                 className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
//                 to={`/concepts/customers/customer-details/${row.id}`}
//             >
//                 {row.name}
//             </Link>
//         </div>
//     )
// }

const ActionColumn = ({
    onEdit,
    onViewDetail,
}: {
    onEdit: () => void
    onViewDetail: () => void
}) => {
    return (
        <div className="flex items-center gap-3">
            <Tooltip title="Edit">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onEdit}
                >
                    <TbPencil />
                </div>
            </Tooltip>
            <Tooltip title="View">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onViewDetail}
                >
                    <TbEye />
                </div>
            </Tooltip>
        </div>
    )
}

const UserList = ({
    tableData,
    setTableData,
}: {
    tableData: TableQueries
    setTableData: React.Dispatch<React.SetStateAction<TableQueries>>
}) => {
    const navigate = useNavigate()

    const [selectedCustomer, setSelectedCustomer] = useState<User[]>([])
    const [rowData, setRowData] = useState<User[]>([])

    useEffect(() => {
        if (tableData?.pageIndex && tableData?.pageSize) {
            const start = (tableData?.pageIndex - 1) * tableData?.pageSize
            const end = tableData?.pageIndex * tableData?.pageSize
            // const filtered = list?.slice(start, end)
            // setRowData(filtered)
        } else {
            // setRowData(list)
        }
    }, [tableData])

    useEffect(() => {}, [])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsLoading(false)
    //     }, 0)

    //     return () => clearTimeout(timer)
    // }, [])

    const handleEdit = (user: User) => {
        navigate(`/concepts/customers/customer-edit/${user.id}`)
    }

    const handleViewDetails = (user: User) => {
        navigate(`/concepts/customers/customer-details/${user.id}`)
    }

    const handleRowSelect = (checked: boolean, row: User) => {
        const isPresent = selectedCustomer?.find((item) => item?.id === row?.id)

        if (isPresent) {
            const filteredList = selectedCustomer?.filter(
                (item) => item?.id !== row?.id,
            )
            setSelectedCustomer(filteredList)
        } else {
            setSelectedCustomer([...selectedCustomer, row])
        }
    }

    const handleSetTableData = (data: TableQueries) => {
        setTableData(data)
        if (selectedCustomer.length > 0) {
            setSelectedCustomer([])
        }
    }

    const handlePaginationChange = (page: number) => {
        const newTableData = structuredClone(tableData)
        newTableData.pageIndex = page
        handleSetTableData(newTableData)
    }

    const handleSelectChange = (value: number) => {
        const newTableData = structuredClone(tableData)
        newTableData.pageSize = Number(value)
        newTableData.pageIndex = 1
        handleSetTableData(newTableData)
    }

    const handleSort = (sort: OnSortParam) => {
        const newTableData = structuredClone(tableData)
        newTableData.sort = sort
        handleSetTableData(newTableData)
    }

    const handleAllRowSelect = (checked: boolean, rows: Row<User>[]) => {
        if (checked) {
            const originalRows = rows.map((row) => row.original)
            setSelectedCustomer(originalRows)
        } else {
            setSelectedCustomer([])
        }
    }

    const columns: ColumnDef<User>[] = useMemo(
        () => [
            {
                header: 'Name',
                accessorKey: 'name',
                cell: (props) => {
                    return (
                        <span>
                            ${props.row.first_name} {props.row.last_name}
                        </span>
                    )
                },
            },
            {
                header: 'Username',
                accessorKey: 'username',
            },
            {
                header: 'Email',
                accessorKey: 'email',
            },
            {
                header: 'Role',
                accessorKey: 'role',
            },
            {
                header: 'Status',
                accessorKey: 'status',
            },
            {
                header: 'Last Login',
                accessorKey: 'last_login',
            },
            {
                header: '',
                id: 'action',
                cell: (props) => (
                    <ActionColumn
                        onEdit={() => handleEdit(props.row.original)}
                        onViewDetail={() =>
                            handleViewDetails(props.row.original)
                        }
                    />
                ),
            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    )

    return (
        <DataTable
            selectable
            columns={columns}
            data={rowData}
            noData={false && !rowData?.length}
            loading={false}
            skeletonAvatarColumns={[0]}
            skeletonAvatarProps={{ width: 28, height: 28 }}
            pagingData={{
                total: list.length,
                pageIndex: tableData?.pageIndex as number,
                pageSize: tableData?.pageSize as number,
            }}
            checkboxChecked={(row) =>
                selectedCustomer.some((selected) => selected.id === row.id)
            }
            onPaginationChange={handlePaginationChange}
            onSelectChange={handleSelectChange}
            onSort={handleSort}
            onCheckBoxChange={handleRowSelect}
            onIndeterminateCheckBoxChange={handleAllRowSelect}
        />
    )
}

export default UserList
