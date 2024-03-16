import './App.scss';
import imgCardOk from './assets/icon-complete.svg';
import imgMobile from "./assets/bg-main-mobile.png";
import backCard from './assets/bg-card-back.png';
import frontCard from './assets/bg-card-front.png';
import cardlogo from "./assets/card-logo.svg";
import React from 'react';
import { cardRegister, cardRequestData } from './schema/card.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export function App() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<cardRequestData>({
    mode: "onBlur",
    resolver: zodResolver(cardRegister),
});
  
  const [name, setName] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [dateM, setDateM] =  useState<string>();
  const [dateY, setDateY] =  useState<string>();  
  const [codSafe, setCodSafe] = useState<string>();
  const [cardOk, setCardOk] = useState<boolean>(false);

  const onSubmit = (data: cardRequestData) => {
    console.log('deu certo');
    setCardOk(true);
    reset();
    console.log(data);
  }

  const resetForm = () => {
    setCardOk(false);
    console.log('voltou');
    console.log(cardOk)
  }

  //Separar a sequência em grupos de 4 numeros
  const renderCardNumber = () => {
    if (!cardNumber) return ''; 

    const groupedNumbers = [];
    for (let i = 0; i < cardNumber.length; i += 4) {
      groupedNumbers.push(cardNumber.slice(i, i + 4));
    }
    return groupedNumbers.join(' ');
  };

  const renderBar = () => {
    if(!dateM){
       return '';
      }else{
        return <span>/</span>;
    }
   
  };

  return ( 
    <div className='page'>
      <div className="cads">
        <img
          className='bgImg'
          src={imgMobile}
          alt=''
        />

        <div className="photoCard">
          <div className="photo1">
            <img src={backCard} className='cardBack'/> 
            <span className='numberCardBack'>{codSafe}</span>
          </div>

          <div className="photo2">
            <img src={frontCard} className='cardFront' alt=''/>
            <div className="textCardFront">
              <img 
                className='logoCard'
                src={cardlogo}
              />
              <span className='cardNumber'>{renderCardNumber()}</span>
              <div className='textName'>
                <p>{name}</p>
                <p>{dateM}
                  <span>
                    {renderBar()}
                  </span>
                  {dateY}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {cardOk === false ? (
          <div>
            <div className="inputs">
              <label htmlFor='name'>CARDHOLDER NAME</label>
              <input
                type='text'
                placeholder='e.g. Jane Appleseed'
                {...register('name')}
                className={errors.codSafe ? "error" : ""}
                name='name'
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className='alertInput'>{errors.name.message}</span>}
            </div>

            <div className="inputs">
              <label htmlFor='number'>CARD NUMBER</label>
              <input
                type='number'
                placeholder='e.g. 123 456 789'
                {...register('number')}
                className={errors.codSafe ? "error" : ""}
                name='number'
                onChange={(e) => setCardNumber(e.target.value)}
              />
              {errors.number && <span className='alertInput'>{errors.number.message}</span>}
            </div>

            <div className='allDates'>
              <div className='inputsDate'>
                <label htmlFor='mes'>EXP. DATE</label>
                <input 
                  type='number'
                  placeholder='MM'
                  {...register('expDateM')}
                  className={errors.codSafe ? "error" : ""}
                  name='expDateM'
                  onChange={(e) => setDateM(e.target.value)}
                />
                {errors.expDateM && <span className='alertInput'>{errors.expDateM.message}</span>}
              </div>

              <div className='inputsDate'>
                <label htmlFor='expDateY'>(MM/YY)</label>
                <input 
                  type='number'
                  placeholder='YY'
                  {...register('expDateY')}
                  className={errors.codSafe ? "error" : ""}
                  name='expDateY'
                  onChange={(e) => setDateY(e.target.value)}
                />
                {errors.expDateY && <span className='alertInput'>{errors.expDateY.message}</span>}
              </div>

              <div className='inputsDate'>
                <label htmlFor='codSafe'>CVC</label>
                <input 
                  type='number'
                  placeholder='e. g. 123'
                  {...register('codSafe')}
                  className={errors.codSafe ? "error" : ""}
                  name='codSafe'
                  onChange={(e) => setCodSafe(e.target.value)}
                />
                {errors.codSafe && <span className='alertInput'>{errors.codSafe.message}</span>}
              </div>
            </div>

            <input 
              value="Confim"
              className='bntEnviar'
              type='submit'
            />
          </div>
        ):( 
          <div className="ok">
            <img
              src={imgCardOk}
              alt=''
            />
            <h1>Thank you !</h1>
            <p>We've added your card details</p>
            <input 
              value="Continue"
              className='bntEnviar'
              type='button'
              onClick={resetForm}
            />
          </div>
        )}
      </form>
    </div>
  );
};