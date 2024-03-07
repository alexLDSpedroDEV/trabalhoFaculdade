export interface MeuFood {
    id: number,
    name: string,
    value: number,
    text: string,
    image: string,
    type: string,
}



const foods: MeuFood[] = [
    {
        id: 1,
        name: "silician", 
        type: "hamburguer",
        image: "hamburguer0",
        value: 24.9,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo mollitia ea veniam officiis atque facere tenetur cum quisquam fugit consectetur possimus est obcaecati minus sint quos, aliquam, dolorem eius at."
        
    },
    {
        id: 2,
        name: "japapeño ",
        type: "hamburguer",
        image: '/p5.png',
        value: 29.9,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo mollitia ea veniam officiis atque facere tenetur cum quisquam fugit consectetur possimus est obcaecati minus sint quos, aliquam, dolorem eius at."
    },
    {
        id: 3,
        name: "marcherita",
        type: "hamburguer",
        image: '/p6.png',
        value: 24.9,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo mollitia ea veniam officiis atque facere tenetur cum quisquam fugit consectetur possimus est obcaecati minus sint quos, aliquam, dolorem eius at."
    },
    {
        id: 4,
        name: "parmesan",
        image: '/p4.png',
        type: "hamburguer",
        value: 24.9,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo mollitia ea veniam officiis atque facere tenetur cum quisquam fugit consectetur possimus est obcaecati minus sint quos, aliquam, dolorem eius at."
    },
    {
        id: 5,
        name: "delight",
        image: '/p8.png',
        type: "hamburguer",
        value: 32.9,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo mollitia ea veniam officiis atque facere tenetur cum quisquam fugit consectetur possimus est obcaecati minus sint quos, aliquam, dolorem eius at."
    },
    {
        id: 6,
        name: "teriyaki",
        image: '/p9.png',
        type: "hamburguer",
        value: 24.9,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo mollitia ea veniam officiis atque facere tenetur cum quisquam fugit consectetur possimus est obcaecati minus sint quos, aliquam, dolorem eius at."
    },

    {
        id: 7,
        name: "deluxe",
        image: '/p2.png',
        type: "hamburguer",
        value: 24.9,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo mollitia ea veniam officiis atque facere tenetur cum quisquam fugit consectetur possimus est obcaecati minus sint quos, aliquam, dolorem eius at."
    },
    {
        id: 8,
        name: "home",
        image: '/p12.png',
        type: "hamburguer",
        value: 32.9,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo mollitia ea veniam officiis atque facere tenetur cum quisquam fugit consectetur possimus est obcaecati minus sint quos, aliquam, dolorem eius at."
    },
    {
        id: 9,
        name: "macaronette",
        type: "hamburguer",
        image: '../hamburguer1',
        value: 24.9,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo mollitia ea veniam officiis atque facere tenetur cum quisquam fugit consectetur possimus est obcaecati minus sint quos, aliquam, dolorem eius at."
    },
]



export default foods