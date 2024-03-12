import './App.scss';
import imgMobile from './assets/bg-main-mobile.png';
import backCard from './assets/bg-card-back.png';
import frontCard from './assets/bg-card-front.png';

import cardlogo from './assets/card-logo.svg';

import imgDesk from './assets/bg-main-desktop.png';

function App() {
  

  return ( 
    <div className='page'>
      <div className="cads">
        {window.innerWidth <= 1120 }
        <img
          className='bgImg'
          src={imgDesk}
        />

        <div className="photoCard">
          <div className="photo1">
            <img src={backCard} className='cardBack'/> 
            <span className='numberCardBack'>000</span>
          </div>

          <div className="photo2">
            <img src={frontCard} className='cardFront'/>
            <div className="textCardFront">
              <img 
                className='logoCard'
                src={cardlogo}
              />
              <span className='cardNumber'>0000 0000 0000 0000</span>
              <div className='textName'>
                <p>JANE APPLESEED</p>
                <p>00/00</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <form>
        <div className="inputs">
          <label htmlFor='name'>CARDHOLDER NAME</label>
          <input
            type='text'
            placeholder='e.g. Jane Appleseed'
            name='name'
          />
        </div>
        <div className="inputs">
          <label htmlFor='number'>CARD NUMBER</label>
          <input
            type='number'
            placeholder='e.g. 123 456 789'
            name='number'
          />
        </div>

        <div className='allDates'>
          <div className='inputsDate'>
            <label htmlFor='mes'>EXP. DATE</label>
            <input 
              type='number'
              placeholder='MM'
              name='mes'
            />
          </div>

          <div className='inputsDate'>
            <label htmlFor='ano'>(MM/YY)</label>
            <input 
              type='number'
              placeholder='YY'
              name='ano'
            />
          </div>

          <div className='inputsDate'>
            <label htmlFor='cvc'>CVC</label>
            <input 
              type='number'
              placeholder='e. g. 123'
              name='cvc'
            />
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

export default App