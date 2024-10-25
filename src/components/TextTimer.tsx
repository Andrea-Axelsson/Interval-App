import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

// Funktion för att konvertera siffror till ord (svenska)
const numberToWords = (num: number) => {
  const units = ['NOLL', 'ETT', 'TVÅ', 'TRE', 'FYRA', 'FEM', 'SEX', 'SJU', 'ÅTTA', 'NIO'];
  const tens = ['TJUGO', 'TRETTIO', 'FYRTIO', 'FEMTIO'];

  if (num < 10) {
    return units[num];
  } else if (num < 20) {
    switch (num) {
      case 10: return 'TIO';
      case 11: return 'ELVA';
      case 12: return 'TOLV';
      case 13: return 'TRETTON';
      case 14: return 'FJORTON';
      case 15: return 'FEMTON';
      case 16: return 'SEXTON';
      case 17: return 'SJUTTON';
      case 18: return 'ARTON';
      case 19: return 'NITTON';
    }
  } else if (num < 60) {
    const ten = Math.floor(num / 10);
    const unit = num % 10;
    return unit === 0 ? tens[ten - 2] : `${tens[ten - 2]}${units[unit]}`;
  }
  return `${num}`;
};

const TextTimer = () => {
  const currentSeconds = useSelector((state: RootState) => state.timer.currentSeconds); // Hämta nuvarande sekunder från Redux

  // Dela upp sekunder till minuter och sekunder
  const minutes = Math.floor(currentSeconds / 60);
  const seconds = currentSeconds % 60;

  return (
    <div className="text-timer">
      <h2 className="h2">
        {numberToWords(minutes)} MINUTER OCH {numberToWords(seconds)} SEKUNDER KVAR
      </h2>
    </div>
  );
};

export default TextTimer;