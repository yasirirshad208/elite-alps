import { ReactNode } from 'react'
import {
  SubmitHandler,
  UseFormReturn,
  useForm,
  FieldValues,
  UseFormProps,
} from 'react-hook-form'

interface FormProps<T extends FieldValues> extends Partial<UseFormProps<T>> {
  onSubmit: SubmitHandler<T>
  children: (form: UseFormReturn<T>) => ReactNode
}

export const Form = <T extends FieldValues>({
  onSubmit,
  children,
  defaultValues,
}: FormProps<T>) => {
  const methods = useForm<T>({ defaultValues })

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-2">
      {children(methods)}
    </form>
  )
}
