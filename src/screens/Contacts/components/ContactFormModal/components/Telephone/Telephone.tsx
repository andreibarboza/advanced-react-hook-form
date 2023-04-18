import InputMask from 'react-input-mask';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';

import { ReactComponent as Trash } from '@assets/trash.svg';
import { IContact } from '@customTypes/contacts';
import * as SC from './styles';

interface ITelephone {
  telephone: {
    id: string;
    telephone: string;
    type: string;
  };
  index: number;
  errors: FieldErrors<IContact>;
  register: UseFormRegister<any>;
  remove: (index?: number | number[]) => void;
  control: Control<any, any>;
  watch: UseFormWatch<any>;
}

export const Telephone = ({
  telephone,
  index,
  errors,
  register,
  remove,
  control,
  watch,
}: ITelephone) => {
  const typeNumberSelected = watch(`telephones.${index}.type`);

  return (
    <SC.ContainerTelephone key={telephone.id}>
      <div className="telephone-title">
        <label>Telefone {index + 1} *</label>
        {index !== 0 && (
          <div onClick={() => remove(index)}>
            <Trash />
          </div>
        )}
      </div>
      <SC.ContainerInputMask>
        <Controller
          name={`telephones.${index}.telephone`}
          control={control}
          render={({ field }) => (
            <InputMask
              {...field}
              mask={
                typeNumberSelected === 'celphone'
                  ? '(99) 99999-9999'
                  : '(99) 9999-9999'
              }
              className={`${
                errors?.telephones?.[index]?.telephone && 'border-error'
              }`}
              type="text"
              id={`telephones[${index}].telephone`}
              {...register(`telephones.${index}.telephone`)}
            />
          )}
        />
        <SC.NumberType>
          <SC.Radio>
            <label>
              <input
                // checked
                type="radio"
                value="celphone"
                id={`telephones[${index}].type`}
                {...register(`telephones.${index}.type`)}
              />
              Celular
            </label>
          </SC.Radio>
          <SC.Radio>
            <label>
              <input
                type="radio"
                value="landline"
                id={`telephones[${index}].type`}
                {...register(`telephones.${index}.type`)}
              />
              Fixo
            </label>
          </SC.Radio>
        </SC.NumberType>
      </SC.ContainerInputMask>
      {errors?.telephones?.[index]?.telephone && (
        <div className="error">
          {errors?.telephones?.[index]?.telephone?.message}
        </div>
      )}
    </SC.ContainerTelephone>
  );
};
