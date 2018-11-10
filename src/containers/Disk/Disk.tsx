import * as React from 'react';
import { connect } from 'react-redux';

import { IReduxState } from 'types';
import { types, actions } from './redux';

interface IProps {
  resources: types.Resource[];
  getResources: () => void;
}

class Disk extends React.PureComponent<IProps> {
  public componentDidMount() {
    this.props.getResources();
  }

  public render() {
    return (
      <div>
        content
      </div>
    );
  }
}

const mapStateToProps = (state: IReduxState) => ({
  resources: state.disk.resources,
});

const mapDispatchToProps = {
  getResources: actions.getResources,
};

export default connect(mapStateToProps, mapDispatchToProps)(Disk);
