import styled from "@emotion/styled";
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from "../responsive";



const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  
  ${mobile({ padding: "0px", flexDirection:"column" })}

`

const Categories = () => {
  return (
    <Container>
      {
        categories.map(each=>(
          <CategoryItem each={each} key={each.id}/>
        ))
      }
    </Container>
  )
}

export default Categories