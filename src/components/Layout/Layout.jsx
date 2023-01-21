import { Box } from 'components/Box.styled';
import { StyledLink } from './Layout.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export default function Layout({ children }) {
  return (
    <>
      <Box>
        {navItems.map(({ href, text }) => (
          <StyledLink key={href} to={href}>
            {text}
          </StyledLink>
        ))}
      </Box>
      <div>{children}</div>
    </>
  );
}
