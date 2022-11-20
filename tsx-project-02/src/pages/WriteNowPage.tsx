import { Button, DateTimePicker, Nav, RichInput } from "components";
import { FormProvider, useForm } from "react-hook-form";

export function WriteNowPage() {
    const formMethods= useForm()
    const { register, handleSubmit } = formMethods

    function onSubmit(values:any){
        console.log(values);
        
    }

    return (
        <>
            <Nav />
            <div className="container">
                <h1>Escrever Agora</h1>

            <FormProvider {...formMethods}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="destinationName">Nome Completo</label>
                    <input {...register('destinationName')} type="text" />
                
                    <label htmlFor="destinationAddress">E-mail</label>
                    <input {...register('destinationAddress')} type="email" />
                
                    <label htmlFor="dueDate">Data</label>
                    <DateTimePicker name="dueDate" />
                
                    <label htmlFor="subject">Assunto</label>
                    <input {...register('subject')} type="text" />

                    <label htmlFor="body">Mensagem</label>
                    <RichInput name="body" />
                    <Button type="submit" variant="primary">Enviar</Button>
                </form>
            </FormProvider>
            
            </div>
        </>
    )
}