
export interface card {
  
    id: number,
    imgSrc: string,
    title: string,
    price: string,
    rprice: string
    likesup: number,
    likesdown: number,
}

export const cards: card[] = [
    {
        id: 1,
        imgSrc: './assets/images/products/sentadilla2.jpg',
        title: 'Sentadilla',
        price: '285',
        rprice: '375',
        likesup: 200,
        likesdown: 12,
      },
      {
        id: 2,
        imgSrc: '/assets/images/products/s5.jpg',
        title: 'MacBook Air Pro',
        price: '285',
        rprice: '375',
        likesup: 240,
        likesdown: 17,
      },
      {
        id: 3,
        imgSrc: '/assets/images/products/s7.jpg',
        title: 'Red Valvet Dress',
        price: '285',
        rprice: '375',
        likesup: 160,
        likesdown: 8,
      },
      {
        id: 4,
        imgSrc: '/assets/images/products/s11.jpg',
        title: 'Cute Soft Teddybear',
        price: '285',
        rprice: '375',
        likesup: 140,
        likesdown: 3,
      },
           
] 

