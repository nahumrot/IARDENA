import React,{useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail'
import { useParams } from 'react-router-dom';


const electro = [
  // {id:1 , title:"Vestido De Paracaídas Con Lazo En La Cintura", Image: "https://shirelavrahami.com/wp-content/uploads/2022/09/BS_P4050-500x750.jpg", category:"vestidos", price:"20.000" , inStock:([10])  },
  // {id:2, Image:"https://shirelavrahami.com/wp-content/uploads/2022/09/BS_P3518-500x750.jpg", title:"Vestido De Vacaciones - Patrulla", category:"vestidos",  price:"30.000" ,inStock:([10]) },
  // {id:3, Image:"https://shirelavrahami.com/wp-content/uploads/2022/09/BS_P4353-500x750.jpg", title:"Un Vestido Informal", category:"vestidos" , price:"10.000" ,inStock:([10])},
  // {id:4, Image:"https://imagenes.elpais.com/resizer/gmYm28EfIbdmOZHo2xNRgvx3YH8=/1200x0/filters:focal(209x290:219x300)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/2GOIWHMMHNFUNGKRSUACWF2YLI.png", title:"Mini Bolsa De Hombro Transversal Para Celulares + Ropa", category:"combos",  price:"25.000" ,inStock:([10])},
  {
    id: 1,
    title: "Vestido diseno 1",
    author: "Tela premium",
    price: 10000,
    img: "https://ae01.alicdn.com/kf/Sf51f8e5b25e94e3f85b516c7154d06d4N/Vestido-playero-sin-mangas-para-mujer-T-nica-de-malla-de-punto-con-dise-o-de.jpg_Q90.jpg_.webp",
    amount: 1,
    category:"vestidos combinado",
    sizes: {
      s:"S",
      m:"M",
      l:"L",
      xl:"XL",
    },
    currency:"$"
  },
  {
    id: 2,
    title: "vestido 1",
    author: "mini detalle",
    price: 8000,
    img: "https://static1.mujerhoy.com/www/multimedia/202208/05/media/cortadas/vestidos-inspiracion-bohemia-kou-U1709019689932lB-624x624@MujerHoy.jpg",
    amount: 1,
    category:"vestidos liso",
    sizes: {
      s:"S",
      m:"M",
      l:"L",
      xl:"XL",
    },
    currency:"$"
  },
  {
    id: 3,
    title: "Vestido diseno 2",
    author: "mini detalle",
    price: 11000,
    img: "https://sc01.alicdn.com/kf/HTB1PPy3NVXXXXbvXXXXq6xXFXXXA/224010162/HTB1PPy3NVXXXXbvXXXXq6xXFXXXA.jpg_.webp",
    amount: 1,
    category:"vestidos combinado",
    sizes: {
      s:"S",
      m:"M",
      l:"L",
      xl:"XL",
    },
    currency:"$"
  },
  {
    id: 4,
    title: "Vestido 2",
    author: "mini detalle",
    price: 8500,
    img: "https://comoorganizarlacasa.com/wp-content/uploads/2021/07/disenos-de-vestidos-coloridos-para-la-playa-1.jpg",
    amount: 1,
    category:"vestidos liso",
    sizes: {
      s:"S",
      m:"M",
      l:"L",
      xl:"XL",
    },
    currency:"$"
  },
  {
    id: 5,
    title: "vestido diseno 3",
    author: "mini detalle",
    price: 15500,
    img: "https://ae01.alicdn.com/kf/H9285ef36e90b4cfc860a5962fe0393151/Vestido-de-playa-de-ganchillo-con-flecos-para-mujer-chaleco-transpirable-a-mano-dise-o-personalizado.jpg_Q90.jpg_.webp",
    amount: 1,
    category:"vestidos combinado",
    sizes: {
      s:"S",
      m:"M",
      l:"L",
      xl:"XL",
    },
    currency:"$"
  },
  {
    id: 6,
    title: "Vestido 3",
    author: "mini | detalle",
    price: 13500,
    img: "https://i.pinimg.com/originals/8b/50/d9/8b50d96e63981f15b4545ef6305ccccb.jpg",
    amount: 1,
    category:"vestidos liso",
    sizes: {
      s:"S",
      m:"M",
      l:"L",
      xl:"XL",
    },
    currency:"$"
  },
  {
    id: 7,
    title: "vestido diseno 4 ",
    author: "mini  | detalle",
    price: 693,
    img: "https://ae01.alicdn.com/kf/He2311c5cf85c416e8806ad3bfbc33018U.jpg",
    amount: 1,
    category:"vestidos combinado",
    sizes: {
      s:"S",
      m:"M",
      l:"L",
      xl:"XL",
    },
    currency:"$"
  },
  {
    id: 8,
    title: "Vestido 4",
    author: "Alto  | detalle",
    price: 5000,
    img: "https://www-s.mlo.me/upen/v/2016/201607/20160705/20160705112201710889.jpg",
    amount: 1,
    category:"vestidos liso",
    sizes: {
      s:"S",
      m:"M",
      l:"L",
      xl:"XL",
    },
    currency:"$"
  },
  {
    id: 9,
    title: "Vestido diseno 5",
    author: "by roto",
    price: 80000,
    img: "https://ae01.alicdn.com/kf/Ha1d9943deb3b413db1e275a848f0e729i.jpg?width=800&height=800&hash=1600",
    amount: 1,
    category:"vestidos combinado",
    sizes: {
      s:"S",
      m:"M",
      l:"L",
      xl:"XL",
    },
    currency:"$"
  },
  {
    id: 10,
    title: "Vesito 5",
    author: "detalle | mini",
    price: 86000,
    img: "https://www-s.mlo.me/upen/v/2016/201606/20160620/201606201041573444969.jpg",
    amount: 1,
    category:"vestidos liso",
    sizes: {
      s:"S",
      m:"M",
      l:"L",
      xl:"XL",
    },
    currency:"$"
  },
  {
    id: 11,
    title: "Vestido diseno 6",
    author: "by  |  2021",
    price: 120000,
    img: "https://ae01.alicdn.com/kf/HTB14OfEaStYBeNjSspaq6yOOFXaZ/Ruiyige-Summer-Boho-Strapless-Maxi-Dress-Sexy-Sleeveless-Backless-Women-Print-Floral-Dresses-Pockets-Party-Beach.jpg",
    amount: 1,
    category:"vestidos combinado",
    sizes: {
      s:"S",
      m:"M",
      l:"L",
      xl:"XL",
    },
    currency:"$"
  },
  {
    id: 12,
    title: "Vestido 6",
    author: "by | 1 January 2015",
    price: 157000,
    img: "https://i.pinimg.com/originals/14/27/37/142737e1a2b6076862e28be02d78e8fb.jpg",
    amount: 1,
    category:"vestidos liso",
    sizes: {
      s:"S",
      m:"M",
      l:"L",
      xl:"XL",
    },
    currency:"$"
  },
];

export default function ItemDetailContainer() {
    const [data, setData] = useState({})

    const {detalleId} = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(electro);
            }, 0);
        });
        getData.then(res => setData(res.find(vestidos => vestidos.id === parseInt(detalleId))));
    },[detalleId])
  return (
    <ItemDetail data={data}/>
  )
}
