// Libraries
import React from "react";
// import PropTypes from "prop-types";
// import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

// Assets
import "../Header/styles.scss";
import { Menu as MenuIcon } from "@material-ui/icons";
import config from "../../config";

import { headerProps } from '../../interfaces'

class Header extends React.Component<headerProps> {

	state = {
		showMenu: false,
		userName: ''
	}

	componentWillUnmount() {
		// document.removeEventListener("click", this.handleOutsideClick);
	}

	toggleMenu = () => {
		const {
			showMenu
		} = this.state;

		this.setState({ showMenu: !showMenu });
	}


	render() {
		// const {
		// 	features
		// } = this.context;

		const {
			isPublic
		} = this.props;

		const {
			showMenu,
			userName
		} = this.state;

		return (
			<header className={"header"}>
				{/* <Logo className={ styles.logo } /> */}
				<div className={"title"}>
					<span>Title</span>
					{/* <FormattedMessage id="app.title" /> */}
				</div>
				{
					!isPublic && (
						<>
							<div className={"user"}>
								{/* <FontAwesome
									className={"icon"}
									name={"faUser"}
								/> */}
								{userName ?? "Elier Lopez"}
							</div>
							<button
								className={"btn"}
								onClick={this.toggleMenu}
							// ref={
							// 	(el) => {
							// 		this.btnMenu = el;
							// 	}
							// }
							>
								<MenuIcon />
							</button>
							{
								showMenu && (
									<div className={"menu"}>
										<button
											className={"item"} >
											<span>Terms and conditions</span>
										</button>
										<a
											className={"item"}
											href={config.helpUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<span>Helpv</span>
											{/* <FormattedMessage id="app.help" /> */}
										</a>
										<a
											className={"item"}
											href={config.feedbackUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<span>Feedback</span>
											{/* <FormattedMessage id="app.feedBack" /> */}
										</a>
										{
											<Link
												className={"item"}
												to="/admin"
											>
												<span>admin</span>
												{/* <FormattedMessage id="app.admin" /> */}
											</Link>
										}
										<button
											className={"item"} >
											<span>Sign out</span>
											{/* <FormattedMessage id="app.signOut" /> */}
										</button>
									</div>
								)
							}
						</>
					)
				}
			</header>
		);
	}
}

// export default injectIntl(Header);
export default Header;
