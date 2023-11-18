import contactUs from '../../assets/contact.jpeg'

const Contact = () => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: 'calc(100vh - 56px)',
        background: 'rgb(240, 233, 255)',
      }}
    >
      <div
        style={{
          fontSize: '48px',
          fontWeight: 800,
          paddingTop: '60px',
          textAlign: 'center',
        }}
      >
        We'd love to hear from you.
      </div>
      <div style={{textAlign: 'center', margin: '20px 0'}}>
        <img style={{width: '50%', borderRadius: '100%'}} src={contactUs}/>
      </div>
      <div style={{display: 'flex',alignItems: 'center', flexDirection: 'column'}}>
        <div style={{ fontWeight: '600' }}>You can also contact us at:</div>
        <div>Protect-Webster Inc.</div>
        <div>00 Fededrafl Street</div>
        <div>Springfield, MA 03205</div>
        <div>Phone: (000) 724-1234</div>
      </div>
    </div>
  )
}

export default Contact
