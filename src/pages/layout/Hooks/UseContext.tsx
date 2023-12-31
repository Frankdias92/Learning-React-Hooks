import { Greeting } from "../../../components/context/Greeting";
import { Message } from "../../../components/context/Message";
import { ThemeContextProvider } from "../../../components/context/ThemeContext";



export function UseContext() {
  return (
    <>
      <ThemeContextProvider>
        <div className="wrapper">
          <Message />
          <Greeting />
        </div>
      </ThemeContextProvider>
    </>
  )
}