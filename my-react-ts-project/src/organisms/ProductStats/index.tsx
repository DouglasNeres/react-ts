import MainImage from '../../assets/main-image.svg';
import CardActivity from "../../molecules/CardActivity";
import * as S from './styles'

const ProductStats = () =>{
    return(
        <S.Container>
        <CardActivity />
        <img className='mainImage' src={MainImage} alt="Main content image" />
      </S.Container>
    )
}


export default ProductStats