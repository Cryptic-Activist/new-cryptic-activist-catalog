import { CRYPTOCURRENCY_API } from '@/constants';
import { AxiosResponse, fetchGet } from '@/services/axios';

export const fetchCryptocurrencies =
  async (): Promise<AxiosResponse | null> => {
    try {
      const response = await fetchGet(CRYPTOCURRENCY_API + '/cryptocurrencies');

      if (response.status !== 200) {
        return null;
      }

      return response;
    } catch (error) {}
  };
