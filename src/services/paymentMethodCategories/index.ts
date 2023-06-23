import { OFFER_API } from '@/constants';
import { AxiosResponse, fetchGet } from '@/services/axios';

export const fetchPaymentMethodCategories =
  async (): Promise<AxiosResponse | null> => {
    const response = await fetchGet(`${OFFER_API}/payment-methods/categories`);

    if (response.status !== 200) {
      return null;
    }

    return response;
  };
