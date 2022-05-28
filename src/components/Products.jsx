import styled from '@emotion/styled'
import { popularProducts } from '../data'
import Product from './Product'




const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
` 

const Products = () => {
  return (
    <Container>
        {popularProducts.map((each)=>(
            <Product each={each} key={each.id} />
        ))}
    </Container>
  )
}

export default Products