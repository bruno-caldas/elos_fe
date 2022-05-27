// import "./App.css";

import { useState, useEffect } from "react";


const url = "http://127.0.0.1:8000/doadores/";

//1 - Get data from API
function Doadores() {
  const [cadastros, setCadastros] = useState([]);
  const [celular, setCelular] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dt_nasc, setDataDeNascimento] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [intencao, setIntencao] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setCadastros(data);
    }
    fetchData();
  }, []);

  //2 - Add data to API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cadastro = {
        nome,
        sobrenome,
        dt_nasc,
        endereco,
        numero,
        complemento,
        celular,
        intencao,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cadastro),
    });

    //3 - Dynamic load
    const addCadastro = await res.json();

    setCadastros((prevCadastros) => [...prevCadastros, addCadastro]);

    setNome("")
    setSobrenome("")
    setDataDeNascimento("")
    setEndereco("")
    setNumero("")
    setComplemento("")
    setCelular("")
    setIntencao("")

  };

  return (
    <div className="Doadores">
      <h1>CADASTRO DE COLABORADORES</h1>
      <ul>
        {cadastros.map((cadastro) => (
          <li key={cadastro.id}>
            <p><b>Nome:</b> {cadastro.nome}</p>
            <p><b>sobrenome:</b> {cadastro.sobrenome}</p>
            <p><b>dt_nasc:</b> {cadastro.dt_nasc}</p>
            <p><b>endereco:</b> {cadastro.endereco}</p>
            <p><b>numero:</b> {cadastro.numero}</p>
            <p><b>complemento:</b> {cadastro.complemento}</p>
            <p><b>celular:</b> {cadastro.celular}</p>
            <p><b>intencao:</b> {cadastro.intencao}</p>
          </li>
        ))}
      </ul>

      <div className="add-cadastro">
        <form onSubmit={handleSubmit}>
        <label>
            <span>Nome: </span>
            <input
              type="text"
              value={nome}
              name="nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </label>  
          <label>
            <span>Sobrenome: </span>
            <input
              type="text"
              value={sobrenome}
              name="sobrenome"
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </label>
          <label>
            <span>Data de Nascimento: </span>
            <input
              type="text"
              value={dt_nasc}
              name="dt_nasc"
              onChange={(e) => setDataDeNascimento(e.target.value)}
            />
          </label><label>
            <span>Endereço: </span>
            <input
              type="text"
              value={endereco}
              name="endereco"
              onChange={(e) => setEndereco(e.target.value)}
            />
          </label>
          <label>
            <span>Numero: </span>
            <input
              type="text"
              value={numero}
              name="numero"
              onChange={(e) => setNumero(e.target.value)}
            />
          </label>
          <label>
            <span>Complemento: </span>
            <input
              type="text"
              value={complemento}
              name="complemento"
              onChange={(e) => setComplemento(e.target.value)}
            />
          </label>
          <label>
            <span>Celular: </span>
            <input
              type="text"
              value={celular}
              name="celular"
              onChange={(e) => setCelular(e.target.value)}
            />
          </label>  
          <label>
            <span>Intencao: </span>
            <input
              type="text"
              value={intencao}
              name="intencao"
              onChange={(e) => setIntencao(e.target.value)}
            />
          </label>         
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}



export default Doadores;