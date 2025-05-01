import { useFormik } from 'formik';
import * as Yup from 'yup'
import { JSX } from 'react';
// Componentes
import { AsidesProps } from '..';
import warningIcon from '../../../../assets/warning.svg'
// Styles
import * as s from './styles';
// services e contextos
import { useCarrinho } from '../../../../Contexts/ContextCarrinho';
//


export type formDelivery_type = {
  values: {
    name: string,
    address: string,
    city: string,
    cep: string,
    tell: string,
    compl: string,
  }
}

export function AsideForm({setarAside}: AsidesProps) {
    const { setTempAddressForm } = useCarrinho()

    const form = useFormik({
        initialValues: {
            name: '',
            address: '',
            city: '',
            cep: '',
            tell: '',
            compl: '',
        },
        validationSchema: Yup.object ({
            name: Yup.string()
            .min(3, 'Nome muito curto!')
            .required('Este campo é obrigatório'),
        
          address: Yup.string()
            .min(5, 'Endereço muito curto!')
            .required('Este campo é obrigatório'),
        
          city: Yup.string()
            .min(3, 'Cidade muito curta!')
            .required('Este campo é obrigatório'),
        
          cep: Yup.string()
            .matches(/^\d{8}$/, 'O CEP deve conter exatamente 8 dígitos numéricos')
            .required('Este campo é obrigatório'),
        
          tell: Yup.string()
            .matches(/^\d{8,11}$/, 'Número de telefone inválido (mín. 8 e máx. 11 dígitos)')
            .required('Este campo é obrigatório'),
        
          compl: Yup.string()
            .optional(),
        }),

        onSubmit: () => {
          const AddressForm: formDelivery_type = {
            values: {
              name:  form.values.name,
              address: form.values.address,
              city: form.values.city,
              cep: form.values.cep,
              tell: form.values.tell,
              compl: form.values.compl
            }
          }
          setTempAddressForm(AddressForm)
          setarAside('PAYMENT')
        }
    })
    const getErrorMessage = (fieldName: string, message?: string): JSX.Element | null => {
        const isTouched = !!form.touched[fieldName as keyof typeof form.touched];
        const isInvalid = !!message;
      
        if (isTouched && isInvalid) {
          return (
            <>
              <img src={warningIcon} alt="Aviso" style={{ width: '0.9em', verticalAlign: 'middle', marginRight: '4px' }} />
              {message}
            </>
          );
        }
      
        return null;
    };  

    return (    
        <s.AsideFormContainer>
            <s.AsideForm onSubmit={form.handleSubmit}>
            <span className='title'>Entrega</span>
            <div className='divsLabelXinput'>
                <label htmlFor="name">Quem irá receber</label>
                <input type="string" id="name"required name='name' value={form.values.name} 
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                />
            </div>
            <span className='ErrorClass'>{getErrorMessage('name', form.errors.name)} </span>
            <div className='divsLabelXinput'>
                <label htmlFor="address">Endereço</label>
                <input type="string" id="address"required name='address' value={form.values.address} 
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                />
            </div>
            <span className='ErrorClass'>{getErrorMessage('address', form.errors.address)}</span>
            <div className='divsLabelXinput'>
                <label htmlFor="city">Cidade</label>
                <input type="string" id="city"required name='city' value={form.values.city} 
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                />
            </div>
            <span className='ErrorClass'>{getErrorMessage('city', form.errors.city)}</span>
            <div className="divsLabelXinput" style={{ flexDirection: 'row', height: 'auto' }}>
                <div className="input-group">
                    <label htmlFor="cep">CEP</label>
                    <input type="number" id="cep" required name='cep' value={form.values.cep} 
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    />
                    <span className='ErrorClass'>{getErrorMessage('cep', form.errors.cep)}</span>
                </div>
                <span className='space'></span>
                <div className="input-group">
                    <label htmlFor="tell">Número</label>
                    <input type="tel" id="tell" required name='tell' value={form.values.tell} 
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    />
                    <span className='ErrorClass'>{getErrorMessage('tell', form.errors.tell)}</span>
                </div>
            </div>
            <div className='divsLabelXinput'>
                <label htmlFor="compl">Complemento (opcional)</label>
                <input type="string" id="compl" name='compl' value={form.values.compl} 
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                />
            </div>
            <br />
            <button className='buttonStyle' type='submit'>Continuar com o pagamento</button>
            </s.AsideForm>
            <button className='buttonStyle' type='button' onClick={() => setarAside('CARRINHO')}>Voltar para o carrinho</button>
        </s.AsideFormContainer>
    )
}