import Axios from 'axios';

export class Exemple {
  static async method(): Promise<any> {
    try {
      const url = 'endPoint/users/0';
      const response = await Axios.get<any>(url);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
