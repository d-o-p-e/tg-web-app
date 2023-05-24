import api from './axios';

export const postCampaign = (campaignId: number) => {
  return api.post(`/campaign/${campaignId}`);
};
