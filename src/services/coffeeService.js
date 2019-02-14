export default class CoffeeService {
    constructor() {
      this._apiBase = 'http://localhost:3001';
    }
    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(res.status)
      }
      return await res.json();
    };

    getAllBestsellers = async () => {
      const res = await this.getResource('/bestsellers');
      return res;
    }
    getAllCoffee = async () => {
      const res = await this.getResource('/coffee');
      return res;
    }
    // getCoffee = async (id) => {
    //   const res = await this.getResource(`/coffee/${id}`);
    //   return res;
    // }
    getAllGoods = async () => {
      const res = await this.getResource('/goods');
      return res;
    }
  }

  