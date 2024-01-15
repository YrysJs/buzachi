const Layout = ({ header = <></>, content = <></>, footer = <></> }) => {
  return (
    <div>
      {header}
      {content}
      {footer}
    </div>
  )
}

export default Layout
