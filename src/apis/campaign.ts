import api from './axios';

export const postCampaign = () => {
  return api.post(`/campaign/`);
};

export const postCampaignById = (campaignId: number) => {
  return api.post(`/campaign/${campaignId}`);
};

export const getMileage = () => {
  return api.get<{ amount: number }>(`/campaign/mileage`);
};
