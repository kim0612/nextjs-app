import { Grid } from 'semantic-ui-react';
import Link from 'next/link';

export default function ItemList(props) {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>

        {props.list.map(function(item) {
          return(
            <Grid.Column  key={item.id}>
              <Link href={`/view/${item.id}`}>
                <a className="itemLink">
                  <div className="itemBox">
                    <img src={item.image_link} alt={item.name}/>
                    <br/>
                    <span className="itemName">{item.name}</span>
                    <span className="itemDetails">{item.category} {item.product_type}</span>
                    <span className="itemPrice">${item.price}</span>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          )
         })
        }
        
        </Grid.Row>
      </Grid>
    </div>
  );
}