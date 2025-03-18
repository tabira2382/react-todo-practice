export const ColorfulMessage = ({color, children}) => {
  const conterntStyleA = {
    color ,
    fontSize: "18px"
  };

  return (
    <p style={conterntStyleA}>{children}</p>
  )
};