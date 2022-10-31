import { Header } from '../../organisms/Header'
import * as S from './styles'

type FrontendProps = {
    children: React.ReactNode
}

const FrontEnd = ({children}: FrontendProps) =>{
    return <S.Container>
        <Header></Header>
    </S.Container>
}

export default FrontEnd