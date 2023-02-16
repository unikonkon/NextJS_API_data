

import DataAPI from "./component/dataAPI";



interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;

}

interface ProductsProps {
  products: Product[];
}

export async function getServerSideProps(): Promise<{ props: ProductsProps }> {
  const res = await fetch('https://dummyjson.com/products?limit=3');
  const data = await res.json();
  const dataproducts = data.products

  return {
    props: {
      products: dataproducts
    }
  };
}

function Products({ products }: ProductsProps): JSX.Element {
  
  return (
  
    <div className="bg-slate-700">
    <DataAPI products={products}/>  
    </div>

 
  
  );
}

export default Products;
