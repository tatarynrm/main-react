import promo from '../assets/menu-images/promo.svg'
import pizza from '../assets/menu-images/pizza.svg'
import salads from '../assets/menu-images/salads.svg'
import drinks from '../assets/menu-images/drinks.svg'
import info from '../assets/menu-images/info.svg'

export const menu = [
    {
        img: promo,
        name: 'Акції',
        link: '/promo',
        id: 1
    },
    {
        img: pizza,
        name: 'Піцца',
        link: '/',
        id: 2
    },
    {
        img: salads,
        name: 'Салати',
        link: '/salads',
        id: 3
    },
    {
        img: drinks,
        name: 'Напої',
        link: '/drinks',
        id: 4
    },
    {
        img: info,
        name: 'Інформація',
        link: '/',
        id: 5,
        sub_menu: [
            {
                fran: 'Франшиза',
                link: '/franshiza',
                id: 323132321
            },
            {
                fran: 'Доставка',
                link: '/delievery',
                id: 3231323212323
            },
            {
                fran: 'Оплата',
                link: '/payment',
                id: 323132321141343535
            },
            {
                fran: 'Про нас',
                link: '/about',
                id: 323132321888998789756
            },
            {
                fran: 'Новини',
                link: '/news',
                id: 3231323212212111111
            },
            {
                fran: 'Вакансії',
                link: '/vacation',
                id: 323132321098098098
            },
            {
                fran: 'Donate',
                link: '/donate',
                id: 3231323210990990220
            },

        ]
    },
]