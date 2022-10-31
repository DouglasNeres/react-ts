import { Button } from '../../atoms/Button'
import { Logo } from '../../molecules/Logo'
import { Menu } from '../Menu'
import* as S from './styles'

export const Header = () =>{
    return <S.Box>
        <Logo />
        <Menu />
        <Button />
    </S.Box>

}