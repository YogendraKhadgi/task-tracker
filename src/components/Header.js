
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  
  return (
    <header className = 'header'>
      <h2>{title}</h2>
      <Button color= {showAdd ? 'green' : 'blue'} text= {showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>
    </header>
  )
};

export default Header;
