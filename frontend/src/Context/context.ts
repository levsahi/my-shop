import React from 'react';
import {Person} from '../interface/person';
import AppContext from '../interface/AppContext'


const Context = React.createContext<AppContext | null>(null);


export default Context