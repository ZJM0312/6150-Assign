import { Outlet, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Suspense, useState } from 'react'

function Layout() {
  const location = useLocation()
  const [activeKey, setActiveKey] = useState(location.pathname)

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='#home'>React Nav</Navbar.Brand>
          <Nav
            onSelect={(selectedKey) => {
              setActiveKey(selectedKey)
            }}
            activeKey={activeKey}
            className='me-auto'
          >
            <Nav.Item>
              <Nav.Link href='/home'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/about-us'>About-us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/jobs'>Jobs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Layout
