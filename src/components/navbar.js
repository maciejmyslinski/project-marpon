import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo_marpon.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav className='navbar is-transparent' role='navigation'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item' title='Logo'>
              <img
                src={logo}
                alt='Mechanik samochodowy - Inowrocław'
                style={{ width: '124px' }}
              />
            </Link>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu'
              onClick={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id='navMenu'
            className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className='navbar-start has-text-centered'>
              <Link className='navbar-item' to='/contact'>
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
