import * as React from 'react';
import { connect } from 'react-redux';
import { bind } from 'decko';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';

import { IReduxState } from 'types';
import { types, actions } from './redux';

interface IProps {
  resources: types.Resource[];
  folderPath: string;
  getResources: (path?: string) => void;
}

class Disk extends React.PureComponent<IProps> {
  public componentDidMount() {
    this.props.getResources();
  }

  public render() {
    const { resources, folderPath } = this.props;
    return (
      <ListGroup>
        {folderPath.split('/')[1] && (
          <ListGroupItem onClick={this.moveUp}>
            <Glyphicon glyph="align-left glyphicon glyphicon-folder-open" />
            &nbsp;
            ...
          </ListGroupItem>
        )}
        {resources.map((resource, index) => {
          return (
            <ListGroupItem key={index} onClick={this.openFolderHandler(resource)}>
              {resource.type === 'dir' && <Glyphicon glyph="align-left glyphicon glyphicon-folder-close" />}
              &nbsp;
              {resource.name}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }

  @bind
  private openFolderHandler(resource: types.Resource) {
    if (resource.type === 'dir') {
      return () => {
        const { getResources } = this.props;
        getResources((resource as types.IDir).path.slice(5));
      };
    }
  }

  @bind
  private moveUp() {
    const { folderPath, getResources } = this.props;
    const pathParts = folderPath.split('/');
    const path = folderPath.slice(5, -pathParts[pathParts.length - 1].length);
    getResources(path);
  }
}

const mapStateToProps = (state: IReduxState) => ({
  resources: state.disk.resources,
  folderPath: state.disk.folderPath,
});

const mapDispatchToProps = {
  getResources: actions.getResources,
};

export default connect(mapStateToProps, mapDispatchToProps)(Disk);
