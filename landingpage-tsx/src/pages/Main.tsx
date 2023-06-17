import * as S from './styles'
import FrontEnd from "../templates/FrontEnd";
import ProductInformation from '../organisms/ProductInformation';
import ProductStats from '../organisms/ProductStats';
import Balls from '../molecules/Balls';

function Main() {

  return (
      <FrontEnd>
        <S.Container>
            <ProductInformation/>
            <ProductStats />
            <Balls />
        </S.Container>
      </FrontEnd> 
  )
}

export default Main;