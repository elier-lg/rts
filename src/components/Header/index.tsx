// Libraries
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { DevImg } from '../svgImg/svgImg';

// Assets
import '../Header/styles.scss';
import { Menu as MenuIcon } from '@material-ui/icons';
import config from '../../config';
import { headerProps } from '../../interfaces';

class Header extends React.Component<headerProps> {
  state = {
    showMenu: false,
    userName: undefined,
  };

  componentWillUnmount() {
    // document.removeEventListener("click", this.handleOutsideClick);
  }

  toggleMenu = () => {
    const { showMenu } = this.state;

    this.setState({ showMenu: !showMenu });
  };

  renderMenu = () => {
		const { showMenu, userName } = this.state;
    return (
      <>
        <div className={'user'}>
          <FontAwesomeIcon className={'icon'} icon={faUser} />
          {userName ?? 'John Doe'}
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
