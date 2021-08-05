import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// -----------------------------------------------------------------------------
// import logo from '~/assets/detective/detective.svg';
import logo from '~/assets/godtaskerFont/GroupgodtaskerFontPlainGrey.svg';
// import logo from '~/assets/godtaskerFont/GroupgodtaskerFontLogoGrey.svg';
import insert from '~/assets/insert_photo-24px.svg';
import { signOutUser } from '~/store/modules/user/actions';
import { signOutPhonenumber } from '~/store/modules/phonenumber/actions';
import { signOut } from '~/store/modules/auth/actions';
import { Container } from './styles';
import Button from '../Buttons'
// -----------------------------------------------------------------------------
export default function Header({ headerMenu, setHeaderMenu }) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  // console.log(headerMenu)
  const [dropMenu, setDropMenu] = useState();

  async function handleSignOut() {
    await dispatch(signOutUser(null))
    await dispatch(signOutPhonenumber(null, false))
    await dispatch(signOut());
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <div className="header-wrapper">

        <ul className="header-menu">
          <li className="header-menu-item">
            <Button type="01" onClick={() => setHeaderMenu(0)}>
              New Task
            </Button>
          </li>
          <li className="header-menu-item">

            { headerMenu === 1
              ? (
                <button className="header-button selected" onClick={() => setHeaderMenu(1)}>
                  <label className="header-label-selected" >Sent Tasks</label>
                </button>
              )
              : (
                <button className="header-button" onClick={() => setHeaderMenu(1)}>
                  <label className="header-label" >Sent Tasks</label>
                </button>
              )
            }

          </li>
          <li className="header-menu-item">
            { headerMenu === 2
              ? (
                <button className="header-button selected" onClick={() => setHeaderMenu(2)}>
                  <label className="header-label-selected" >Received Tasks</label>
                </button>
              )
              : (
                <button className="header-button" onClick={() => setHeaderMenu(2)}>
                  <label className="header-label" >Received Tasks</label>
                </button>
              )
            }
          </li>
          <li className="header-menu-item">
            { headerMenu === 3
              ? (
                <button className="header-button selected" onClick={() => setHeaderMenu(3)}>
                  <label className="header-label-selected" >Dashboard</label>
                </button>
              )
              : (
                <button className="header-button" onClick={() => setHeaderMenu(3)}>
                  <label className="header-label" >Dashboard</label>
                </button>
              )
            }
          </li>
          <li className="header-menu-item">
              { headerMenu === 5
                ? (
                  <button className="header-button selected" onClick={() => setHeaderMenu(5)}>
                    <label className="header-label-selected">Search People</label>
                  </button>
                )
                : (
                  <button className="header-button" onClick={() => setHeaderMenu(5)}>
                    <label className="header-label">Search People</label>
                  </button>
                )
              }
          </li>
          {/* <li className="header-menu-item">
            <button className="header-button" onClick={() => setHeaderMenu(4)}>
              <label className="header-label">Chat</label>
            </button>
          </li> */}
        </ul>

        <aside className="header-aside">
          <div className="drop-down-div">
            <div className="profile" onClick={() => setDropMenu(!dropMenu)}>
              {!profile.avatar
                ? (
                  <div className="image-background-div">
                    <img
                      className="image-user"
                      src={insert} alt="User"
                    />
                  </div>
                )
                : (
                  <div className="image-background-div">
                    <img
                      className="image-user"
                      src={profile.avatar.url}
                      alt="User"
                    />
                  </div>
                )
              }

            </div>
            { dropMenu && (
              <div className="drop-menu">
                <strong className="profile-strong">
                  {profile.user_name}
                </strong>
                <Link to="/profile">
                  <button className="drop-menu-button">
                    {/* <MdSettings color="#fff" size={28}/> */}
                    <label className="drop-menu-label">Edit Profile</label>
                  </button>
                </Link>
                <button className="drop-menu-button" onClick={handleSignOut}>
                  {/* <MdSettings color="#fff" size={28}/> */}
                  <label className="drop-menu-label">Exit</label>
                </button>

              </div>
            )}
          </div>

          <img
            className="image-logo"
            src={logo}
            alt="gerenteDash"
          />

        </aside>
      </div>
    </Container>
  );
}
