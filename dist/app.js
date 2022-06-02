"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const toID32 = (id64) => {
    const id32 = id64 + 76561197960265728;
    return id32;
};
const proPlayersMap = new Map();
proPlayersMap.set(111620041, "Sumail");
proPlayersMap.set(357110030, "Midone");
proPlayersMap.set(152545459, "Gabbi");
proPlayersMap.set(97658618, "Timado");
proPlayersMap.set(126212866, "SaberLight");
proPlayersMap.set(145550466, "DuBu");
proPlayersMap.set(139705639, "TimadoSmurf");
const filterMatch = (match) => {
    if (match.lobby_type === 7) {
        match.players.forEach((player) => {
            proPlayersMap.forEach((value, key) => {
                if (player === key) {
                    console.log(proPlayersMap.get(key).value);
                }
            });
        });
    }
};
const getMatch = () => __awaiter(void 0, void 0, void 0, function* () {
    let penampung;
    const response = yield axios_1.default
        .get(`http://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v1?key=${process.env.KEY}&skill=3`)
        .then((responn) => (penampung = responn.data))
        .catch((respon) => console.log(respon));
    penampung.result.matches.forEach((match) => {
        filterMatch(match);
    });
});
getMatch();
// Plan make request every 3 seconds, filter the match history if it contain pro players
