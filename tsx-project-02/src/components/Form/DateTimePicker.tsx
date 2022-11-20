import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useFormContext } from "react-hook-form"

type Props ={
  name: string;
}

export function DateTimePicker({name}: Props) {
  const { control } = useFormContext()

  return (
    <Controller
    name={name}
      control={control}
      render={({field: {onChange, value}}) => (
          <DatePicker
            selected={value}
            onChange={(date: Date) => onChange(date)}
        />
      )}

    />
  )

}

