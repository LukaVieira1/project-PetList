import { useEffect } from "react";
import { listPets, createPet } from "../services/pets";

function PetForm() {
  useEffect(() => {
    const request = async () => {
      const response = await listPets();
    };
    request();
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const breed = formData.get("breed");
    const age = formData.get("age");
    const species = formData.get("species");
    const gender = formData.get("gender");
    const url = formData.get("url");
    const data = {
      name,
      breed,
      age,
      species,
      gender,
      url,
    };
    await createPet(data);
    event.target.reset();
  };
  return (
    <div>
      <t1>Insira seu pet na lista</t1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome: <input type="text" name="name" />
        </label>
        <label>
          Raça: <input type="text" name="breed" />
        </label>
        <label>
          Idade: <input type="number" name="age" />
        </label>
        <select name="species">
          <option value="Gato">Gato</option>
          <option value="Cachorro">Cachorro</option>
        </select>
        <select name="gender">
          <option value="Macho">Macho</option>
          <option value="Fêmea">Fêmea</option>
        </select>
        <label>
          Imagem do pet (url): <input type="text" name="url" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default PetForm;
