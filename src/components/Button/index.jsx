import './button.css';
import { memo } from 'react';
const Button = ({ children, onClick }) => (
  <button className='button-50' onClick={onClick}>
    {children}
  </button>
);

export default memo(Button);