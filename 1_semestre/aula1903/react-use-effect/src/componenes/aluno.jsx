import { useEffect, useState } from "react";

export default function Aluno() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);

  useEffect(() => {
    console.log("App renderizado");
  });

  useEffect(() => {
    console.log("App montado");
  }, []);

  useEffect(() => {
    console.log("O nome mudou para ", nome);
  }, [nome]);

  useEffect(() => {
    console.log("A idade mudou para ", idade);
  }, [idade]);

  return (
    <>
      <form action="">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </form>
    </>
  );
}