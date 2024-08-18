import axios from "axios";

export const serverApi = axios.create({
  baseURL: '/', // 프록시 경로를 사용하여 요청
});

serverApi.interceptors.request.use((config) => {
  config.headers['Content-type'] = 'application/json; charset=UTF-8';
  config.headers['Accept'] = 'application/json';
  return config;
}, (err) => {
  return Promise.reject(err);
});

export const apis = {
  getExchangeDataByDate: (date: string) => serverApi.get(`/newb/exchange?date=${date}`),
  getKospiDataByDate: (date: string) => serverApi.get(`/newb/kospi?date=${date}`),
  getInterestRatesDataByDate: (date: string) => serverApi.get(`/newb/interestrates?date=${date}`),
  getNewsSentimentDataByDate: (date: string) => serverApi.get(`/newb/newssentiment?date=${date}`),
  getDownTicker: (country: string) => serverApi.get(`/top3/downticker/?country=${country}`),
  getUpTicker: (country: string) => serverApi.get(`/top3/upticker/?country=${country}`),
  getTop3: (country: string, ticker: string) => serverApi.get(`/top3/top3/?country=${country}&ticker=${ticker}`),
};
