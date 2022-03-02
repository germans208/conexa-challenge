import React, { useState, useEffect } from "react";

const url = "https://rickandmortyapi.com/api/character";
const ConexaContext = React.createContext();

const ConexaProvider = (props) => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  const [filter, setFilter] = useState(null);
  const [dataEspisodes, setEspisodes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(url);
  }, []);

  const fetchData = async (url) => {
    let query = `${url}`;
    const response = await fetch(query);
    response.json().then((response) => {
      setData(response.results);
      setInfo(response.info);
    })
      .catch((error) => setIsLoading(true));
  };

  const fetchPage = (page) => {
    let query = `${url}/?page=${page}`;
    fetchData(query);
  };

  const fethcEspisodes = async (url) => {
    let query = `${url}`;
    const response = await fetch(query);
    response.json().then((response) => {
      setEspisodes(response);

    })
      .catch((error) => console.log(error));
  };

  const queryEspisodes = (id) => {
    let concat='';
    for (let i = 1; i < 52; i++) {
      concat += `${i},`
    }
    let query = `https://rickandmortyapi.com/api/episode/${concat}`;
    setFilter(id);
    fethcEspisodes(query);
  }

  return (
    <ConexaContext.Provider
      value={{
        info,
        data,
        fetchPage,
        isLoading,
        queryEspisodes,
        dataEspisodes,
        filter
      }}
    >
      {props.children}
    </ConexaContext.Provider>
  );
};

export { ConexaProvider, ConexaContext };
