import styled from 'styled-components';
import {RiCheckboxBlankCircleLine} from 'react-icons/ri';
import {FaRegCheckCircle} from 'react-icons/fa';
import {MdClose} from 'react-icons/md'
export const Wrapper = styled.div`
       width: 100%;
       border-bottom: 1px solid #ededed;
       position: relative;

       :last-child{
           border-bottom: none;
       }

        &:hover svg {
      opacity: 1;
      visibility: visible;
  }
`;

export const Item = styled.div`
       padding: 16px 50px;
       color: ${({completed}: {completed: boolean,disappear: boolean}) => completed ? 'var(--text-completed)' : 'var(--text-active)'};
       text-decoration: ${({completed}: {completed: boolean,disappear: boolean}) => completed ? 'line-through' : 'none'};
       font-size: 24px;
       display: ${({disappear}: {disappear: boolean, completed: boolean}) => disappear ? 'none' : 'flex'};
        @media (max-width: 750px) {
       font-size: 18px;
  }
`;

export const EditWrapper = styled.div`
   display: ${({disappear}: {disappear: boolean}) => disappear ? 'none' : 'flex'};
`;

export const Space = styled.div`
  width: 40px;
`;

export const Form = styled.form`
  flex-grow: 1;
  position: relative;

`;

export const Input = styled.input`
   width: 100%;
   padding: 16px;
   font-size: 24px;
   color: var(--text-active);
   border: 1px solid #999;
   box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);

    @media (max-width: 750px) { 
       font-size: 18px;
    }
`;


export const Icon = styled(RiCheckboxBlankCircleLine)`
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   left: 10px;
   font-size: 28px;
   color: var(--text-completed);
`;

export const CompleteIcon = styled(FaRegCheckCircle)`
 position: absolute;
   top: 50%;
   transform: translateY(-50%);
   left:12px;
   font-size: 24px;
   color: green;
`;

export const DeleteIcon = styled(MdClose)`
position: absolute;
   top: 50%;
   transform: translateY(-50%);
   right:12px;
   color: var(--text-active);
   font-weight: 500;
   font-size: 20px;
   transition: all 0.2s;
   opacity: 0;
   visibility: hidden;
   cursor: pointer;
   :hover{
      color:#cc9a9a
   }
`;