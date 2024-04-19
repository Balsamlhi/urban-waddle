import styles from "./App.module.css";
import Navbar from "./components/navbar2/nav";
/*import Search_bar from "./components/search_bar/Search_bar";*/
import Map from "./components/map/Map";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <div className={styles.nav}>
      <Navbar />
      </div>                 
      <div className={styles.map}>
        <Map />
      </div>
      <div className={styles.Content}>
        <Content />
      </div>
      <div className={styles.footer}>
      <Footer/>
      </div>
      
    </>
  )
}
export default App
