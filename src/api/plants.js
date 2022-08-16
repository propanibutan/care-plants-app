import { PATHS } from './config';
import sendRequest from './sendRequest';

export function getPlants() {
    return sendRequest('GET', PATHS.PLANTS);
}

export function createPlant(plant) {
    return sendRequest('POST', PATHS.PLANTS, plant);
}

export function updatePlant(id, plant) {
    return sendRequest('PUT', `${PATHS.PLANTS}/${id}`, plant);
}

export function deletePlant(id) {
    return sendRequest('DELETE', `${PATHS.PLANTS}/${id}`);
}