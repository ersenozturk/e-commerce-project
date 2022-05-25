import styled from "@emotion/styled";
import { categories } from '../data'
import CategoryItem from './CategoryItem'


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

`

const Categories = () => {
  return (
    <Container>
      {
        categories.map(each=>(
          <CategoryItem each={each}/>
        ))
      }
    </Container>
  )
}

export default Categories