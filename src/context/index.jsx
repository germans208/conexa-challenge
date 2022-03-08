import { toUnitless } from "@mui/material/styles/cssUtils";
import React, { useState, useEffect } from "react";

const url = "https://rickandmortyapi.com/api/character";
const ConexaContext = React.createContext();

const ConexaProvider = (props) => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const [info1, setInfo1] = useState([]);
  const [info2, setInfo2] = useState([]);

  const [filter, setFilter] = useState({});

  const [dataEspisodes, setEspisodes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect((character) => {
    fetchData(url);

    (character === 1) && console.log(character);
  }, []);

  const fetchData = async (url, character) => {
    let query = `${url}`;
    const response = await fetch(query);
    response.json().then((response) => {
      if (character === 1) {
        setData1(response.results);
        setInfo1(response.info);

      } else if (character === 2) {
        setData2(response.results);
        setInfo2(response.info);
      }
      else {
        setData1(response.results);
        setData2(response.results);
        setInfo1(response.info);
        setInfo2(response.info);
      }

    })
      .catch((error) => setIsLoading(true));
  };

  const fetchPage = (page, character) => {
    let query = `${url}/?page=${page}`;
    fetchData(query, character);
  };

  const fethcEspisodes = async (url, character) => {
    let query = `${url}`;
    const response = await fetch(query);
    response.json().then((response) => {
      setEspisodes(response);

    })
      .catch((error) => console.log(error));
  };

  const queryEspisodes = (character, idClick) => {
    let concat = '';
    for (let i = 1; i < 52; i++) {
      concat += `${i},`;
    }
    let query = `https://rickandmortyapi.com/api/episode/${concat}`;
    setFilter(filter => ({ ...filter, character, idClick }));

  //  console.log(character);
    setFilter({
      character1: (character === 1) && idClick,
      isClick1: (character === 1) && true,
      character2: (character === 2) && idClick,
      isClick2: (character === 2) && true,

    })

    fethcEspisodes(query);
  }

  return (
    <ConexaContext.Provider
      value={{
        info1,
        info2,
        data1,
        data2,
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
