import { useEffect, useState, Fragment } from "react";

import { listPets } from "../services/pets";

const Pets = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const request = async () => {
      const { data } = await listPets();
      console.log(data);
      setPets(data.pets);
    };
    request();
  }, []);

  return (
    <>
      {pets.map((pet) => (
        <Fragment key={pet.id}>
          <p>
            nome: {pet.name}, raça: {pet.breed}, idade: {pet.age} anos, especie:{" "}
            {pet.species}, genero: {pet.gender}
          </p>
          <img src={pet.url} alt="pet" />
          <br />
        </Fragment>
      ))}
    </>
  );
};

export default Pets;
