import * as S from './styles'

type FrontendProps = {
    children: React.ReactNode
}

const FrontEnd = ({children}: FrontendProps) =>{
    return <S.Container>Teste Frontend {children}</S.Container>
}

export default FrontEnd