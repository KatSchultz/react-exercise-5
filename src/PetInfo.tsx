import { useState } from "react";

interface Pet {
  name: string;
  breed: string;
}

function PetInfo() {
  const [pet, setPet] = useState<Pet>({ name: "Buddy", breed: "Dog" });

  return (
    <section>
      <h1>Exercise 2</h1>
      <p>
        Name: {pet.name} Breed: {pet.breed}
      </p>
    </section>
  );
}

export default PetInfo;
