import { useFormik } from 'formik';
import * as Yup from 'yup';
import { JSX } from 'react';
//  componentes e assets
import warningIcon from '../../../../assets/warning.svg'
// props
import { AsidesProps } from '..';
// Styles
import * as s from './styles';
// Contexto e Api
import { useCarrinho } from '../../../../Contexts/ContextCarrinho';
// import { useApi } from '../../../../Contexts/ApiContext';
//


export type formPayment_type = {
    values: {
        CardName: string;
        NumberCard: string;
        CVV: string;
        MesVenc: string;
        Year: string;
    }
  }

export function AsidePayment({setarAside}: AsidesProps) {
        const { pedidos, setTempPaymentForm } = useCarrinho();

    const form = useFormik({
        initialValues: {
            CardName: '',
            NumberCard: '',
            CVV: '',
            MesVenc: '',
            Year: '',
        },
        validationSchema: Yup.object({
            CardName: Yup.string()
                .min(3, 'Nome no cartão muito curto!')
                .required('Este campo é obrigatório'),
        
            NumberCard: Yup.string()
                .matches(/^\d{13,19}$/, 'Número do cartão inválido (entre 13 e 19 dígitos)')
                .required('Este campo é obrigatório'),
        
            CVV: Yup.string()
                .matches(/^\d{3,4}$/, 'CVV inválido (3 ou 4 dígitos)')
                .required('Este campo é obrigatório'),
        
            MesVenc: Yup.string()
                .matches(/^(0?[1-9]|1[0-2])$/, 'Mês inválido')
                .required('Este campo é obrigatório'),
        
            Year: Yup.string()
                .matches(/^\d{4}$/, 'Ano inválido (4 dígitos)')
                .required('Este campo é obrigatório'),
        }),        
    
            onSubmit: () => {
                const PaymentForm: formPayment_type = {
                    values: {
                        CardName: form.values.CardName,
                        NumberCard: form.values.NumberCard,
                        CVV: form.values.CVV,
                        MesVenc: form.values.MesVenc,
                        Year: form.values.Year,
                    }
                  };
                  setTempPaymentForm(PaymentForm);
                setarAside('CHECKOUT')
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

        const totalEmCentavos = pedidos.reduce((acc, p) => {
            const valor = Math.round(Number(p.preco) * 100);
            return acc + valor;
          }, 0);
          
        const totalPrice = totalEmCentavos / 100;
        const formatarPreco = (valor: number) => {
            return new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2
            }).format(valor);
        };

    return (
        <s.AsidePaymentContainer>
            <s.AsidePaymentForm onSubmit={form.handleSubmit}>
                <span className='title'>Pagamento - Valor a pagar {formatarPreco(totalPrice)}</span>
                <div className='divsLabelXinput'>
                    <label htmlFor="CardName">Nome no cartão</label>
                    <input type="string" id="CardName"required name='CardName' 
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    />
                </div>
                <span className='ErrorClass'>{getErrorMessage('CardName', form.errors.CardName)}</span>
                <div className="divsLabelXinput" style={{ flexDirection: 'row' }}>
                    <div className="input-group-bigger">
                        <label htmlFor="NumberCard">Numero Do Cartão</label>
                        <input type="number" id="NumberCard" required name='NumberCard' 
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        />
                        <span className='ErrorClass'>{getErrorMessage('NumberCard', form.errors.NumberCard)}</span>
                    </div>
                    <span className='space30'></span>
                    <div className="input-group-small">
                        <label htmlFor="CVV">CVV</label>
                        <input type="number" id="CVV" required name='CVV' 
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        />
                        <span className='ErrorClass'>{getErrorMessage('CVV', form.errors.CVV)}</span>
                    </div>
                </div>
                <div className="divsLabelXinput" style={{ flexDirection: 'row' }}>
                    <div className="input-group">
                        <label htmlFor="MesVenc">Mes de vencimento</label>
                        <input type="number" id="MesVenc" required name='MesVenc' 
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        />
                        <span className='ErrorClass'>{getErrorMessage('MesVenc', form.errors.MesVenc)}</span>
                    </div>
                    <span className='space34'></span>
                    <div className="input-group">
                        <label htmlFor="Year">Ano de vencimento</label>
                        <input type="Number" id="Year" required name='Year' 
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        />
                        <span className='ErrorClass'>{getErrorMessage('Year', form.errors.Year)}</span>
                    </div>
                </div>
                <br />
                <button className='buttonStyle' type='submit'>Finalizar pagamento</button>
            </s.AsidePaymentForm>
            <button className='buttonStyle' type='button' onClick={() => setarAside('FORM')}>Voltar para a edição de endereço</button>
        </s.AsidePaymentContainer>
    )
}