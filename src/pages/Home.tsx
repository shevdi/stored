import * as React from 'react';

import Header from '../components/Header';
import Disk from '../containers/Disk/Disk';

class HomePage extends React.PureComponent {
  public render() {
    return (
      <div>
        <Header isLogged={true} />
        <Disk />
      </div>
    );
  }
}

export default HomePage;
