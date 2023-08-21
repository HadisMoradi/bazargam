import { error } from 'console'
import { defineStore } from 'pinia'
import { json } from 'stream/consumers'

interface Product {
    id: number
    title: string
    weight: string
    src: string
    price: string
    group: string
}
interface fetch{
    id : Number
    title : string
    price :Number
    description : string
    category : string
    image : string
    rating : object
}

type State = {
  products: Product[]
  object : fetch[]
}

export const productsStore = defineStore('product', {
    state: (): State => {
        return {
            products: [
// SHELF 1
                {
                    id: 1,
                    title: 'دفتر تک خط فانتزی',
                    weight: '۸۰ برگ',
                    src: "../../public/-60-.jpg",
                    price: "$ 35,000 T",
                    group: "row-1"
                },
                {
                    id: 2,
                    title: 'تراش',
                    weight: 'تک تیغه',
                    src: "../../public/-.jpg",
                    price: "$ 12,500 T",
                    group: "row-1"
                },
                {
                    id: 3,
                    title: 'مداد رنگی',
                    weight: '۲۴ عددی',
                    src: "../../public/-24-.jpg",
                    price: "$ 63,000 T",
                    group: "row-1"
                },
                {
                    id: 4,
                    title: 'اتود',
                    weight: '۰.۵ مغز',
                    src: "../../public/-05-.jpg",
                    price: "$ 28,500 T",
                    group: "row-1"
                },
                {
                    id: 5,
                    title: 'دفتر فنری',
                    weight: '۵۰ برگ',
                    src: "../../public/-50-.jpg",
                    price: "$ 57,000 T",
                    group: "row-1"
                },
// SHELF 2
                {
                    id: 6,
                    title: ' Redmi Note 12 4G',
                    weight: '240 g',
                    src: "../../public/-11-.jpg",
                    price: "$ 8,500,000 T",
                    group: "row-2"
                },
                {
                    id: 7,
                    title: 'Galaxy A34 5G',
                    weight: '215 g',
                    src: "../../public/-22-.jpg",
                    price: "$ 1,230,000 T",
                    group: "row-2"
                },
                {
                    id: 8,
                    title: ' iphone13 Pro max LLA',
                    weight: '305',
                    src: "../../public/-33-.jpg",
                    price: "$ 9,800,000 T",
                    group: "row-2"
                },
                {
                    id: 9,
                    title: 'Galaxy S21 FE',
                    weight: '265 g',
                    src: "../../public/-44-.jpg",
                    price: "$ 3,860,000 T",
                    group: "row-2"
                },
                {
                    id: 10,
                    title: 'Honor X8',
                    weight: '320 g',
                    src: "../../public/-55-.jpg",
                    price: "$ 5,700,000 T",
                    group: "row-2"
                },
            ],
            object : []
        }
    },
    actions :{
        async readp(){
            await fetch('https://fakestoreapi.com/products')
            .then(Response => Response.json())
            .then(json => this.object =json)
            .catch(error => {if (error) {
                console.log(error);
                
            }})
        },
        async readproductById( id : number){
            
            
            await fetch('https://fakestoreapi.com/products/'+id)
            .then(Response => Response.json())
            .then(json => this.object = json)
            .catch(error => {if (error) {
                console.log(error);
                
            }})
        }
    }
})