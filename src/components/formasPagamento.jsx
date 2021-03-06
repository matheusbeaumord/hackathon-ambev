import React from 'react';
import '../CSS/pagamento.css';
function FormaPagamento(props) {
  console.log(props);
  switch (props.forma) {
    case 'credit':
      return (
        <div className="flex-me">
          <label htmlFor="cred-name">Nome impresso no cartão: </label>
          <input type="text" name="cred-name" />
          <label htmlFor="cred-number">Número do cartão: </label>
          {/* <input type="text" name="cred-number" /> */}
          <input
            id="ccn"
            type="text"
            maxlength="19"
            placeholder="xxxx xxxx xxxx xxxx"
            onChange={(e) => {
              let num = e.target.value;
              const last = num[num.length - 1];
              if (isNaN(Number(last) || last !== ' ')) {
                e.target.value = num.slice(0, num.length - 1);
              }
            }}
            required
          />

          <label htmlFor="cvc">CVC: </label>
          <input
            type="text"
            name="cvc"
            maxLength="3"
            minLength="3"
            onChange={(e) => {
              let num = e.target.value;
              const last = num[num.length - 1];
              if (isNaN(Number(last))) {
                e.target.value = num.slice(0, num.length - 1);
              }
            }}
            required
          />

          <label htmlFor="cred-date">Data de validade: </label>
          <input
            type="text"
            onChange={(e) => {
              let num = e.target.value;
              const last = num[num.length - 1];
              if (isNaN(Number(last))) {
                e.target.value = num.slice(0, num.length - 1);
              }
            }}
            placeholder="Ex: MM/YYYY"
          />
        </div>
      );

    case 'credit':
      return;
    case 'boleto':
      return;
    case 'transfer':
      return;
    case 'pix':
      return;

    default:
      return null;
  }
}

export default FormaPagamento;
