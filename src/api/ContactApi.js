import { http } from "./http";

export const ContactApi = {
  sendMessage: async (messageData) => {
    return http.postPublic("/contacts", messageData);
  },
};