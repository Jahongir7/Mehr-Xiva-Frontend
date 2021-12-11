import {sample} from 'lodash';
import {mockImgAvatar} from './mockImages';

const names = [
    {name: 'Zaripboyev Anvar'},
    {name: 'Xo\u2018jamurodov Jahongir'},
    {name: 'Qodirov Faxriddin'},
    {name: 'Durdiyev Doniyor'},
    {name: 'Adamboyev Asadbek'},
    {name: 'Matkarimov Abror'},
    {name: 'Jumaboyev Samandar'},
    {name: 'Abdusharipov Bekdiyor'},
    {name: 'Matnazarov Olloshukur'},
    {name: 'Eshniyozov Sobirjon'},
    {name: 'Xaitov Nurali'},
    {name: 'Karimov O\u2018g\u2018abek'},
    {name: 'Mavlonov Boburjon'}
];

const users = [...names].map((name, num, index) => ({
    id: num,
    avatarUrl: mockImgAvatar(index + 1),
    name: names[num].name,
    company: sample(['Shovot', 'Xiva', 'Gurlan, Moyli', 'Urganch']),
    isVerified: num % 3 === 0,
    status: sample([0, 1]),
    role: sample(['Shovot', 'Xiva', 'Gurlan, Moyli', 'Urganch'])
}));

export default users;
