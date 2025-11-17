const mongoose = require("mongoose");
const School = require("./models/School");

const MONGO = process.env.MONGO_URI || "mongodb+srv://bablukumarin18_db_user:collegedb123@cluster0.wobhabb.mongodb.net/";

const data = [

/* -----------------------------------------------------------
   ANANTNAG DISTRICT
----------------------------------------------------------- */
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Model Higher Secondary School",
  location: "Brakpora / Dialgam",
  notes: "Boys (Classes 9-12)."
},
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Girls Higher Secondary School",
  location: "Mehandi Kadal, Anantnag Town",
  notes: "Girls (Classes 9-12)."
},
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. M.L. Higher Secondary School",
  location: "Bijbehara",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Dooru Shahabad",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Kokernag",
  notes: "Classes 9-12."
},

/* Secondary – High Schools */
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Sagam, Kokernag",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Chakora (Chakura)",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Noorpora",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Kanelwon",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Wahdan",
  notes: "Classes 6-10."
},

/* Primary / Middle */
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Dialgam",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Tulkhun",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Seeripora Bunmatihindoo",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Khandaypora",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Anantnag",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Dawood Pora",
  notes: "Classes 1-5."
},

/* -----------------------------------------------------------
   PULWAMA DISTRICT
----------------------------------------------------------- */
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Higher Secondary School",
  location: "Pulwama Town",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Girls Higher Secondary School",
  location: "Pulwama Town",
  notes: "Girls (Classes 9-12)."
},
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Higher Secondary School",
  location: "Tral",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Pampore",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Awantipora",
  notes: "Classes 9-12."
},

/* Secondary – High Schools */
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Rajpora",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Pinglena",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Ratnipora",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Newa",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Kakapora",
  notes: "Classes 6-10."
},

/* Primary / Middle */
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Karimabad",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Shahpora",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Munpora",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Gulbugh Ratnipora",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Pulwama",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Kangan (Tral Zone)",
  notes: "Classes 1-8."
},
/* -----------------------------------------------------------
   BANDIPORA DISTRICT
----------------------------------------------------------- */

/* Higher Secondary */
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Girls Higher Secondary School",
  location: "Plan, Bandipora Town",
  notes: "Girls (Classes 9-12)."
},
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Nadim Memorial Boys Higher Secondary School (NM Boys HSS)",
  location: "Kaloosa, Bandipora Town",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Quilmuqam",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Hajin",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Dawar, Gurez",
  notes: "Classes 9-12."
},

/* Secondary – High Schools */
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Ahamsharief",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. Girls High School",
  location: "Nadihal Gundpora",
  notes: "Girls (Classes 6-10)."
},
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Bagh",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Kanzalwan",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Sumlar",
  notes: "Classes 6-10."
},

/* Primary / Middle */
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Girls Middle School",
  location: "Onagam",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Boys Middle School",
  location: "Dawar, Gurez",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Sadunara (Ajas)",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Malangam Bala",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Bandipora",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Tangpathri",
  notes: "Classes 1-5."
},
/* -----------------------------------------------------------
   BARAMULLA DISTRICT
----------------------------------------------------------- */

/* Higher Secondary */
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Higher Secondary School",
  location: "Baramulla Town",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Girls Higher Secondary School",
  location: "Baramulla Town",
  notes: "Girls (Classes 9-12)."
},
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Higher Secondary School",
  location: "Sopore",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Palhallan, Pattan",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Boniyar",
  notes: "Classes 9-12."
},

/* Secondary – High Schools */
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Brath Kalan, Sopore",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Nowpora Kalan",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Wagoora",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Shumlaran",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Sherabad Khore",
  notes: "Classes 6-10."
},

/* Primary / Middle */
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Seelo",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Model Primary School",
  location: "Kreeri",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Pethgam Wagoora",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Nadihal",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Baramulla",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Singhpora",
  notes: "Classes 1-5."
},

/* -----------------------------------------------------------
   BUDGAM DISTRICT
----------------------------------------------------------- */

/* Higher Secondary */
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Higher Secondary School",
  location: "Budgam Town",
  notes: "Boys (Classes 9-12)."
},
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Girls Higher Secondary School",
  location: "Budgam Town",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Higher Secondary School",
  location: "Beerwah",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Chadoora",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Dragger Govt. Higher Secondary School",
  location: "Khansahib",
  notes: "Classes 9-12."
},

/* Secondary – High Schools */
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Charar-i-Sharief",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Galwanpora",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Hanjura",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Yarikhah",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Sholipora",
  notes: "Classes 6-10."
},

/* Primary / Middle */
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Hanjigund, Chadoora",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Soibugh",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Khured Gurwait",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Peer Mohalla Arigam",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Budgam",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Wagar",
  notes: "Classes 1-5."
},

