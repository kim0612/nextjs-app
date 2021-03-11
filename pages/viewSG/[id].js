import { Button, Divider, Loader } from "semantic-ui-react";
import axios from "axios";
import Head from "next/head";

const Post = ({ prod, name }) => {
  return (
    <div>
    { prod && (
      <div>
        <Head>
          <title>{prod.name}</title>
          <meta name="description" content={prod.description}></meta>
        </Head>
        <div>
          {/* Post : {id} <br/> */}
          {`${name} 환경입니다.`}
          <div className="id-wrapper">
            <img src={prod.image_link} alt="product image" />
            <div className="id-info">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {prod.name}
              </span>
              <br />
              <span style={{fontSize: "18px", fontWeight: "bold", color: "#8DC3C6"}}>
                $ {prod.price}
              </span>
              <br />
              <span style={{ fontSize: "15px" }}>
                {prod.product_type}
              </span>
              <br />
              <Button color="orange">구매하기</Button>
            </div>
          </div>
          <Divider style={{ margin: "30px 0" }} />
          <p>
            <strong>Description</strong> <br />
            <br />
            {prod.description}
          </p>
          <Divider style={{ marginTop: "50px" }} />
        </div>
      </div>
    )}
    </div>
  );
};
export default Post;

// 'getStaticProps', 'getStaticPaths'는 서버에서 동작한다!!
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '740' } },
      { params: { id: '730' } },
      { params: { id: '729' } }
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      prod: data,
      name: process.env.name
    },
  };
};
