
import Image from 'next/image'
import {useState} from 'react';

import { Card, Space } from 'antd';


interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail:string;
  price:number;
}

interface ProductsProps {
  products: Product[];
}

// const styleModel = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };
const cardHoverStyle = {
  ':hover': {
    border: '1px solid #4F6172',
    boxShadow: '0 0 10px rgba(24, 144, 255, 0.5)',
    
  },
};

export default function DataAPI({ products }: ProductsProps): JSX.Element {

    
//     const gridStyle: React.CSSProperties = {
//   width: '25%',
//   textAlign: 'center',
// };
    return (
      <div>
        <div className="grid justify-center pt-10">
         {/* {products.map(product =>(
          <Space direction="vertical" size={16}>
          <Card hoverable title={product.title} extra={<a href="#">More</a>} style={{ width: 300,marginTop: '10px',...cardHoverStyle}}>

            <p>{product.price}</p>
    
          </Card>
        </Space>
         ))} */}
         <Card hoverable  extra={<a href="#">More</a>} style={{ width: 300,marginTop: '10px',...cardHoverStyle}}>
          test
          </Card>
          <Card hoverable  extra={<a href="#">More</a>} style={{ width: 300,marginTop: '10px',...cardHoverStyle}}>
          test
          </Card>
        </div>

      </div>
    );
}


  // {products.map(product =>(
  //           <Card sx={{ maxWidth: 345, mt:3}} key={product.id}>
  //             <CardContent>
  //               {/* <Image  src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg" width={416} height={236}  alt={""} />  */}
  //               <Typography gutterBottom variant="h5" component="div">
  //                 {product.title}
  //               </Typography>
  //               <Typography variant="body2" color="text.secondary">
  //                 {product.description}
  //               </Typography>
  //               <Typography variant="body1" color="text.secondary" sx={{pt:2}}>
  //                 {product.price}$
  //               </Typography>
  //             </CardContent>
  //             <CardActions>
  //               <Button onClick={() => handleOpen(product)} variant="outlined">Open Data</Button>
  //             </CardActions>
  //           </Card>
  //         ))}
  //         <Modal
  //           open={open}
  //           onClose={handleClose}
  //           aria-labelledby="modal-modal-title"
  //           aria-describedby="modal-modal-description"
  //         >

           
  //           <Box sx={styleModel}>
  //             <div className="flex justify-between">
  //               <div>
  //               <Typography id="modal-modal-title" variant="h6" component="h2">
  //               {selectedProduct?.title}  
  //             </Typography>  
  //               </div>
  //               <div className="">
  //               <Button variant="outlined" onClick={handleClose}  color="error">Close</Button>  
  //               </div>
                       
  //             </div>    

  //             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  //               {selectedProduct?.description}
  //               <br/>
  //               {selectedProduct?.price}$ 
  //             </Typography>
  //           </Box>
  //         </Modal>