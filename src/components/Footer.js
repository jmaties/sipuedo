import React from 'react'
import { Link } from 'gatsby'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <p>Re-Hecho quitando algo de tiempo a <Link to="https://www.geekia.es">geekia.es</Link></p>
        </div>
      </footer>
    )
  }
}

export default Footer
