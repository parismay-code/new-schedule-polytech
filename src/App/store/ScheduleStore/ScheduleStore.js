import {
    action,
    makeObservable,
    observable,
    runInAction
} from "mobx";

import { requestScheduleData } from "./requestScheduleData";

import {Meta} from '@utils/meta';

export default class ScheduleStore {
    meta = Meta.initial;

    schedule = {};

    constructor() {
        makeObservable(this, {
            meta: observable,
            schedule: observable,

            fetchScheduleData: action.bound,
        })
    }

    async fetchScheduleData() {
        this.meta = Meta.loading;

        const {isError, data} = await requestScheduleData();
        if (isError) {
            return this.meta = Meta.error;
        }

        runInAction(() => {
            this.meta = Meta.success;

            this.schedule = data;
        })
    }

    destroy() {
    }
}