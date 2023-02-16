import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image'

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail:string;
}

interface ProductsProps {
  products: Product[];
}

export default function DataAPI({ products }: ProductsProps): JSX.Element {
    console.log(products);
 

  return (
    <div>
      <div className="grid justify-center pt-10">
        {products.map(product =>(
          <Card sx={{ maxWidth: 345, mt:3}} >
          {/* <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          /> */}
          {/* <Image  src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg" width={416} height={236}  alt={""} />  */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        ))}
      </div>
    </div>

  );
}
