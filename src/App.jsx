import React, { useState } from "react";
import Card from "./Card";
import styles from "./styles";

function App() {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [error, setError] = useState(false);
  const [submited, setSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);
    setSubmited(false);

    const regexNombre = /^(?!\s)[^\s]{3,}$/;
    const regexMarca = /^.{6,}$/;

    if (!regexNombre.test(nombre)) {
      setError(true);
      return;
    }

    if (!regexMarca.test(marca)) {
      setError(true);
      return;
    }
    setSubmited(true);
  };

  const handleReset = () => {
    setNombre("");
    setMarca("");
    setError(false);
    setSubmited(false);
  }

  const handleChange = (e) => {
    if (e.target.id === "nombre") {
      setNombre(e.target.value);
    }
    if (e.target.id === "car") {
      setMarca(e.target.value);
    }
  };
  return (
    <div style={styles.app}>
      <h1 style={styles.title}>Escribe tu marca de coches favorita</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          onChange={handleChange}
          type="text"
          id="nombre"
          placeholder="Ingresa tu nombre"
          name="nombre"
          value={nombre}
          style={styles.input}
        />
        <input
          onChange={handleChange}
          type="text"
          id="car"
          placeholder="Ingresa la marca"
          name="car"
          value={marca}
          style={styles.input}
        />

        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>
            Enviar
          </button>
          <button type="button" onClick={handleReset} style={styles.buttonReset}>
            Reiniciar form
          </button>
        </div>
      </form>

      {error && (
        <p style={styles.errorMessage}>
          Por favor, chequea que la información sea correcta
        </p>
      )}

      {submited && <Card nombre={nombre} marca={marca} />}
    </div>
  )
}

export default App;
