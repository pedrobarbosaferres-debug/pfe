import { useState, useEffect } from "react";

const exemploFeriados = [
  {
    "date": "2026-01-01",
    "name": "Confraternização mundial",
    "type": "national"
  },
  {
    "date": "2026-02-17",
    "name": "Carnaval",
    "type": "national"
  },
  {
    "date": "2026-04-03",
    "name": "Sexta-feira Santa",
    "type": "national"
  },
  {
    "date": "2026-04-05",
    "name": "Páscoa",
    "type": "national"
  },
  {
    "date": "2026-04-21",
    "name": "Tiradentes",
    "type": "national"
  },
  {
    "date": "2026-05-01",
    "name": "Dia do trabalho",
    "type": "national"
  },
  {
    "date": "2026-06-04",
    "name": "Corpus Christi",
    "type": "national"
  },
  {
    "date": "2026-09-07",
    "name": "Independência do Brasil",
    "type": "national"
  },
  {
    "date": "2026-10-12",
    "name": "Nossa Senhora Aparecida",
    "type": "national"
  },
  {
    "date": "2026-11-02",
    "name": "Finados",
    "type": "national"
  },
  {
    "date": "2026-11-15",
    "name": "Proclamação da República",
    "type": "national"
  },
  {
    "date": "2026-11-20",
    "name": "Dia da consciência negra",
    "type": "national"
  },
  {
    "date": "2026-12-25",
    "name": "Natal",
    "type": "national"
  }
];

export default function Feriados() {
  const [feriados, setFeriados] = useState(exemploFeriados);
  const [ano, setAno] = useState(new Date().getFullYear());

  useEffect(() => {
    fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setFeriados(data))
      .catch((error) => {
        console.error("Erro ao buscar feriados:", error);
        setFeriados(exemploFeriados);
      });
  }, [ano]);

  return (
    <>
      <h1>Feriados de {ano}</h1>

      <div>
        <label>
          Ano: 
          <input
            type="number"
            value={ano}
            onChange={(e) => setAno(Number(e.target.value))}
            min="1900"
            max="2100"
          />
        </label>
      </div>

      <ul>
        {feriados.map((feriado) => (
          <li key={feriado.date}>
            <strong>{feriado.date}</strong> — {feriado.name} ({feriado.type})
          </li>
        ))}
      </ul>
    </>
  );
}
