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
    location: string
    allow_client_grp?: string
    allow_company?: string
    allow_loc?: string
    allow_sub_loc?: string
    allow_employee?: string
    auto_client_grp?: string
    auto_company?: string
    auto_location?: string
    auto_sub_location?: string
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
