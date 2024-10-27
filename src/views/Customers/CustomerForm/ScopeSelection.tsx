import Card from '@/components/ui/Card'
import Select from '@/components/ui/Select'
import { FormItem } from '@/components/ui/Form'
import { countryList } from '@/constants/countries.constant'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'

type ScopeSelectionProps = FormSectionBaseProps

type CompanyOption = {
    label: string
    dialCode: string
    value: string
}

const ScopeSelection = ({ control, errors }: ScopeSelectionProps) => {
    return (
        <Card>
            <h4 className="mb-6">Scope Information</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem
                    label="Client Group"
                    invalid={Boolean(errors.client_group)}
                    errorMessage={errors.client_group?.message}
                >
                    <Controller
                        name="client_group"
                        control={control}
                        render={({ field }) => (
                            <Select<CompanyOption>
                                options={countryList}
                                {...field}
                                placeholder="Select Client Group"
                                value={countryList.filter(
                                    (option) => option.value === field.value,
                                )}
                                onChange={(option) =>
                                    field.onChange(option?.value)
                                }
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Company"
                    invalid={Boolean(errors.company)}
                    errorMessage={errors.company?.message}
                >
                    <Controller
                        name="company"
                        control={control}
                        render={({ field }) => (
                            <Select<CompanyOption>
                                options={countryList}
                                {...field}
                                placeholder="Select Company"
                                value={countryList.filter(
                                    (option) => option.value === field.value,
                                )}
                                onChange={(option) =>
                                    field.onChange(option?.value)
                                }
                            />
                        )}
                    />
                </FormItem>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem
                    label="Location"
                    invalid={Boolean(errors.location)}
                    errorMessage={errors.location?.message}
                >
                    <Controller
                        name="location"
                        control={control}
                        render={({ field }) => (
                            <Select<CompanyOption>
                                options={countryList}
                                {...field}
                                placeholder="Select Location"
                                value={countryList.filter(
                                    (option) => option.value === field.value,
                                )}
                                onChange={(option) =>
                                    field.onChange(option?.value)
                                }
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Sub Location"
                    invalid={Boolean(errors.sub_location)}
                    errorMessage={errors.sub_location?.message}
                >
                    <Controller
                        name="sub_location"
                        control={control}
                        render={({ field }) => (
                            <Select<CompanyOption>
                                options={countryList}
                                {...field}
                                placeholder="Select Sub Location"
                                value={countryList.filter(
                                    (option) => option.value === field.value,
                                )}
                                onChange={(option) =>
                                    field.onChange(option?.value)
                                }
                            />
                        )}
                    />
                </FormItem>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem
                    label="Department"
                    invalid={Boolean(errors.department)}
                    errorMessage={errors.department?.message}
                >
                    <Controller
                        name="department"
                        control={control}
                        render={({ field }) => (
                            <Select<CompanyOption>
                                options={countryList}
                                {...field}
                                placeholder="Select Department"
                                value={countryList.filter(
                                    (option) => option.value === field.value,
                                )}
                                onChange={(option) =>
                                    field.onChange(option?.value)
                                }
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Designation"
                    invalid={Boolean(errors.designation)}
                    errorMessage={errors.designation?.message}
                >
                    <Controller
                        name="designation"
                        control={control}
                        render={({ field }) => (
                            <Select<CompanyOption>
                                options={countryList}
                                {...field}
                                placeholder="Select Designation"
                                value={countryList.filter(
                                    (option) => option.value === field.value,
                                )}
                                onChange={(option) =>
                                    field.onChange(option?.value)
                                }
                            />
                        )}
                    />
                </FormItem>
            </div>
            <div>
                <FormItem
                    label="Office Shift"
                    invalid={Boolean(errors.office_shift)}
                    errorMessage={errors.office_shift?.message}
                >
                    <Controller
                        name="office_shift"
                        control={control}
                        render={({ field }) => (
                            <Select<CompanyOption>
                                options={countryList}
                                {...field}
                                placeholder="Select Office Shift"
                                value={countryList.filter(
                                    (option) => option.value === field.value,
                                )}
                                onChange={(option) =>
                                    field.onChange(option?.value)
                                }
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default ScopeSelection
