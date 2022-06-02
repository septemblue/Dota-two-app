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
const getMach = () => __awaiter(void 0, void 0, void 0, function* () {
    let penampung;
    const response = yield axios_1.default
        .get(`http://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1?key=${process.env.KEY}&match_id=6596551591`)
        .then((respon) => {
        console.log(respon.data);
        penampung = respon.data;
    })
        .catch((respon) => console.log(respon));
    console.log(penampung.result.players);
});
const getPlayers = () => __awaiter(void 0, void 0, void 0, function* () {
    let penampung;
    const response = yield axios_1.default
        .get(`http://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v1?key=${process.env.KEY}&account_id=107853000`)
        .then((responn) => (penampung = responn.data))
        .catch((respon) => console.log(respon));
    console.log(penampung.result.matches);
});
const getLive = () => __awaiter(void 0, void 0, void 0, function* () {
    let penampung;
    const response = yield axios_1.default
        .get(`http://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v1?key=${process.env.KEY}&skill=3`)
        .then((responn) => (penampung = responn.data))
        .catch((respon) => console.log(respon));
    console.log(penampung.result.matches);
});
// getMach()
// getPlayers();
// getLive();
// Plan make request every 3 seconds, filter the match history if it contain pro players
const proPlayers = [
    111620041, 357110030, 152545459, 97658618,
    126212866, 145550466, 139705639,
];
const sumail = proPlayers[0];
const midOne = proPlayers[1];
const gabbi = proPlayers[2];
const timado = proPlayers[3];
const saberLight = proPlayers[4];
const dubu = proPlayers[5];
const timadoSmurf = proPlayers[6];
