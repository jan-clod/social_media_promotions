import React from 'react';
import './CommercialOffer.scss';
import Container from '../../UI/container/Container';
import { Questionnaire } from './questionnaire/Questionnaire';

export const CommercialOffer: React.FC = () => {
  return (
    <div className="commercialOffer">
      <Container className="container">
        <div className="title">Коммерческое предложение</div>
        <div className="subtitle">Коммерческое предложение</div>
        <Questionnaire />
      </Container>
    </div>
  );
};
