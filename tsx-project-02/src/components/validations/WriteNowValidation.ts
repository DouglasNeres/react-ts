import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const WriteNowValidationSchema = yup.object({
  destinationName: yup.string().required('Preencha seu nome completo'),
  destinationAddress: yup.string().email('Preencha com um e-mail válido').required('Preencha o e-mail'),
  dueDate: yup.string().required('Preecha a data'),
  subject: yup.string().required('Preencha com um assunto'),
  body: yup.string().required('Preencha com um conteúdo'),
})

export const WriteNowResolver = yupResolver(WriteNowValidationSchema)