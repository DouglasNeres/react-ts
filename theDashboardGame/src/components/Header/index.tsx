import { MdNotifications, MdSearch } from 'react-icons/md'
import Avatar from '../../assets/Ellipse 1.png';
import { StyledHeader, StyledHeaderForm } from './styles';
 
export const Header = () =>{
  return(
    <StyledHeader>
      <StyledHeaderForm>
        <button type="submit">
          <MdSearch size={30} color="rgba(255, 255, 255, .5)" />
        </button>
        <input type="text" name="search" id="" placeholder="Buscar..."/>
      </StyledHeaderForm>

      <div className='userMenu'>
        <button>
          <MdNotifications size={30} color="#fff" />
        </button>
        <img src={Avatar} alt="Nome do Usuário" />
      </div>
    </StyledHeader>
  )
}