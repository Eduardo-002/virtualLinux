import React from 'react';

import useStyles from './Style';

import CardComponent from './CardComponent/CardComponent';

const NewsComponent = (props) => {
  const classes = useStyles();

  const {news} = props;


  return (
    <>
      {
        news.length>0?
        news.map((_newData,index) => {
          return (<CardComponent key={index} classes={classes} newData={_newData}/>)
        }):
        null
      }
    </>
  )
}

export default NewsComponent;