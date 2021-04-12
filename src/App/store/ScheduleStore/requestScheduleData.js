import axios from 'axios';

import { apiUrl } from "@configs/apiUrl";

export const requestScheduleData = async () => {
    try {
        const response = await axios.get(
            apiUrl.schedule,
            {
                params: {
                    group: '191-363',
                    session: 0
                }
            }
        );
        return {
            isError: false,
            data: response.data
        };
    } catch (e) {
        console.log(e);
        return {
            isError: true,
            data: null
        };
    }
}