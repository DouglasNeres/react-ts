import DatePicker, { registerLocale } from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useFormContext } from "react-hook-form"
import ptBR from 'date-fns/locale/pt-BR'
registerLocale('ptBR', ptBR)

type Props = {
  name: string;
}

export function DateTimePicker({ name }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={new Date().setMinutes(30)}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          showTimeSelect
          locale="ptBR"
          dateFormat="Pp"
          selected={new Date(value)}
          onChange={(date: Date) => onChange(date.toISOString())}
          onKeyDown = {(e) => {
            e.preventDefault()
          }}
        />
      )}

    />
  )

}

