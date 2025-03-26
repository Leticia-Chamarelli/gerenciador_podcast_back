import { repositoryPodcast } from "../repositories/podcasts-repository";


export const serviceListEpisodes =  async (queryString: string) => {
    const data = await repositoryPodcast;

    return data;
};