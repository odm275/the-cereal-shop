import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import cerealLogo from "../images/cereals-svgrepo-com.svg"
console.log(cerealLogo)
const Header = ({ siteTitle }) => (
  <header className="bg-gray-900">
    <div className="flex items-center justify-between py-3 container mx-auto">
      <div>
        <img src={cerealLogo} alt="Cereal Logo" className="h-8 w-8 m-0" />
      </div>
      <div>
        <button
          type="button"
          className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg
            className="h6 w-6 fill-current"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
          </svg>
        </button>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
