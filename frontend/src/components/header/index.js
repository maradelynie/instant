import React from 'react';
import './style.scss';

import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header className="header__container">
      <h1><FontAwesomeIcon className="icon__default" icon={faClock}/> instant</h1>
    </header>
  );
}


