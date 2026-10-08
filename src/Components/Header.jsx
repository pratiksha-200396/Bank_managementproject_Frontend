
import React from "react";
import { Link } from "react-router-dom";

function Header() {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">

      <div className="container">

        {/* Logo */}

        <Link
          to="/"
          className="navbar-brand"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAACUCAMAAAD1XwjBAAAAz1BMVEX///8nHnkAtvD///3///sAAGPq6+/AvtBrZp4WA3UKAG7T0uEkG3iwrcYAAGazscgqIHgAs/Ct4PEAsPWY2vMAuOyUkbIAsvQAAHMjGHiwrMn29feem7n///fj4+oeD3bu//bD6PZ1zuzq+PbT7/mmorhSxPA/vO+k3+tmYpJPSog4MYJAPYdaVZAcC3givOtgy+/49f9gXIUaGG46M3iJ2e8AqvYpIG6Cf6uC0vgWEWxGQIM3LYV3dKBxbaDg8fiA1ePI7e+dmMVCwePZ9PFoAT66AAAIAUlEQVR4nO1ae3+iShJFuyPhoYIGkKAQJUajiWZ2MhNnHJPrTr7/Z9rqh0gjOrv3wv5VZ+YXE2jkVFGP091oGgKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAg/l8ghFIKH5QScnGY/FAGEXbp4Sz8IPwI0Y6jCOWX8AP00g3+JigdMf6E49LA43l65FF+DTek5Fb/hOcZ0PR+3GO4T+8ufj8QimK9C9DjKHd93C6gq1ut/A0iXZ6YRpcd9L9APG56N588zJocs9nLPOXRUGIGc7PlPy6WTqPhLBfXviWfAiG6adt2A/6Jn+z80/OwdQyW1vuKn7WvWqVP5W+CAvuJG7iCPfsI3PXLx7lbfPnX11UShoxHGCarrwtL+kE3+cE8wsR47WZXtq4NcbhS/kRLv33ve57kzwF/eZOPUZmx7c4gdMD5Ek4j6TzGkn/jBG9wehPRjL84Whl/XibGD4HXdHP0Xf4/WPcgWNQQIpFvho7C0HGcwavOArqMvw0GdjYyEOvgP0pvvGY5Au8mHan86TAJT0k2zOf4DH9uw5UuilP1/IH+jzPsWRS5P1Ilhoj+s4x+w/TPxQ9/QqttpNXAn/eRiSdStow9nJhoVHYg3omWyZEVhIYjQiTcWtCcDvydcAAwTXMQsiIEAxyjWwd/RmreP+9+bsO3QzMmYMnQdDijRrhahV/DlZFwhitfy/n/zfRvOfxtIlMlvK6FP6Fj1wsuGtBs9o4dVnvj7ocC6DxOrdjq+o+/DNuxn5T6Y3cseUG0SaS5Czaiev4fD+Whk0OwTg/GarFwvx06Q9l3I33XSAxfy/NvCP6spUWPIt7spV4DfzLq/Yk9oP+XvFcW4I3Vu7w/UxJD22zREv78iqlId9vp1sH/Y/an4IEMCH5/yuFadyCiIfHzqk3faKNy/oRaMoMb0xr40557rvTnDfguH0Dm/9DwM1XJFDfhAueUP+jlA/9a/J8Wo5/13dOEcGefQp/RuAMCB9j8fLJOpV0Jf0K6sl38qiH+ycfaLdAPQHt6wYkJogRBGf0ZinpiPFon2qgkfrRD/oavVtX8wTlzt8h/0tvvx6yjKXnhTqicUz1Kho65nVqipWUKSeXP6cW+CB8nWXAJVyX/EaEvrmKA2+ylrFnd9WaqYe5DKhJU068a0oDEWOymMVf+h0zI84c/NrvdsxOKfgEVtur+BaJfDR83mI/Yt8KJubtW2vLsQ94tWpiZ+EwM+3XHJy8l/FmrTpJESNUw6cR8UKXxo90V4vy3JsUm1SaFU+ODjy0z028gfkKj85xlcpH/Kgwbst11dK1q/0Pc3n1XOAY9GQoQ0HM1h73x4TJ66ySK/F+Zm1hYUOSfGWo/dbXK9TN8310+RkBrZkKHkLGa1zn+pP1k2HkDQnOhn9R/ovBfbuRDqtj/qvTM/A/nCroi409YS9p1TMUC09HFMskZ/4OJS6v6+NGK8TMhVBR1qv0VeOX82Y9IvzZN24EEkGYkW0a4UH8Y/2yanNShP0eq+Ol7KRW1nKYzZUrjevfKhewZwOTkGCDGI6ukBf93zA7M9GWuD/yq+VMymhXa10PE45imk8BTcuPhszCLJ1rLf31LDmEUDoaUUNX/rTi2dP9VGhA+WRXzB9H1Q30AbvCyT4HGHhqwspgCs2DlbiJbv3R3zso5xkdJ/9U0C6ZgTDE5gzakTsX6rVcUa9CB6Wi8PpEVvbKbES3qvh4M6OikTP+AAWaDDzF9UBBV68+CfvOawQ2lvX5BVLuzfelqMZScWFYix/RpOX9tIUxcXbcq508nxemLe0OK/D3Xe4iyzkBzicAm9FO55LC6js7w38g5A5sjV81/X1w5EfzVY17/5kiZtIbx8c7gUck/2bbK+ZN/d/gjClkLqHr+mL78N/xnd7kdCL/zquf5DyT/xRn+2rv0fw38KegEdfmkJH5cd34QaBAwXdNemcOYd2ImlNrS/0Yhfti0kq+qR3LFK6kjfghkgHvKX3F/f5Kb61qMjT1YTGNxQHdkfYfyouofKg0YymPGNTygqvlDp/39J/7rlEpZCu5ecO3mJMl217as9m4p66cNCrl0/jh9k3IVDKw+/sGAj5L4l/HjssWT5j5zP6UbEe2ga8IVTE6SxBbzE2eV71+OsfMFdtuVzddAoX91tcr5cxvG61wIqfEP/WA9PuYuuVV1Zwbbhu6a0w8NYyBgHFZ7ob6yiKtj/Zzufze9cv/3vVnvWPDBv8+DUgMc471FL6z/s4hra/XwhyTeT1xXrqHn4h+M6L/scxvB8Fu8M5NTcraxiPmO6hn+EGPmY1QXf9YG5l7gedwIyd91Pbff/JYqu5ysGnaXMAFWJpCOY37ls5Oz/CH4t3Fd+y9iO/zzpe+ytcRD/Lhu4L7cK2pBgMa7q0F+C8ZOOot4pK7fFvkPFi2xz12T/0dQYu6+gZhzA+H/oLmefJZpNnYofnfYyojcPk1eb4nYoWH8T7ZPQyhUv6Z8VsH5D2rYPxWgo/3N5GUO6fAwublPL23Ax8Pd8xLmhs5y8X6bbbBD/TGcAn7BiGkrt3+d8MONqy+Vv0BA2Epaylaw7iihF1+vgIEtq9tmrw8QLdtghfTuFqHzEdmbEZHeFsdvoxpegOCvbUDIU/FxaeDhNFtuzHK83GT+EsphAyQbSarnT44vt/xx5PHXk6/Io3hdNuKcsQgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKB+Mf4D5/OpTP8MatyAAAAAElFTkSuQmCC"
            alt="Online Bank"
            width="100"
            height="50"
          />
        </Link>

        {/* Mobile Menu Button */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bankNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}

        <div
          className="collapse navbar-collapse"
          id="bankNavbar"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link
                to="/"
                className="nav-link fw-semibold"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/create-account"
                className="nav-link fw-semibold"
              >
                Create Account
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link fw-semibold"
              >
                Customer Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/admin-login"
                className="nav-link fw-semibold"
              >
                Admin Login
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>

  );
}

export default Header;