// seed.js - Combined Data
const mongoose = require("mongoose");
const School = require("./models/School");
const MONGO = process.env.MONGO_URI || "mongodb+srv://bablukumarin18_db_user:collegedb123@cluster0.wobhabb.mongodb.net/";

const data = [

/* ----------------------------- JAMMU DISTRICT ----------------------------- */

{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Sri Ranbir HSS (SRML HSS)",
  location: "Parade Ground, Jammu City",
  notes: "For Boys (Classes 9-12)"
},
{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Girls HSS",
  location: "Mubarak Mandi, Jammu City",
  notes: "For Girls (Classes 9-12)"
},
{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. HSS",
  location: "Gandhi Nagar, Jammu City",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. HSS",
  location: "R.S. Pura",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Higher Secondary",
  minClass: 11,
  maxClass: 12,
  name: "Govt. HSS",
  location: "Akhnoor",
  notes: "Classes 11-12"
},

/* --------------------------- SECONDARY (HIGH) --------------------------- */

{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Rehari Colony, Jammu City",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. Girls High School",
  location: "Rajpura Mangotrian, Jammu City",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Deeli, Channi Himmat",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Satwari",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Chak Murar (Bishnah Tehsil)",
  notes: "Classes 6-10"
},

/* ------------------------- PRIMARY / MIDDLE ------------------------- */

{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Talab Tillo, Jammu City",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Babli Zone (Purmandal)",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Hakkal, Chatha",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Janipur, Jammu City",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Jammu",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Noorah (Rural area)",
  notes: "Classes 1-8"
},
/* ----------------------------- SAMBA DISTRICT ----------------------------- */

{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Girls Higher Secondary School",
  location: "Samba Town",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Model Higher Secondary School",
  location: "Ramgarh",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Vijaypur",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Purmandal",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Ghagwal",
  notes: "Classes 9-12"
},

/* ------------------------ SAMBA — SECONDARY (HIGH) ------------------------ */

{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Bari Brahmana",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Sumb",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Rajpura",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Nud",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Sarore",
  notes: "Classes 6-10"
},

/* ------------------------- SAMBA — PRIMARY / MIDDLE ------------------------ */

{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Kalibari",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Vijaypur",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Utterbehni",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Birpur",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Samba",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Taloor",
  notes: "Classes 1-5"
},

/* ============================== KATHUA DISTRICT ============================== */

{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Girls Higher Secondary School",
  location: "Kathua Town",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Boys Higher Secondary School",
  location: "Kathua Town",
  notes: "For Boys (Classes 9-12)"
},
{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Billawar",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Basohli",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Hiranagar",
  notes: "Prominent school in Hiranagar Tehsil"
},

/* ----------------------- KATHUA — SECONDARY (HIGH) ----------------------- */

{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Parole",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Changran",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Lakhanpur",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Barnoti",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Marheen",
  notes: "Classes 6-10"
},

/* ---------------------- KATHUA — PRIMARY / MIDDLE ---------------------- */

{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Ward No. 1, Kathua",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Nagri Parole",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Mahanpur",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Malhar",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Kathua",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Machhedi",
  notes: "Classes 1-5"
},
/* ============================== UDHAMPUR DISTRICT ============================== */

{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Shaheed Inspector Kamal Singh Govt. Model HSS",
  location: "Shiv Nagar, Udhampur Town",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Girls Higher Secondary School",
  location: "Udhampur Town",
  notes: "For Girls (Classes 9-12)"
},
{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Ramnagar",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Chenani",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School",
  location: "Majalta",
  notes: "Classes 9-12"
},

/* ------------------------ UDHAMPUR — SECONDARY (HIGH) ------------------------ */

{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Barmeen",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Tikri",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Dhandal",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Bashat",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Hartaryan",
  notes: "Classes 6-10"
},

/* ----------------------- UDHAMPUR — PRIMARY / MIDDLE ----------------------- */

{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Dhagoon",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Jaganoo",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Kahana",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Mashira (Chenani Block)",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Udhampur",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Jullad Bali",
  notes: "Classes 1-5"
},

/* =============================== REASI DISTRICT =============================== */

{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (GHSS)",
  location: "Reasi Town",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (GHSS)",
  location: "Katra",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (GHSS)",
  location: "Arnas",
  notes: "Key educational center (Classes 9-12)"
},
{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (GHSS)",
  location: "Dharmari",
  notes: "Important institution in remote Dharmari block"
},
{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (GHSS)",
  location: "Pouni",
  notes: "Classes 9-12"
},

/* ------------------------- REASI — SECONDARY (HIGH) ------------------------- */

{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Bhaga",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Babban",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Sunderbani (Reasi side)",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Larh",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Kanjali",
  notes: "Classes 6-10"
},

/* ---------------------- REASI — PRIMARY / MIDDLE ---------------------- */

{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS) / GPS",
  location: "Badhota",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Kakryal",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Patta (Zone Pouni)",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Banera Jagir",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Reasi",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Chamba",
  notes: "Classes 1-8"
},
/* ============================== RAJOURI DISTRICT ============================== */

{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Boys Higher Secondary School (BHSS)",
  location: "Rajouri Town",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Girls Higher Secondary School (GHSS)",
  location: "Rajouri Town",
  notes: "Girls (Classes 9-12)"
},
{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Nowshera",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Girls HSS",
  location: "Thanamandi",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Sunderbani",
  notes: "Classes 9-12"
},

