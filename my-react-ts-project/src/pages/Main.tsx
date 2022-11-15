import * as S from './styles'
import FrontEnd from "../templates/FrontEnd";
import ProductInformation from '../organisms/ProductInformation';
import ProductStats from '../organisms/ProductStats';
import Bols from '../molecules/Bols';

function Main() {

  return (
      <FrontEnd>
        <S.Container>
            <ProductInformation/>
            <ProductStats />
            <Bols />
        </S.Container>
      </FrontEnd> 
  )
}

export default Main;