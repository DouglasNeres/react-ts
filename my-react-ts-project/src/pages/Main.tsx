import * as S from './styles'
import FrontEnd from "../templates/FrontEnd";
import { ButtonContact } from "../atoms/ButtonContact";
import MainImage from '../assets/main-image.svg'
import CardActivity from '../molecules/CardActivity';

function Main() {

  return (
      <FrontEnd>
        <S.Container>
          <div>
            <h1>Design driven development of your web product</h1>
            <h6>We are a full service digital agency that builds immesive user experience</h6>
            <ButtonContact />
          </div>

          <S.ColumnImage>
            <CardActivity />

            <img src={MainImage} alt="Main content image" />
          </S.ColumnImage>
          
        </S.Container>
      </FrontEnd> 
  )
}

export default Main;