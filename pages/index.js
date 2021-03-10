import axios from "axios";
import Head from "next/head"
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/components/ItemList";

export default function Home({list}) {
/*
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  function getData(){
    axios.get(API_URL)
    .then(function(response){
      console.log(response);
      setList(response.data);
      console.log(list, response.data);

      setIsLoading(false);
    })
  }

  useEffect(getData,[]);
*/
  return (
    <>
      <Head>
        <title>Home | KIM0612</title>
        <meta name="description" content="KIM0612 홈 입니다."></meta>
      </Head>

      <Header as="h2" style={{paddingTop: "40px"}}>베스트상품</Header>
      <Divider/>
      <ItemList list={list.slice(0,9)}/>

      <Header as="h2" style={{paddingTop: "40px"}}>신상품</Header>
      <Divider/>
      <ItemList list={list.slice(9,)}/>
    </>
  )
}

export const getStaticProps = async () => {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props:{
      list:data
    }
  };
}