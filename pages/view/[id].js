import { Button, Divider, Loader } from "semantic-ui-react";
import axios from "axios";
import Head from "next/head";

const Post = ({prod}) => {
/*
  const router = useRouter();
  const { id } = router.query;
  const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const [prod, setProd] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function getData() {
    axios
      .get(API_URL)
      .then(function (response) {
        setProd(response.data);
        console.log(prod, response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // useEffect(getData,[]);  이거 왜 안돼??? 이걸로 했을 때, 새로고침하면 에러 뜸..!

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);
*/
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


export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      prod: data,
    },
  };
};

/*
[ axios로 받은 response.data ]
api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/495/original/open-uri20171223-4-9hrto4?1514063330"
brand: "maybelline"
category: null
created_at: "2016-10-01T18:36:15.012Z"
currency: null
description: "Maybelline Face Studio Master Hi-Light Light Boosting bronzer formula has an expert ↵balance of shade + shimmer illuminator for natural glow. Skin goes ↵soft-lit with zero glitz.↵↵		For Best Results: Brush over all shades in palette and gently sweep over ↵cheekbones, brow bones, and temples, or anywhere light naturally touches↵ the face.↵↵		↵	↵↵                    "
id: 495
image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png"
name: "Maybelline Face Studio Master Hi-Light Light Booster Bronzer"
price: "14.99"
price_sign: null
product_api_url: "https://makeup-api.herokuapp.com/api/v1/products/495.json"
product_colors: []
product_link: "https://well.ca/products/maybelline-face-studio-master_88837.html"
product_type: "bronzer"
rating: 5
tag_list: []
updated_at: "2017-12-23T21:08:50.624Z"
website_link: "https://well.ca"
*/