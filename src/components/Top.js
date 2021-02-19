import { Header } from "semantic-ui-react";
import Gnb from "./Gnb.js"

export default function Top() {
  return (
    <div>
      <div style={{display:"flex"}}>
        <img style={{width: "10vw"}} src="/img/groot2.jpg" alt="logo"/>
        <Header as="h1" style={{ alignSelf:"center",paddingLeft: 10}}>KIM0612</Header>
      </div>
      <br/>
      <Gnb/>
    </div>
  );
}