/* -----------------------------------------------------------
   GANDERBAL DISTRICT
----------------------------------------------------------- */

/* Higher Secondary */
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Higher Secondary School (BHSS)",
  location: "Ganderbal Town",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Girls Higher Secondary School (GHSS)",
  location: "Ganderbal Town",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Kangan",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Lar",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Nunner",
  notes: "Classes 9-12."
},

/* Secondary – High Schools */
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Safapora",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Shallabugh",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Waly War (Waliwar)",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Haran",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Tulmullah",
  notes: "Classes 6-10."
},

/* Primary / Middle */
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Gotli Bagh",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Nunner",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Malshibagh",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Urpash",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Ganderbal",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Akhal",
  notes: "Classes 1-5."
},
/* -----------------------------------------------------------
   KULGAM DISTRICT
----------------------------------------------------------- */

/* Higher Secondary */
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Model Higher Secondary School",
  location: "Kulgam Town (Chawalgam)",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Girls Higher Secondary School",
  location: "Kulgam Town",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "D.K. Marg (Noorabad)",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "D.H. Pora",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Mirhama",
  notes: "Classes 9-12."
},

/* Secondary – High Schools */
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Sopat Tengpora",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Sonigam",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Ahmadabad",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Kanjikullah",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Hablishi",
  notes: "Classes 6-10."
},

/* Primary / Middle */
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Girls Middle School (GGMS)",
  location: "Ashmuji",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Mandujan",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Janpora Shahoo",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Boys Middle School (GBMS)",
  location: "Samnoo",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Kulgam",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Paljan",
  notes: "Classes 1-8."
},
/* -----------------------------------------------------------
   KUPWARA DISTRICT
----------------------------------------------------------- */

/* Higher Secondary */
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Higher Secondary School",
  location: "Kupwara Town",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Girls Higher Secondary School",
  location: "Kupwara Town",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Higher Secondary School",
  location: "Handwara",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Langate",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Trehgam",
  notes: "Classes 9-12."
},

/* Secondary – High Schools */
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Kralpora",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Sogam",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Hirri",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Vilgam",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Zachaldara",
  notes: "Classes 6-10."
},

/* Primary / Middle */
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Regipora",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Doolipora",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Kralgund",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Keran",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Kupwara",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Machil",
  notes: "Classes 1-8."
},
/* -----------------------------------------------------------
   SHOPIAN DISTRICT
----------------------------------------------------------- */

/* Higher Secondary */
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Higher Secondary School (BHSS)",
  location: "Shopian Town",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Girls Higher Secondary School (GHSS)",
  location: "Shopian Town",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Turkawangam",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Keegam",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Imamsahib",
  notes: "Classes 9-12."
},

/* Secondary – High Schools */
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Vehil",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Ramnagri",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Sedow",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Chillipora",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Wachi",
  notes: "Classes 6-10."
},

/* Primary / Middle */
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Aglar (Zainapora)",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Batapora",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Herman",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Check Sadipora",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Shopian",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Pinjora",
  notes: "Classes 1-8."
},
/* -----------------------------------------------------------
   SRINAGAR DISTRICT
----------------------------------------------------------- */

/* Higher Secondary */
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "S.P. Higher Secondary Institute (SP HSS)",
  location: "M.A. Road, Lal Chowk",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Girls Higher Secondary School",
  location: "Kothi Bagh, Lal Chowk",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Higher Secondary School",
  location: "Jawahar Nagar, Raj Bagh",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Boys Higher Secondary School",
  location: "Zadibal",
  notes: "Classes 9-12."
},
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Higher Secondary",
  minClass: 9, maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Soura",
  notes: "Classes 9-12."
},

/* Secondary – High Schools */
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Balhama",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Zewan",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. Girls High School (GGHS)",
  location: "Gojwara",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. Boys High School (BHS)",
  location: "Batamaloo",
  notes: "Classes 6-10."
},
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Secondary",
  minClass: 6, maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Hyderpora",
  notes: "Classes 6-10."
},

/* Primary / Middle */
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Raj Bagh",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Saida Kadal",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Primary/Middle",
  minClass: 1, maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Galwanpora",
  notes: "Classes 1-8."
},
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Karan Nagar",
  notes: "Classes 1-5."
},
{
  state: "Jammu & Kashmir",
  district: "Srinagar",
  category: "Primary/Middle",
  minClass: 1, maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Nowgam",
  notes: "Classes 1-5."
}


];

async function seed() {
  try {
    await mongoose.connect(MONGO);
    console.log("MongoDB connected.");

    await School.insertMany(data);
    console.log("New school data added successfully.");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
