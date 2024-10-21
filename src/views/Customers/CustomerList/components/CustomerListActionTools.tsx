import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus, TbFileImport } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { CSVLink } from 'react-csv'
import { list } from './CustomerList'
import { LiaColumnsSolid } from 'react-icons/lia'

const CustomerListActionTools = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <Button
                size="sm"
                className="text-sm font-medium rounded-lg"
                onClick={() => navigate('/concepts/customers/customer-create')}
            >
                <LiaColumnsSolid size={22} />
            </Button>
            <Button
                icon={<TbFileImport className="text-sm" />}
                size="sm"
                className="text-sm font-medium rounded-lg"
                onClick={() => navigate('/concepts/customers/customer-create')}
            >
                Import
            </Button>
            <CSVLink className="w-full" filename="customerList.csv" data={list}>
                <Button
                    size="sm"
                    className="text-sm font-medium rounded-lg"
                    icon={<TbCloudDownload className="text-sm" />}
                >
                    Download
                </Button>
            </CSVLink>
            <Button
                variant="solid"
                icon={<TbUserPlus className="text-sm" />}
                size="sm"
                className="text-sm font-medium rounded-lg"
                onClick={() => navigate('add')}
            >
                Add new
            </Button>
        </div>
    )
}

export default CustomerListActionTools
