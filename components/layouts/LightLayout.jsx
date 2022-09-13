
export const LightLayout = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'rgb(226, 223, 210)',
        borderRadius: '5px',
        padding: '10px'
    }}>
        <h3>Light-Layout</h3>
        <div>
            { children }
        </div>
    </div>
  )
}
