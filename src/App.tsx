import './App.scss';
import imgMobile from "./assets/bg-main-mobile.png";
import backCard from './assets/bg-card-back.png';
import frontCard from './assets/bg-card-front.png';
import cardlogo from "./assets/card-logo.svg";
import imgDesk from './assets/bg-main-desktop.png';
import React from 'react';

import { cardRegister, cardRequestData } from './schema/card.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useState, useEffect } from 'react';

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
  const [cardNumber, setCardNumber] = useState<string>();
  const [dateM, setDateM] =  useState<string>();
  const [dateY, setDateY] =  useState<string>();  

  const [codSafe, setCodSafe] = useState<string>();

  const onSubmit = () => {


    console.log(name)
  }


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
              <span className='cardNumber'>{cardNumber}</span>
              <div className='textName'>
                <p>{name}</p>
                <p>00/00</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <label >CARDHOLDER NAME</label>
          <input
            type='text'
            placeholder='e.g. Jane Appleseed'
            
            //onChange={(e) => setName(e.target.value)}
            {...register('name')}
          />
          {errors.name && <span className='alertInput'>{errors.name.message}</span>}
        </div>
        <div className="inputs">
          <label htmlFor='number'>CARD NUMBER</label>
          <input
            type='text'
            placeholder='e.g. 123 456 789'
            name='number'
            onChange={(e) => setCardNumber(e.target.value)}
          />
          {errors.number && <span className='alertInput'>{errors.number.message}</span>}
        </div>

        <div className='allDates'>
          <div className='inputsDate'>
            <label htmlFor='mes'>EXP. DATE</label>
            <input 
              maxLength={2}
              type='text'
              placeholder='MM'
              name='mes'
              onChange={(e) => setDateM(e.target.value)}
            />
            {errors.expDateM && <span className='alertInput'>{errors.expDateM.message}</span>}

          </div>

          <div className='inputsDate'>
            <label htmlFor='ano'>(MM/YY)</label>
            <input 
              maxLength={2}
              type='text'
              placeholder='YY'
              name='ano'
              onChange={(e) => setDateY(e.target.value)}
            />
            {errors.expDateY && <span className='alertInput'>{errors.expDateY.message}</span>}
          </div>

          <div className='inputsDate'>
            <label htmlFor='cvc'>CVC</label>
            <input 
              maxLength={3}
              type='text'
              placeholder='e. g. 123'
              name='cvc'
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
      </form>
    </div>
  );
};


