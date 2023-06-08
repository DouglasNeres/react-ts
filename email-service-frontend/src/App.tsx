import { useState } from "react";
import { PrimaryInput } from "./components/Input/PrimaryInput";

import "./App.css";
import { Button } from "@chakra-ui/react";
import { useIdentityMutation } from "./hooks/useIdentityMutation";

export default function App() {
  const { mutate } = useIdentityMutation()
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const submit = () => {
    mutate({
      email,
      firstName,
      lastName: secondName
    })
  }

  return (
    <div className="container">
      <form action="">
        <div className="name-form-container">
          <PrimaryInput
            value={firstName}
            label="Primeiro Nome"
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            placeholder="Ex: João"
          />
          <PrimaryInput
            value={secondName}
            label="Segundo Nome"
            onChange={(e) => setSecondName(e.target.value)}
            name="secondName"
            placeholder="Ex: Silva"
          />
        </div>
        <PrimaryInput
          value={email}
          label="Digite seu Email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Ex: joaosilva@gmail.com"
        />
        <Button colorScheme="green" onClick={submit}>Enviar</Button>
      </form>

      <div className="product-details">
        <h2>Assinatura Mensal</h2>
        <div>
          <p>você irá pagar</p>
          <span>
            <strong>R$250</strong>,00
          </span>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit impedit maiores dolores non veritatis? Ea ad mollitia dolorem magni delectus.</p>
      </div>
    </div>
  );
}
