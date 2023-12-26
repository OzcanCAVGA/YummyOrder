import { useState } from 'react'
import Header from './parts/Header'
import Footer from './parts/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Header/>

    <Footer/>
    </>
  )
}

export default App
// return (
//   <div >
//     <Navbar />
//     <UrunArama />
//     <ScrollToTop />
//     <Routes>
//       <Route path='/' element={<Anasayfa />} />
//       <Route path='/pizzalar' element={<Pizzalar />} />
//       <Route path='/yan-urunler' element={<YanUrunler />} />
//       <Route path='/hakkimizda' element={<Hakkimizda />} />

//       <Route path='/pizzalar/urun-detay/:urunid' element={<PizzalarDetay />} />
//       <Route path='/yan-urunler/tatlilar/urun-detay/:urunid' element={<YanUrunlerDetay />} />
//       <Route path='/yan-urunler/soslar/urun-detay/:urunid' element={<YanUrunlerDetay />} />
//       <Route path='/yan-urunler/icecekler/urun-detay/:urunid' element={<YanUrunlerDetay />} />
//       <Route path='/yan-urunler/baslangiclar/urun-detay/:urunid' element={<YanUrunlerDetay />} />

//       <Route path='/' element={<ProtectedRoutes />}>
//       <Route path="/profil/sepetim" element={<Sepetim />} />
//         <Route path='/profil' element={<Profil />}>
//           <Route index element={<Hesabim />} />
//           <Route path='hesabim' element={<Hesabim />} />
//           <Route path='siparislerim' element={<Siparislerim />} />
//           <Route path='favorilerim' element={<Favorilerim />} />
//           <Route path='adreslerim' element={<Adreslerim />} />
//           <Route path="*" element={<NoMatch />} />
//         </Route>
//       </Route>

//       <Route path='/' element={<ProtectedAdminRoutes />}>
//         <Route path='/admin' element={<Admin />}>
//           <Route index element={<AdminYeniUrun />} />
//           <Route path='admin-yeni-urun' element={<AdminYeniUrun />} />
//           <Route path='admin-siparisler' element={<AdminSiparisler />} />
//           <Route path='admin-urunler' element={<AdminUrunler />} />
//           <Route path='admin-kullanicilar' element={<AdminKullanicilar />} />
//           <Route path="*" element={<NoMatch />} />
//         </Route>
//       </Route>
//       <Route path="*" element={<NoMatch />} />
//     </Routes>
//     <Footer />
//   </div>
// );
