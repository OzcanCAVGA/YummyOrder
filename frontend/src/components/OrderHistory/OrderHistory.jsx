import React from 'react'
import Order from './Order.jsx'
export const OrderHistory = () => {

    const orders = [
        {
            "id":1,
            "urunIsmi": "Tavuklu Pilav",
            "siparisTarihi": "2024-04-10",
            "kategori": "Sıcak Yemekler",
            "icerik": "Pilav üzerine kızarmış tavuk parçaları",
            "masaNo": 5,
            "imgUrl": `https://source.unsplash.com/random/${Math.floor(Math.random() * 101)}`

        },
        {
            "id":2,
            "urunIsmi": "Mevsim Salata",
            "siparisTarihi": "2024-04-10",
            "kategori": "Salatalar",
            "icerik": "Mevsim sebzeleri ve yeşilliklerle hazırlanmış salata",
            "masaNo": 7,
            "imgUrl": `https://source.unsplash.com/random/${Math.floor(Math.random() * 101)}`

        },
        {
            "id":3,
            "urunIsmi": "Limonata",
            "siparisTarihi": "2024-04-09",
            "kategori": "İçecekler",
            "icerik": "Taze sıkılmış limon suyu ve buz",
            "masaNo": 3,
            "imgUrl": `https://source.unsplash.com/random/${Math.floor(Math.random() * 101)}`
        },
        {
            "id":4,
            "urunIsmi": "Karışık Pizza",
            "siparisTarihi": "2024-04-09",
            "kategori": "Pizzalar",
            "icerik": "Mantar, sosis, biber, peynir",
            "masaNo": 8,
            "imgUrl": `https://source.unsplash.com/random/${Math.floor(Math.random() * 101)}`
        },
        {
            "id":5,
            "urunIsmi": "Köfte Ekmek",
            "siparisTarihi": "2024-04-08",
            "kategori": "Fast Food",
            "icerik": "Köfte, marul, domates, ketçap, mayonez",
            "masaNo": 2,
            "imgUrl": `https://source.unsplash.com/random/${Math.floor(Math.random() * 101)}`
        },
        {
            "id":6,
            "urunIsmi": "Çikolatalı Brownie",
            "siparisTarihi": "2024-04-07",
            "kategori": "Tatlılar",
            "icerik": "Çikolatalı kek parçası, çilek ve dondurma ile servis edilir",
            "masaNo": 4,
            "imgUrl": `https://source.unsplash.com/random/${Math.floor(Math.random() * 101)}`
        },
        {
            "id":7,
            "urunIsmi": "Türk Kahvesi",
            "siparisTarihi": "2024-04-07",
            "kategori": "İçecekler",
            "icerik": "Geleneksel Türk kahvesi",
            "masaNo": 6,
            "imgUrl": `https://source.unsplash.com/random/${Math.floor(Math.random() * 101)}`
        },
        {
            "id":8,
            "urunIsmi": "Izgara Levrek",
            "siparisTarihi": "2024-04-06",
            "kategori": "Deniz Ürünleri",
            "icerik": "Izgara levrek balığı",
            "masaNo": 1,
            "imgUrl": `https://source.unsplash.com/random/${Math.floor(Math.random() * 101)}`
        },
        {
            "id":9,
            "urunIsmi": "Anadolu Kavurma",
            "siparisTarihi": "2024-04-06",
            "kategori": "Yöresel Lezzetler",
            "icerik": "Anadolu'nun geleneksel kavurma tarifi",
            "masaNo": 9,
            "imgUrl": `https://source.unsplash.com/random/${Math.floor(Math.random() * 101)}`

        },
        {
            "id":10,
            "urunIsmi": "Çilekli Milkshake",
            "siparisTarihi": "2024-04-05",
            "kategori": "İçecekler",
            "icerik": "Taze çilek ve süt ile hazırlanmış milkshake",
            "masaNo": 10,
            "imgUrl": `https://source.unsplash.com/random/${Math.floor(Math.random() * 101)}`

        }
    ]


    return (
        <div>
            <h1 className='text-3xl'>Geçmiş Siparişlerim</h1>
          
            {
                orders.map(order =>( 
                    < Order product={order} />
                ))
            }
        </div>
    )
}
