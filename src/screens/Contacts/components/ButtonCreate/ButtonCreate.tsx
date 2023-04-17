import { useDispatch } from 'react-redux';
import { setModalContacts } from '@store/reducers/visuals';

import { ReactComponent as Plus } from '@assets/plus.svg';

import * as SC from './styles';

export const ButtonCreate = () => {
  const dispatch = useDispatch();

  return (
    <SC.ButtonContainer
      onClick={() =>
        dispatch(
          setModalContacts({
            isOpen: true,
            type: 'create',
          })
        )
      }
    >
      <Plus />
      <button>Criar contato</button>
    </SC.ButtonContainer>
  );
};
