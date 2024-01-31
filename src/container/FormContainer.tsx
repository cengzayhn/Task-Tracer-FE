import React from 'react';
import { Grid } from '@mui/material';

// Higher Order Component as Wrapper
const FormContainer: <P extends object>(FormComponent: React.ComponentType<P>) => React.FC<P> = (FormComponent) => {
  const Container: React.FC<any> = (props) => (
    <form action="post">
      <Grid container>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <FormComponent {...props} />
      </Grid>
      <Grid item xs={4} />
      </Grid>
    </form>
  );

  return Container;
};

export default FormContainer;
