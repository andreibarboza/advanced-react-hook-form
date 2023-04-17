import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setIsLoading,
  setModalContacts,
  setNotification,
} from '@store/reducers/visuals';
import { setConcatContact, setUpdateContact } from '@store/reducers/contacts';

import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';

import Address from './components/Address';
import Telephone from './components/Telephone';

import { Response } from '@services/api';
import { Services } from '@services/index';
import { RootState } from '@store/app';
import { useOnClickOutside } from '@hooks/useOnClickOutside';
import Button from '@components/Button';

import { ReactComponent as Map } from '@assets/map.svg';
import { ReactComponent as Phone } from '@assets/phone.svg';
import { ReactComponent as Close } from '@assets/close.svg';

import * as SC from './styles';

const addressSchema = {
  zipcode: yup.string().required('CEP é obrigatório'),
  city: yup.string().required('Cidade é obrigatório'),
  district: yup.string().required('Bairro é obrigatório'),
  state: yup.string().required('Estado é obrigatório'),
  street: yup.string().required('Rua é obrigatório'),
  number: yup.string(),
  complement: yup.string(),
};

const telephoneSchema = {
  telephone: yup.string().required('Telefone é obrigatório'),
  type: yup.string(),
};

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  lastname: yup.string().required('Sobrenome é obrigatório'),
  telephones: yup.array().of(yup.object().shape(telephoneSchema)),
  address: yup.array().of(yup.object().shape(addressSchema)),
});

const INITIAL_VALUE_ADDRESS = {
  zipcode: '',
  city: '',
  district: '',
  state: '',
  street: '',
  number: '',
  complement: '',
};

export const ContactFormModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.visuals.modalContacts);
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () =>
    dispatch(
      setModalContacts({
        isOpen: false,
        type: modal.type,
        data: [],
      })
    )
  );

  const {
    register,
    control,
    handleSubmit: submitForm,
    setValue,
    formState: { errors },
    clearErrors,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      lastname: '',
      telephones: [
        {
          telephone: '',
          type: 'celphone',
        },
      ],
      address: [INITIAL_VALUE_ADDRESS],
    },
  });

  const {
    fields: addressFields,
    append: appendAddress,
    remove: removeAddress,
    update: updateAddressValues,
  } = useFieldArray({
    control,
    name: 'address',
  });

  const {
    fields: telephoneFields,
    append: appendTelephone,
    remove: removeTelephone,
    update: updatePhoneValues,
  } = useFieldArray({
    control,
    name: 'telephones',
  });

  async function handleSubmit(data: any) {
    dispatch(setIsLoading(true));

    const { response }: Response =
      modal.type === 'create'
        ? await Services.contacts.createContact(data)
        : await Services.contacts.editContact(data, modal.data.id);

    if (response.status >= 400) {
      dispatch(
        setNotification({
          show: true,
          msg: 'Erro ao criar contato',
          type: 'error',
        })
      );
      return;
    }

    reset();
    dispatch(
      setNotification({
        show: true,
        msg: `Contato ${
          modal.type === 'edit' ? 'editado' : 'criado'
        } com sucesso!`,
        type: 'success',
      })
    );
    dispatch(
      setModalContacts({
        isOpen: false,
        type: modal.type,
      })
    );

    modal.type === 'create'
      ? dispatch(setConcatContact(response.data))
      : dispatch(setUpdateContact(response.data));

    dispatch(setIsLoading(false));
  }

  useEffect(() => {
    if (modal.isOpen && modal.type === 'edit') {
      setValue('name', modal.data.name);
      setValue('lastname', modal.data.lastname);

      modal.data.telephones.forEach(({ telephone, type }, index) => {
        updatePhoneValues(index, { telephone, type });
      });

      modal.data.address.forEach((ad, index) => {
        updateAddressValues(index, {
          zipcode: ad.zipcode,
          city: ad.city,
          district: ad.district,
          state: ad.state,
          street: ad.street,
          number: ad.number,
          complement: ad.complement,
        });
      });
    }

    if (!modal.isOpen) {
      setTimeout(() => {
        //Reset do form após o fim da animação ao fechar
        reset();
      }, 200);
    }
  }, [modal.isOpen]);

  return (
    <SC.ContainerModal ref={modalRef} open={modal.isOpen}>
      <SC.CreateModalContainer>
        <div className="header">
          <div>
            {modal.type === 'edit' ? 'Editar contato' : 'Criar contato'}
          </div>
          <div
            className="icon-close"
            onClick={() =>
              dispatch(
                setModalContacts({
                  isOpen: false,
                  type: modal.type,
                })
              )
            }
          >
            <Close />
          </div>
        </div>

        <div className="body">
          <form onSubmit={submitForm(handleSubmit)}>
            <div className="form-area">
              <div className="input-container">
                <label htmlFor="name">Nome *</label>
                <input
                  className={`${errors?.name && 'border-error'}`}
                  type="text"
                  id="name"
                  {...register('name')}
                />
                {errors?.name?.message && (
                  <div className="error">{errors?.name?.message}</div>
                )}
              </div>
              <div className="input-container">
                <label htmlFor="lastname">Sobrenome *</label>
                <input
                  className={`${errors?.lastname && 'border-error'}`}
                  type="text"
                  id="lastname"
                  {...register('lastname')}
                />
                {errors?.lastname?.message && (
                  <div className="error">{errors?.lastname?.message}</div>
                )}
              </div>

              <div className="multiple-title">
                <div className="title-img">
                  <span>Telefones</span>
                  <Phone />
                </div>
                <Button
                  className="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    appendTelephone({
                      telephone: '',
                      type: 'celphone',
                    });
                    clearErrors();
                  }}
                >
                  Novo telefone
                </Button>
              </div>

              {telephoneFields.map((telephone, index: number) => (
                <Telephone
                  key={telephone.id}
                  telephone={telephone}
                  index={index}
                  errors={errors}
                  register={register}
                  remove={removeTelephone}
                  control={control}
                  watch={watch}
                />
              ))}

              <div className="multiple-title">
                <div className="title-img">
                  <span>Endereços</span>
                  <Map />
                </div>

                <Button
                  className="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    appendAddress(INITIAL_VALUE_ADDRESS);
                    clearErrors();
                  }}
                >
                  Novo endereço
                </Button>
              </div>

              {addressFields.map((address, index: number) => (
                <Address
                  key={address.id}
                  address={address}
                  index={index}
                  errors={errors}
                  register={register}
                  remove={removeAddress}
                  setValue={setValue}
                  clearErrors={clearErrors}
                  control={control}
                />
              ))}
            </div>
            <div className="container-button">
              <Button className="lg" type="submit">
                {modal.type === 'edit' ? 'Editar' : 'Criar'}
              </Button>
            </div>
          </form>
        </div>
      </SC.CreateModalContainer>
    </SC.ContainerModal>
  );
};
