const styles = {
  app: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "right",
    gap: "10px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  buttonReset: {
    backgroundColor: "#f44336",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  errorMessage: {
    color: "#f44336",
    marginTop: "20px",
    fontSize: "1rem",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    width: "100%",
    maxWidth: "400px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#333",
  },
  cardText: {
    fontSize: "1rem",
    color: "#666",

    span{
      color: "#4CAF50",
    }
  },
};

export default styles;