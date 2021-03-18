import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  UserIcon,
  CogIcon,
  StarEmptyIcon,
  HelpIcon,
  LogOutIcon,
  MenuIcon,
  Pane,
  Popover,
} from 'evergreen-ui';
import Logo from 'components/logo/Logo';

import useWindowDimensions from 'hooks/useWindowDimensions';
import { Routes } from 'routes';

import './header.scss';
import Avatar from 'components/avatar/Avatar';

export default function Header({ username, avatar, onLogout }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  return (
    <header>
      <Logo small size={30} />

      <div className="actions">
        <Popover
          content={
            <Pane display="flex" justifyContent="center" flexDirection="column">
              <Menu>
                <Menu.Group title="SUPPORT">
                  <Menu.Item icon={CogIcon}>Help Topics</Menu.Item>
                  <Menu.Item icon={StarEmptyIcon}>Get Started</Menu.Item>
                  <Menu.Item icon={HelpIcon}>Ask A Question</Menu.Item>
                </Menu.Group>
              </Menu>
            </Pane>
          }
        >
          <div>
            <HelpIcon size={28} color="disabled" />
          </div>
        </Popover>

        <div className="avatar">
          <Popover
            content={
              <Pane display="flex" justifyContent="center" flexDirection="column">
                <Menu>
                  <Menu.Group title={username.toUpperCase()}>
                    <Menu.Item is={Link} to={Routes.Profile} icon={UserIcon}>
                      My Account
                    </Menu.Item>
                    <Menu.Item onClick={onLogout} icon={LogOutIcon}>
                      Logout
                    </Menu.Item>
                  </Menu.Group>
                </Menu>
              </Pane>
            }
          >
            <div>
              {!isMobile ? (
                <Avatar src={avatar} size={45} />
              ) : (
                <MenuIcon size={20} />
              )}
            </div>
          </Popover>
        </div>
      </div>
    </header>
  );
}
