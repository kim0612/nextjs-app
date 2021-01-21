import { Header } from "semantic-ui-react";
import Gnb from "./Gnb.js"

export default function Top() {
  return (
    <div>
      <img src="./img/groot2.jpg" alt="logo"/>
      <Header as="h1">KIM0612</Header>
      <Gnb/>
    </div>
  );
}