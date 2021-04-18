import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        curriencies: [
            {name: "US Dollar", code: "USD", symbol: "$", rate: 1},
            {name: "Euro", code: "EUR", symbol: "€", rate: 0.897597},
            {name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755},
            {name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993},
        ],
        presets: [40, 100, 200, 1000, 2500, 5000],
        suggestion: 40,
        currentCurrency: "USD",
        rate: 1
    },
    mutations: {
        SET_SUGGESTION (state, payload) {
            state.suggestion = Number(payload);
        },
        SET_CURRIENCY (state, payload) {
            state.currentCurrency = payload;
            let old_rate = state.rate;
            state.rate = state.curriencies.find(item => item.code === state.currentCurrency).rate;
            state.suggestion = getBeautifulNumber(state.suggestion, state.rate / old_rate);
        }
    },
    getters: {
        PRESETS: state => {
            return state.presets.map(preset => getBeautifulNumber(preset, state.rate));
        },
        SUGGESTION: state => {
            return state.suggestion;
        },
        CURRENT_SYMBOL: state => {
            return state.curriencies.find(item => item.code === state.currentCurrency).symbol;
        },
        CURRENT_CURRENCY: state => {
            return state.curriencies.find(item => item.code === state.currentCurrency).code;
        }
    }
});


function getBeautifulNumber(inputNumber, rate) {
    let value = (inputNumber * rate).toFixed(0);
    let round = value.length <= 2 ? 1 : 2;
    let decimals = 10 ** (value.length - round);
    console.log((Number(value) / decimals).toFixed(0), decimals)
    value = (Number(value) / decimals).toFixed(0) * decimals;
    return value;
}

