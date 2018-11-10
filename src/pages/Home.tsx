import * as React from 'react';

import Header from '../components/Header';

class HomePage extends React.PureComponent {
  public render() {
    return (
      <div>
        <Header isLogged={true} />
      </div>
    );
  }
}

export default HomePage;
