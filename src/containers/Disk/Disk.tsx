import * as React from 'react';
import { connect } from 'react-redux';
import { bind } from 'decko';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import * as H from 'history';
import * as bytes from 'bytes';

import { IReduxState } from 'types';
import { types, actions } from './redux';

interface IProps {
  resources: Array<types.IDir | types.IFile>;
  location: string;
  history: H.History;
  getResources: (path?: string) => void;
}

class Disk extends React.PureComponent<IProps> {
  public componentDidMount() {
    const { getResources, location } = this.props;
    getResources(location);
  }

  public componentDidUpdate(prevProps: IProps) {
    const { getResources, location } = this.props;
    if (prevProps.location !== location) {
      getResources(location);
    }
  }

  public render() {
    const { resources, location } = this.props;
    if (resources.length === 0) {
      return null;
    }

    return (
      <ListGroup>
        {location.split('/')[1] && (
          <ListGroupItem onClick={this.moveUp}>
            <Glyphicon glyph="align-left glyphicon glyphicon-folder-open" />
            &nbsp;
            ...
          </ListGroupItem>
        )}
        {resources.map((resource) => resource.type === 'dir'
          ? this.renderDir(resource)
          : this.renderFile(resource),
        )}
      </ListGroup>
    );
  }

  @bind
  private renderDir(resource: types.IDir) {
    return (
      <ListGroupItem key={resource.resource_id} onClick={this.openFolder(resource)}>
        {<Glyphicon glyph="align-left glyphicon glyphicon-folder-close" />}
        &nbsp;
        <b>{resource.name}</b>
      </ListGroupItem>
    );
  }

  @bind
  private renderFile(resource: types.IFile) {
    return (
      <a href={resource.file} key={resource.resource_id}>
        <ListGroupItem>
          &nbsp;
          <b>{resource.name}</b>
          {resource.type === 'file' && ` - ${bytes(resource.size)}`}
        </ListGroupItem>
      </a>
    );
  }

  @bind
  private openFolder(resource: types.Resource) {
    const path = (resource as types.IDir).path.slice(5);
    return () => {
      this.props.history.push(path);
    };
  }

  @bind
  private moveUp() {
    const { location } = this.props;
    const pathParts = location.split('/');
    const path = location.slice(0, -pathParts[pathParts.length - 1].length);
    this.props.history.push(path);
  }
}

const mapStateToProps = (state: IReduxState) => ({
  resources: state.disk.resources,
});

const mapDispatchToProps = {
  getResources: actions.getResources,
};

export default connect(mapStateToProps, mapDispatchToProps)(Disk);
