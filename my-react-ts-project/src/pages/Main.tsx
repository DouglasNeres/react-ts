import * as S from './styles'
import FrontEnd from "../templates/FrontEnd";
import ProductInformation from '../organisms/ProductInformation';
import ProductStats from '../organisms/ProductStats';

function Main() {

  return (
      <FrontEnd>
        <S.Container>
            <ProductInformation/>
            <ProductStats />
        </S.Container>
      </FrontEnd> 
  )
}

export default Main;