'use strict';
// Banka adları kullanıcının USD ve EUR ekran görüntülerinden alınmıştır.
// Skor, masraf, süre ve sorgu değerleri sunum amaçlı örnek verilerdir.
const correspondentLists={
 USD:[
 ['hsbc-us','HSBC BANK USA, N.A. - NEW YORK,NY','HSBC','HS',93,39,4.2],
 ['rbi-us','RAIFFEISEN BANK INTERNATIONAL AG - VIENNA','Raiffeisen','RI',90,45,3.1],
 ['sc-us','STANDARD CHARTERED BANK - NEW YORK,NY','Standard Chartered','SC',86,34,7.8],
 ['bny-us','THE BANK OF NEW YORK MELLON - NEW YORK,NY','BNY Mellon','BNY',79,52,6.5],
 ['yk-us','YAPI VE KREDI BANKASI A.S. - ISTANBUL','Yapı Kredi','YK',74,61,9.2]
 ],
 EUR:[
 ['intesa-eu','INTESA SANPAOLO SPA HEAD OFFICE - MILANO','Intesa Sanpaolo','IS',95,32,4.1],
 ['sabadell-eu',"BANCO DE SABADELL, S.A. - SABADELLCASTELLON Y ALIC",'Banco Sabadell','BS',84,39,5.7],
 ['caixa-eu','CAIXABANK, S.A. MAIN BRANCH - VALENCIA','CaixaBank','CB',82,40,6.2],
 ['hsbc-eu','HSBC CONTINENTAL EUROPE - PARIS','HSBC','HS',93,35,4.5],
 ['db-eu','DEUTSCHE BANK AG - FFT','Deutsche Bank','DB',91,41,3.2],
 ['citi-eu','CITIBANK EUROPE PLC, GERMANY BRANCH - FRANKFURT A','Citibank Europe','CI',88,33,6.8],
 ['kt-eu','KT BANK AG - FRANKFURT AM MAIN','KT Bank','KT',81,44,5.5],
 ['bny-eu','THE BANK OF NEW YORK MELLON, FRANKFURT BRANCH - F','BNY Mellon','BNY',80,46,6.1],
 ['rbi-eu','RAIFFEISEN BANK INTERNATIONAL AG - VIENNA','Raiffeisen','RI',87,38,4.8],
 ['yk-eu','YAPI VE KREDI BANKASI A.S. - ISTANBUL','Yapı Kredi','YK',79,43,6.5],
 ['sc-eu','STANDARD CHARTERED BANK AG - FRANKFURT AM MAIN','Standard Chartered','SC',85,45,5.9],
 ['sg-eu','SOCIETE GENERALE - PUTEAUX','Société Générale','SG',83,42,5.8]
 ],
 GBP:[] // GBP için kullanıcı tarafından muhabir listesi verilmedi.
};
const banks=Object.entries(correspondentLists).flatMap(([currency,rows])=>rows.map((r,i)=>({id:r[0],name:r[1],short:r[2],mark:r[3],currency,score:r[4],cost:r[5],hours:r[6],rankingMinutes:Math.min(60,Math.round(r[6]*6)),components:[Math.min(99,r[4]+1),Math.min(99,r[4]+3),99,82,87],queries:[96+i*3,38+i,14+i],slaCount:17+i,costCount:12+i})));
// Bağımsız örnek alıcı listesi; banka servisinden gelen bir BIC dizini değildir.
const beneficiaries=[
 {id:'MRMDUS33XXX',name:'MRMDUS33XXX · HSBC BANK USA, N.A.',country:'US'},
 {id:'CHASUS33',name:'CHASUS33 · JPMORGAN CHASE BANK, N.A.',country:'US'},
 {id:'BOFAUS3N',name:'BOFAUS3N · BANK OF AMERICA, N.A.',country:'US'},
 {id:'DEUTDEFF',name:'DEUTDEFF · DEUTSCHE BANK AG',country:'DE'},
 {id:'YAPITRISXXX',name:'YAPITRISXXX · YAPI VE KREDI BANKASI A.S.',country:'TR'}
];
