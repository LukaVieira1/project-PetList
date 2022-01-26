import "./Pets.css";
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
      <div className="flex">
        {pets.map((pet) => (
          <div className="pet-card">
            <Fragment key={pet.id}>
              <div className="pet-info">
                <p>Nome: {pet.name}</p>
                <p>Raça: {pet.breed}</p>
                <p>Idade: {pet.age} anos,</p>
                <p>Especie: {pet.species}</p>
                <p>Genero: {pet.gender}</p>
              </div>
              <img src={pet.url} alt="pet" />
              <br />
            </Fragment>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pets;
