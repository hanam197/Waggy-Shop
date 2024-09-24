import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )

}
export default DefaultLayout;