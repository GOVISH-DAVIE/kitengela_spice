import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SimpleMediaQuery() {
 
     
  const matches:boolean = useMediaQuery('(min-width:600px)');


  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}