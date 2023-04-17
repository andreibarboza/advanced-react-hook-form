import { useDispatch, useSelector } from 'react-redux';
import * as SC from './styles';
import { RootState } from '@store/app';
import { setResetAlert } from '@store/reducers/visuals';
import Button from '@components/Button';

export const Alert = () => {
  const dispatch = useDispatch();
  const alertData = useSelector((state: RootState) => state.visuals.alert);

  if (!alertData.isOpen) return <></>;

  return (
    <SC.ContainerAlert>
      <div className="title">{alertData.title}</div>
      <div className="text">{alertData.text}</div>
      <SC.ContainerButtons>
        <Button className="md" onClick={() => dispatch(setResetAlert())}>
          Cancelar
        </Button>
        <Button className="md" onClick={alertData.submit}>
          Confirmar
        </Button>
      </SC.ContainerButtons>
    </SC.ContainerAlert>
  );
};
