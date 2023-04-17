import { useDispatch, useSelector } from 'react-redux';
import * as SC from './styles';
import { RootState } from '@store/app';
import { useEffect } from 'react';
import { setNotification } from '@store/reducers/visuals';

export const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector(
    (state: RootState) => state.visuals.notification
  );

  useEffect(() => {
    if (notification.show) {
      setTimeout(() => {
        dispatch(
          setNotification({
            show: false,
            msg: notification.msg,
            type: notification.type,
          })
        );
      }, 3000);
    }
  }, [notification.show]);

  return (
    <SC.ContainerNotification show={notification.show} type={notification.type}>
      <div>{notification.msg}</div>
    </SC.ContainerNotification>
  );
};
