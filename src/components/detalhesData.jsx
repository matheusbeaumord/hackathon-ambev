import React, { useContext, useState } from 'react';
import myContext from '../Context';
import '../CSS/calendar.css';

const DetalhesData = () => {
  const { CEP, setCEP, city, setCity } = useContext(myContext);
  const [message, setMessage] = useState(null);
  const [cidadePedidos, setCidadePedidos] = useState([
    {
      cep: '37505448',
      city: 'Itajubá',
      neighborhood: 'Novo Horizonte',
      service: 'viacep',
      state: 'MG',
      street: 'Rua Luiz Antônio Castelani',
      cart: { 0: { price: 2000, qty: 1 } },
    },
    {
      cep: '30140003',
      city: 'Belo Horizonte',
      neighborhood: 'Funcionários',
      service: 'viacep',
      state: 'MG',
      street: 'Avenida Brasil',
      cart: { 1: { price: 2000, qty: 1 } },
    },
    {
      cep: '35400000',
      city: 'Ouro Preto',
      neighborhood: 'Antonio Pereira',
      service: 'viacep',
      state: 'MG',
      street: 'Rua 33',
      cart: { 2: { price: 2000, qty: 1 } },
    },
    {
      cep: '36420000',
      city: 'Ouro Branco',
      neighborhood: '',
      service: 'viacep',
      state: 'MG',
      street: '',
      cart: { 3: { price: 2000, qty: 2 } },
    },
    {
      cep: '36202338',
      city: 'Barbacena',
      neighborhood: 'São Sebastião',
      service: 'viacep',
      state: 'MG',
      street: 'Rua Afrânio de Castro Costa',
      cart: { 4: { price: 2000, qty: 14 } },
    },
    {
      cep: '36031470',
      city: 'Juiz de Fora',
      neighborhood: 'Ipiranga',
      service: 'viacep',
      state: 'MG',
      street: 'Rua Afonso Gomes',
      cart: { 5: { price: 2000, qty: 16 } },
    },
    {
      cep: '30315500',
      city: 'Belo Horizonte',
      neighborhood: 'Sion',
      service: 'viacep',
      state: 'MG',
      street: 'Rua Califórnia',
      cart: { 6: { price: 2000, qty: 10 } },
    },
  ]);
  const pedidos = cidadePedidos
    .filter((e) => e.city === city.city)
    .map((e) => Object.values(e.cart).map((sec) => sec.qty));

  return (
    <div className="cidade">
      <div>
        <h2>Pedidos nessa data: </h2>
        {city ? (
          cidadePedidos
            .filter((e) => e.city === city.city)
            .map((e, index) => {
              console.log(Object.entries(e.cart));
              return (
                <p>
                  Cidade: {e.city} - Quantidade {Object.entries(e.cart)[0][1].qty}
                </p>
              );
            })
        ) : (
          <p>Sem pedidos para essa cidade ainda</p>
        )}
      </div>
    </div>
  );
};

export default DetalhesData;
