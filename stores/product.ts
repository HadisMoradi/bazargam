import { defineStore } from 'pinia'

interface Product {
    id: number
    title: string
    weight: string
    src: string
    price: string
    grooh: string
}

type State = {
  products: Product[]
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
                    grooh: "ggg"
                },
                {
                    id: 2,
                    title: 'تراش',
                    weight: 'تک تیغه',
                    src: "../../public/-.jpg",
                    price: "$ 12,500 T",
                    grooh: "ggg"
                },
                {
                    id: 3,
                    title: 'مداد رنگی',
                    weight: '۲۴ عددی',
                    src: "../../public/-24-.jpg",
                    price: "$ 63,000 T",
                    grooh: "ggg"
                },
                {
                    id: 4,
                    title: 'اتود',
                    weight: '۰.۵ مغز',
                    src: "../../public/-05-.jpg",
                    price: "$ 28,500 T",
                    grooh: "ggg"
                },
                {
                    id: 5,
                    title: 'دفتر فنری',
                    weight: '۵۰ برگ',
                    src: "../../public/-50-.jpg",
                    price: "$ 57,000 T",
                    grooh: "ggg"
                },
// SHELF 2
                {
                    id: 1,
                    title: ' Redmi Note 12 4G',
                    weight: '240 g',
                    src: "../../public/-11-.jpg",
                    price: "$ 8,500,000 T",
                    grooh: "bbb"
                },
                {
                    id: 2,
                    title: 'Galaxy A34 5G',
                    weight: '215 g',
                    src: "../../public/-22-.jpg",
                    price: "$ 1,230,000 T",
                    grooh: "bbb"
                },
                {
                    id: 3,
                    title: ' iphone13 Pro max LLA',
                    weight: '305',
                    src: "../../public/-33-.jpg",
                    price: "$ 9,800,000 T",
                    grooh: "bbb"
                },
                {
                    id: 4,
                    title: 'Galaxy S21 FE',
                    weight: '265 g',
                    src: "../../public/-44-.jpg",
                    price: "$ 3,860,000 T",
                    grooh: "bbb"
                },
                {
                    id: 5,
                    title: 'Honor X8',
                    weight: '320 g',
                    src: "../../public/-55-.jpg",
                    price: "$ 5,700,000 T",
                    grooh: "bbb"
                },

            ],
        }
    },
})