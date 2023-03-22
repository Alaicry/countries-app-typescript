import { Axios } from "axios";
import * as api from "../utils/constants/api";

export type Extra = {
	client: Axios;
	api: typeof api;
};
