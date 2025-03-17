
export const App = () => {
  const onClickButton = () => alert("ボタンを押しました");
  const conterntStyle = {
    color: "blue",
    fontSize: "18px"
  }
  return (
    <>
      <h1 style={{ color: "red"}}>こんにちは!</h1>
      <p style={conterntStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
};
