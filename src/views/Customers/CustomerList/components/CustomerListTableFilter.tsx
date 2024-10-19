import { useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import { TbFilter } from 'react-icons/tb'

const CustomerListTableFilter = () => {
    const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false)

    return (
        <>
            <div className="flex gap-2">
                <Button
                    icon={<TbFilter />}
                    onClick={() => setDialogIsOpen(true)}
                >
                    Filter
                </Button>
            </div>
            <Dialog
                isOpen={dialogIsOpen}
                onClose={() => setDialogIsOpen(false)}
                onRequestClose={() => setDialogIsOpen(false)}
            >
                <h4 className="mb-4">Filter</h4>
                <div>filter columns</div>
            </Dialog>
        </>
    )
}

export default CustomerListTableFilter
