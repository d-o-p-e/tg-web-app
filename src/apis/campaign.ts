import api from './axios';

export const applyCampaign = (campaignId: number) => {
  return api.post(`campaign/${campaignId}`);
};

export const getCampaigns = (campaignId: number) => {
  return api.get(`campaign`);
};