/* -------------------------- RAJOURI — SECONDARY -------------------------- */

{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. Girls High School",
  location: "Jawaharnagar, Rajouri",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Manjakote",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. Boys High School (BHS)",
  location: "Ratta (Lam)",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Darhal",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Hayatpura",
  notes: "Classes 6-10"
},

/* ----------------------- RAJOURI — PRIMARY / MIDDLE ----------------------- */

{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Lamberi",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Girls Middle School (GGMS)",
  location: "Dabber",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Dhar Sakri",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Gurah Sangpur",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Rajouri",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Pichalidhar (Kalakote)",
  notes: "Classes 1-5"
},

/* ============================== POONCH DISTRICT ============================== */

{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Boys Higher Secondary School (BHSS)",
  location: "Poonch Town",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Girls Higher Secondary School (GHSS)",
  location: "Poonch Town",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Mendhar",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Surankote",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Mandi",
  notes: "Classes 9-12"
},

/* --------------------------- POONCH — SECONDARY --------------------------- */

{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Loran",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Haveli",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Degwar Terwan",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Saujian",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Balakote",
  notes: "Classes 6-10"
},

/* ---------------------- POONCH — PRIMARY / MIDDLE ---------------------- */

{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Ajote (Poonch)",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Khari Karamara",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Chhatral (Mendhar)",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Lassana",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Poonch",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Fagla",
  notes: "Classes 1-8"
},

/* =============================== DODA DISTRICT =============================== */

{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Boys Higher Secondary School (BHSS)",
  location: "Doda Town",
  notes: "Boys (Classes 9-12)"
},
{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Girls Higher Secondary School (GHSS)",
  location: "Doda Town",
  notes: "Girls (Classes 9-12)"
},
{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Bhaderwah",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Gandoh (Bhalessa)",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Assar",
  notes: "Classes 9-12"
},

/* --------------------------- DODA — SECONDARY --------------------------- */

{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Ghat",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Malothi",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Bhagwah",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Chinta",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Thathri",
  notes: "Classes 6-10"
},

/* ------------------------ DODA — PRIMARY / MIDDLE ------------------------ */

{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Jangalwar",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Seri (Bhaderwah)",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Chillai (Gandoh)",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Bijarni",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Doda",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Kahara",
  notes: "Classes 1-8"
},

/* ============================== RAMBAN DISTRICT ============================== */

{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Boys Higher Secondary School (BHSS)",
  location: "Ramban Town",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Girls Higher Secondary School (GHSS)",
  location: "Ramban Town",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Banihal",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Gool",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. HSS",
  location: "Dhandrath (Halla)",
  notes: "Classes 9-12"
},

/* ------------------------ RAMBAN — SECONDARY ------------------------ */

{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Chanderkote",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Rajgarh",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Sangaldan",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Dalwa",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Kanga",
  notes: "Classes 6-10"
},

/* ---------------------- RAMBAN — PRIMARY / MIDDLE ---------------------- */

{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Maitra",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Borka (Gandri Road)",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Digdol",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Batote",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Ramban",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Khari",
  notes: "Classes 1-8"
},

/* ============================= KISHTWAR DISTRICT ============================= */

{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Boys Higher Secondary School (BHSS)",
  location: "Kishtwar Town",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Girls Higher Secondary School (GHSS)",
  location: "Kishtwar Town",
  notes: "Girls (Classes 9-12)"
},
{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Paddar (Gulabgarh)",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Marwah",
  notes: "Classes 9-12"
},
{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Higher Secondary",
  minClass: 9,
  maxClass: 12,
  name: "Govt. Higher Secondary School (HSS)",
  location: "Drabshalla",
  notes: "Classes 9-12"
},

/* --------------------------- KISHTWAR — SECONDARY --------------------------- */

{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Hidyal",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Machhel",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Mughal Maidan",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Thakrai",
  notes: "Classes 6-10"
},
{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Secondary",
  minClass: 6,
  maxClass: 10,
  name: "Govt. High School (GHS)",
  location: "Chatroo",
  notes: "Classes 6-10"
},

/* ------------------------ KISHTWAR — PRIMARY / MIDDLE ------------------------ */

{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Poochal",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Malipeth",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Filler (Paddar)",
  notes: "Classes 1-8"
},
{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Primary",
  minClass: 1,
  maxClass: 5,
  name: "Govt. Primary School (GPS)",
  location: "Bunjwah",
  notes: "Classes 1-5"
},
{
  state: "Jammu & Kashmir",
  district: "Kishtwar",
  category: "Primary/Middle",
  minClass: 1,
  maxClass: 8,
  name: "Govt. Middle School (GMS)",
  location: "Kuchhal",
  notes: "Classes 1-8"
},
];





async function seed() {
  try {
    await mongoose.connect(MONGO);
    console.log("Connected to MongoDB Atlas");

    await School.deleteMany({});
    console.log("Old data removed");

    await School.insertMany(data);
     console.log("New school data added successfully.");
   
    mongoose.connection.close();
    console.log("Done");
  } catch (err) {
    console.error(err);
  }
}

seed();
