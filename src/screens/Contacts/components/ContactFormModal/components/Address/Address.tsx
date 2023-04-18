import { ChangeEvent, useEffect, useState } from 'react';

import InputMask from 'react-input-mask';
import { Services } from '@services/index';
import { Response } from '@services/api';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

import { IContact } from '@customTypes/contacts';
import { ReactComponent as Trash } from '@assets/trash.svg';
import * as SC from './styles';

interface IAddress {
  address: {
    id: string;
    zipcode: string;
    city: string;
    district: string;
    state: string;
    street: string;
    number: string;
    complement: string;
  };
  index: number;
  errors: FieldErrors<IContact>;
  register: UseFormRegister<any>;
  remove: (index?: number | number[]) => void;
  setValue: UseFormSetValue<any>;
  clearErrors: UseFormClearErrors<any>;
  control: Control<any, any>;
}

export const Address = ({
  address,
  index,
  errors,
  register,
  remove,
  setValue,
  clearErrors,
  control,
}: IAddress) => {
  const [searchCep, setSearchCep] = useState<{ getData: boolean; cep: string }>(
    {
      getData: false,
      cep: '',
    }
  );

  const addressByIndex = {
    city: `address[${index}].city`,
    district: `address[${index}].district`,
    state: `address[${index}].state`,
    street: `address[${index}].street`,
    number: `address[${index}].number`,
    complement: `address[${index}].complement`,
  };

  async function getCep() {
    const { response }: Response = await Services.viacep.getCep(searchCep.cep);

    if (!response) {
      return;
    }

    setValue(addressByIndex.city, response.data.localidade);
    setValue(addressByIndex.district, response.data.bairro);
    setValue(addressByIndex.state, response.data.uf);
    setValue(addressByIndex.street, response.data.logradouro);
    setValue(addressByIndex.complement, response.data.complemento);

    clearErrors([
      addressByIndex.city,
      addressByIndex.district,
      addressByIndex.state,
      addressByIndex.street,
    ]);
  }

  function checkCep(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    const checkIfLastCharacterIsANumber = val.substring(val.length - 1);

    if (/\d+/g.test(checkIfLastCharacterIsANumber))
      setSearchCep({
        getData: true,
        cep: val,
      });
  }

  useEffect(() => {
    if (!searchCep.getData) return;
    (async () => {
      await getCep();
      setSearchCep({
        getData: false,
        cep: '',
      });
    })();
  }, [searchCep]);

  return (
    <SC.ContainerAddress key={address.id}>
      <div className="address-title">
        <label>Endereço {index + 1} *</label>
        {index !== 0 && (
          <div onClick={() => remove(index)}>
            <Trash />
          </div>
        )}
      </div>
      <div className="address-content">
        <div className="input-container">
          <label htmlFor={`address[${index}].zipcode`}>CEP</label>
          <Controller
            name={`address.${index}.zipcode`}
            control={control}
            render={({ field }) => (
              <InputMask
                {...field}
                mask="99999-999"
                className={`${
                  errors?.address?.[index]?.zipcode && 'border-error'
                }`}
                type="text"
                id={`address[${index}].zipcode`}
                {...register(`address.${index}.zipcode`, {
                  onChange: checkCep,
                })}
                disabled={searchCep.getData}
              />
            )}
          />
          {errors?.address?.[index]?.zipcode && (
            <div className="error">
              {errors?.address?.[index]?.zipcode?.message}
            </div>
          )}
        </div>
        <div className="input-container">
          <label htmlFor={addressByIndex.state}>Estado</label>
          <select
            id={addressByIndex.state}
            {...register(`address.${index}.state`)}
            disabled={searchCep.getData}
          >
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
          {errors?.address?.[index]?.state && (
            <div className="error">
              {errors?.address?.[index]?.state?.message}
            </div>
          )}
        </div>
        <div className="input-container">
          <label htmlFor={addressByIndex.city}>Cidade</label>
          <input
            className={`${errors?.address?.[index]?.city && 'border-error'}`}
            type="text"
            id={addressByIndex.city}
            {...register(`address.${index}.city`)}
            disabled={searchCep.getData}
          />
          {errors?.address?.[index]?.city && (
            <div className="error">
              {errors?.address?.[index]?.city?.message}
            </div>
          )}
        </div>
        <div className="input-container">
          <label htmlFor={addressByIndex.district}>Bairro</label>
          <input
            className={`${
              errors?.address?.[index]?.district && 'border-error'
            }`}
            type="text"
            id={addressByIndex.district}
            {...register(`address.${index}.district`)}
            disabled={searchCep.getData}
          />
          {errors?.address?.[index]?.district && (
            <div className="error">
              {errors?.address?.[index]?.district?.message}
            </div>
          )}
        </div>
        <div className="input-container">
          <label htmlFor={addressByIndex.street}>Rua</label>
          <input
            className={`${errors?.address?.[index]?.street && 'border-error'}`}
            type="text"
            id={addressByIndex.street}
            {...register(`address.${index}.street`)}
            disabled={searchCep.getData}
          />
          {errors?.address?.[index]?.street && (
            <div className="error">
              {errors?.address?.[index]?.street?.message}
            </div>
          )}
        </div>
        <div className="input-container">
          <label htmlFor={addressByIndex.number}>Número</label>
          <input
            className={`${errors?.address?.[index]?.number && 'border-error'}`}
            type="text"
            id={addressByIndex.number}
            {...register(`address.${index}.number`)}
            disabled={searchCep.getData}
          />
        </div>
        <div className="input-container">
          <label htmlFor={addressByIndex.complement}>Complemento</label>
          <input
            className={`${
              errors?.address?.[index]?.complement && 'border-error'
            }`}
            type="text"
            id={addressByIndex.complement}
            {...register(`address.${index}.complement`)}
            disabled={searchCep.getData}
          />
        </div>
      </div>
    </SC.ContainerAddress>
  );
};
