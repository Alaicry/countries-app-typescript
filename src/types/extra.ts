import { Axios } from "axios";
import * as api from "../utils/config";

export type Extra = {
	client: Axios;
	api: typeof api;
};
