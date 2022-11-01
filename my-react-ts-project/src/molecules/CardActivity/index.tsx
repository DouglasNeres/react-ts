import * as S from './styles'
import ArrowImage from '../../assets/arrow-image.svg'

const CardActivity = () =>(
    <S.Container>
        <div>
        <small>Activity</small>
        <strong>18<img src={ArrowImage} alt="Arrow Icon" /></strong>
        </div>

        <i className="circle1"></i>
        <i className="circle2"></i>
        <i className="circle3"></i>
    </S.Container>

)

export default CardActivity