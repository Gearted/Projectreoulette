import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Catalogue() {
  return (
    <div>
      <h1><Header /></h1>
      <h1><Footer /></h1>
    </div>
    );
}