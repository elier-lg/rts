// Libraries
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { DevImg } from '../svgImg/svgImg';
import { Link } from 'react-router-dom';

// Assets
import styles from '../Header/styles.module.scss';
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

  toggleMenu = () => {
    const { showMenu } = this.state;

    this.setState({ showMenu: !showMenu });
  };

  renderMenu = () => {
    const { showMenu } = this.state;
    const { loggedPerson } = this.props;
    return (
      <>
        <div className={styles.user}>
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
          {loggedPerson && loggedPerson.fullName}
        </div>
        <button className={styles.btn} onClick={this.toggleMenu}>
          <MenuIcon />
        </button>
        {showMenu && (
          <div className={styles.menu}>
            <Link className={styles.item} to="public/help">
              <span>Help</span>
            </Link>
            <button className={styles.item}>
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
      <header className={styles.header}>
        <DevImg className={styles.logo} />
        <div className={styles.title}>
          <span>RTS</span>
        </div>
        {!isPublic && this.renderMenu()}
      </header>
    );
  }
}

export default Header;
