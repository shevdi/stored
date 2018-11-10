import * as React from 'react';

import Header from '../components/Header';
import Disk from '../containers/Disk/Disk';
import { Grid } from 'react-bootstrap';

class HomePage extends React.PureComponent {
  public render() {
    return (
      <div>
        <Header isLogged={true} />
        <Grid>
          <Disk />
        </Grid>
      </div>
    );
  }
}

export default HomePage;
