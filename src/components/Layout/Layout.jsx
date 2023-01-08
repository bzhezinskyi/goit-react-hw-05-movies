import { Outlet } from 'react-router-dom';
import { StyledLink } from './Layout.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export default function Layout() {
  return (
    <>
      <nav>
        {navItems.map(({ href, text }) => (
          <StyledLink key={href} to={href}>
            {text}
          </StyledLink>
        ))}
      </nav>
      <Outlet />
    </>
  );
}
