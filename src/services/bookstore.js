export default class Bookstore{

    constructor(){
        this.data = [
            {
                id: 1,
                title: 'Production-Ready Microservices',
                author: 'Susan J. Fowler',
                price: 32,
                cover: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
            },
            {
                id: 2,
                title: 'Release It!',
                author: 'Michael T. Nygard',
                price: 45,
                cover: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
            }
        ];
    }

    //Имитируется задержка получения данных с сервера
    getBooks(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data);
            }, 700);
        });
    }
};