import React from "react"

const Header = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Swifty</h2>
      </div>
      <button
        onClick={() => setLibraryStatus(!libraryStatus)}
        className="toggle-library"
      >
        View Library
      </button>
    </nav>
  )
}

export default Header
