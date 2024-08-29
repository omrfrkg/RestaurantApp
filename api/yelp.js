import axios from "axios";

export default axios.create({
    baseURL : "https://api.yelp.com/v3/businesses",
    headers : {
        Authorization : "Bearer GxG7BpdIGuikZ5VpFBrWV5KGorkKwHDxT31A3Lsw6EgBbUbTM5y-kHog51clm8Qt8N_P9HLmDdQe_MUjEHvOw1LuwLLrY2WhdqAtS3UUvWl1IcSDY7FPqtRg5TTQZnYx"
    }
})