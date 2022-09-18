import React, { useState } from 'react';
import { months } from '../../utils/dateUtils.js';
import Modal from '../modal/Modal';

import './header.scss';

const Header = ({ lastWeek, nextWeek, nowWeek, nowMonth, modalBtnEvent }) => {
  
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={modalBtnEvent}>
        <i className="fas fa-plus create-event-btn__icon"></i>Создать
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={nowWeek}>Сегодня</button>
        <button className="icon-button navigation__nav-icon" onClick={lastWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={nextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{months[nowMonth]}</span>
      </div>
    </header>
  );
};

export default Header;
