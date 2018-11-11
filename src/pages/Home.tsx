import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Header from '../components/Header';
import Disk from '../containers/Disk/Disk';
import { Grid } from 'react-bootstrap';

class HomePage extends React.PureComponent<RouteComponentProps> {
  public render() {
    return (
      <div>
        <Header history={this.props.history} />
        <Grid>
          <Disk
            location={this.props.location.pathname}
            history={this.props.history}
          />
        </Grid>
      </div>
    );
  }
}

export default HomePage;
