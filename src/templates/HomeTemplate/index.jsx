import React from 'react';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { Route } from 'react-router';

export const HomeTemplate = (props) => {
    const { Component, ...restProps } = props;
  
    return (
      <Route
        {...restProps}
        render={(propsRoute) => {
          // render sẽ trả về props.location, props.history, props.match
          return (
            <>
              <Header {...propsRoute} />
              
              <Component {...propsRoute} />
  
              <Footer />
            </>
          );
        }}
      />
    );
  };

export default HomeTemplate;