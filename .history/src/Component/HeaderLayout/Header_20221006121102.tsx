import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
<header id="site-header" className="fixed-top">
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg stroke">
      <h1>
        <a className="navbar-brand d-flex align-items-center" href="index.html">
          <img src="assets/images/logo.png" alt className="mr-1" />Studious</a>
      </h1>
      {/* if logo is image enable this   
    <a class="navbar-brand" href="#index.html">
  <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
    </a> */}
      <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon fa icon-expand fa-bars" />
        <span className="navbar-toggler-icon fa icon-close fa-times" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-lg-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="courses.html">Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact Us</a>
          </li>
          {/* search button */}
          <div className="search-right ml-lg-3">
            <form action="#search" method="GET" className="search-box position-relative">
              <div className="input-search">
                <input type="search" placeholder="Enter Keyword" name="search" required="required" autofocus className="search-popup" />
              </div>
              <button type="submit" className="btn search-btn"><i className="fa fa-search" aria-hidden="true" /></button>
            </form>
          </div>
          {/* //search button */}
        </ul>
      </div>
      {/* toggle switch for light and dark theme */}
      <div className="cont-ser-position">
        <nav className="navigation">
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className="mode-container">
                <i className="gg-sun" />
                <i className="gg-moon" />
              </div>
            </label>
          </div>
        </nav>
      </div>
      {/* //toggle switch for light and dark theme */}
    </nav>
  </div>
</header>

  )
}