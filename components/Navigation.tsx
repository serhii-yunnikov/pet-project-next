/* eslint-disable react/display-name */
'use client';

import {
  Typography,
  Toolbar,
  Avatar,
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Container,
} from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from "react";
import { useMemo } from "react";

const settings = ['Profile', 'Account', 'Dashboard', 'signOut'];

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
} | undefined;

type RightToolbar = {
  marginLeft: string,
  marginRight: string,
};

const toolBar = {
  display: 'flex', justifyContent: 'space-between',
};

export const Navigation = ({ navLinks }: Props) => {
  const session = useSession();
  const pathname = usePathname();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  let user: User;

  if (session.data) {
    user = session.data.user;
  }

  console.log('render');

  const name = useMemo(() => user?.name, [user]);
  const image = useMemo(() => session.data?.user?.image, [session.data?.user]);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log(user);

  return (
    <AppBar>
      <Toolbar sx={toolBar}>
        <Typography
          variant="h6"
          display="flex"
          justifyContent="left"
          gap="20px"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                color="#f54242"
                key={link.label}
                href={link.href}
                className={isActive ? "active" : ""}
              >
                {link.label}
              </Link>
            );
          })}
        </Typography>
        <section>
          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={user.name}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={user.name as string}
                    src={user.image as string}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      {setting === 'signOut' ? (
                        <Link
                          style={{ ["color" as any]: "#bb0dde" }}
                          href="#"
                          onClick={() => signOut({callbackUrl: "/"})}
                        >
                          Sign Out
                        </Link>
                      ) : (
                        <Link
                          href={`/${setting}`}
                        >
                          {setting}
                        </Link>
                      )}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Typography sx={{ fontSize: "20px"}}>
              <Link
                style={{ ["color" as any]: "#bb0dde" }}
                href="api/auth/signin"
              >
                Sign In
              </Link>
            </Typography>
          )}
        </section>
      </Toolbar>
    </AppBar>
  );
};
