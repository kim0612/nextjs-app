import axios from "axios";
import Head from "next/head"
import { useEffect, useState } from "react";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../src/components/ItemList";

export default function Home() {
  const [list, setList] = useState([]);
  
  const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData(){
    axios.get(API_URL)
    .then(function(response){
      console.log(response);
      setList(response.data);
    })
  }

  useEffect(getData,[]);

  return (
    <div>
      <Head>
        <title>Home | KIM0612</title>
      </Head>

      <Header as="h2" style={{paddingTop: "40px"}}>베스트상품</Header>
      <Divider/>
      <ItemList list={list.slice(0,9)}/>
      
      <Header as="h2" style={{paddingTop: "40px"}}>신상품</Header>
      <Divider/>
      <ItemList list={list.slice(9,)}/>
    </div>
  )
}
