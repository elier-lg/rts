// Libraries
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { DevImg } from '../svgImg/svgImg';

// Assets
import '../Header/styles.scss';
import { Menu as MenuIcon } from '@material-ui/icons';
import config from '../../config';
import { Person } from '../../state/interfaces';

type headerProps = {
  isPublic: boolean;
  loggedPerson: Person;
} & typeof Header.defaultProps;

class Header extends React.Component<headerProps> {
  static defaultProps = {
    loggedPerson: { fullName: 'No User' } as Person,
  };

  state = {
    showMenu: false,
  };

  componentWillUnmount() {
    // document.removeEventListener("click", this.handleOutsideClick);
  }

  toggleMenu = () => {
    const { showMenu } = this.state;

    this.setState({ showMenu: !showMenu });
  };

  renderMenu = () => {
    const { showMenu } = this.state;
    const { loggedPerson } = this.props;
    return (
      <>
        <div className={'user'}>
          <FontAwesomeIcon className={'icon'} icon={faUser} />
          {loggedPerson && loggedPerson.fullName}
        </div>
        <button className={'btn'} onClick={this.toggleMenu}>
          <MenuIcon />
        </button>
        {showMenu && (
          <div className={'menu'}>
            <a
              className={'item'}
              href={config.helpUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Help</span>
            </a>
            <button className={'item'}>
              <span>Sign out</span>
            </button>
          </div>
        )}
      </>
    );
  };

  render() {
    const { isPublic } = this.props;

    return (
      <header className={'header'}>
        <DevImg className={'logo'} />
        <div className={'title'}>
          <span>RTS</span>
        </div>
        {!isPublic && this.renderMenu()}
      </header>
    );
  }
}

export default Header;
