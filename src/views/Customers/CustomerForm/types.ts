import type { Control, FieldErrors } from 'react-hook-form'

export type OverviewFields = {
    full_name: string
    email: string
    role: string
    phone: string
}

export type AddressFields = {
    location: string
    address: string
    postcode?: string
    city?: string
}

export type CompanyFields = {
    client_group: string
    company: string
    location: string
    sub_location: string
    department: string
    designation: string
    office_shift: string
}

export type ProfileImageFields = {
    img: string
}

export type CustomerFormSchema = OverviewFields &
    CompanyFields &
    ProfileImageFields

export type FormSectionBaseProps = {
    control: Control<CustomerFormSchema>
    errors: FieldErrors<CustomerFormSchema>
}

export type RoleOption = {
    label: string
    value: string
}
