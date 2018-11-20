import React, { Component } from 'react';
import './styles.scss';
import logo from '../../assets/isko-logotype-negative.svg';
import logo2x from '../../assets/isko-logotype-negative@2x.png';
import logo3x from '../../assets/isko-logotype-negative@3x.png';

class Header extends Component {
    state =  {
        isNavOpen: false,
        isScrolled: false,
    }

    toggleNav = () => {
        this.setState(({ isNavOpen }) => ({ isNavOpen: !isNavOpen }));
        console.log(this.state);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
      }
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
      }
      handleScroll(e) {
        if (window.scrollY === 0 && this.state.isScrolled === true) {
            this.setState({isScrolled: false});
        }
        else if (window.scrollY !== 0 && this.state.isScrolled !== true) {
            this.setState({isScrolled: true});
        }
      }

    render = () => {
        return (
            <header className={`header ${this.state.isScrolled ? 'scrolled' : ''}`}>
                <div className="header__inner">
                    <img src={logo} srcSet={logo2x, logo3x} className="header__logo"/>
                    <div className="spacer" />
                    <nav className={`header__navbar navbar ${this.state.isNavOpen ? 'opened' : ''}`}>
                        <ul className="navbar__list">
                            <li className="navbar__item"><a className="navbar__link" href="/">OUR DENIM</a></li>
                            <li className="navbar__item"><a className="navbar__link" href="/">PRODUCTS</a></li>
                            <li className="navbar__item"><a className="navbar__link" href="/">HUBS</a></li>
                            <li className="navbar__item"><a className="navbar__link" href="/">STORIES</a></li>
                            <li className="navbar__item"><a className="navbar__link" href="/">WE CARE</a></li>
                        </ul>
                    </nav>
                    <button className={`header__toggle-button toggle-button ${this.state.isNavOpen ? 'open' : ''}`} onClick={this.toggleNav}>
                        <div className="toggle-button__line"/>
                        <div className="toggle-button__line"/>
                        <div className="toggle-button__line"/>
                    </button>
                </div>
            </header>
        );
    }
}
export default Header;
