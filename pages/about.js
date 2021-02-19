import { Divider, Header, Icon, Form, TextArea, Input, Button } from "semantic-ui-react";

export default function about() {
  return (
    <div>
      <br/>
      <Header as='h3' color="teal">회사소개</Header>
      <Divider/>
      <Icon name='users'/> Semantic UI <br/>
      <Icon name='home'/> SEOUL, South Korea <br/>
      <Icon name='mail'/> <a>roki03@naver.com</a> <br/>
      <Icon name='linkify'/> <a href="https://semantic-ui.com/" target="_blank" rel="noreferrer">semantic-ui.com</a> <br/>
      <br/>
      <Header as='h3' color="teal">문의사항</Header>
      <Divider/>
      <Form>
        <strong>제목</strong> <br/>
        <Input placeholder='Title' style={{width:"90vw"}} /> <br/><br/>
        <strong>내용</strong> <br/>
        <TextArea rows={5} placeholder='Desc...' style={{width:"90vw"}}/> <br/><br/>
        <Button type='submit' size="tiny" style={{marginLeft:"84vw"}}>보내기</Button>
      </Form>
      
      
    </div>
  );
}