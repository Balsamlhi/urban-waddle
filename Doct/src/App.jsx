import styles from "./App.module.css";
import Navbar from "./components/navbar/navbar";
import Search_bar from "./components/search_bar/Search_bar";
import Map from "./components/map/Map";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <div className={styles.navbar}>
      <Navbar />
      </div>
      <div className={styles.Search_bar}>
      <Search_bar />
      </div>
      <div className={styles.map}>
        <Map />
      </div>
      <div className={styles.Footer}>
      <Footer/>
      </div>
      
    </>
  )
}
export default App
