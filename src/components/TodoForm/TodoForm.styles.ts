import  styled  from 'styled-components';
import {FaChevronDown} from 'react-icons/fa'

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  position: relative;
`;

export const Input = styled.input`
  padding: 20px 50px;
  font-size: 24px;
  color: var(--text-active);
  
  ::placeholder{
   font-style: italic;
    color: var(--text-completed)
  }

  @media (max-width: 750px) {
       padding: 20px 35px;
       font-size: 18px;
  }
`;

export const CheckAllIcon = styled(FaChevronDown)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  font-size: 20px;
  color: ${({check}: {check: boolean}) => check ? 'var(--text-active)' : 'var(--text-completed)'};

  @media (max-width: 750px) {
     left: 12px;
     font-size:16px ;
  }
`;