import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// ── Schema ────────────────────────────────────────────────

export const dealers = sqliteTable("dealers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  contactPerson: text("contact_person"),
  address: text("address"),
  city: text("city").notNull(),
  state: text("state").notNull(),
  pincode: text("pincode"),
  phone: text("phone"),
  email: text("email"),
  website: text("website"),
  division: text("division").notNull().default("Both"), // Plywood | Veneer | Both
  lat: real("lat"),
  lng: real("lng"),
  active: integer("active", { mode: "boolean" }).notNull().default(true),
  createdAt: text("created_at").default(sql`(datetime('now'))`),
});

export const salesTeam = sqliteTable("sales_team", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  designation: text("designation"),
  department: text("department"),
  phone: text("phone"),
  email: text("email"),
  region: text("region"),
  photoUrl: text("photo_url"),
  linkedin: text("linkedin"),
  sortOrder: integer("sort_order").default(0),
  active: integer("active", { mode: "boolean" }).notNull().default(true),
  createdAt: text("created_at").default(sql`(datetime('now'))`),
});

// ── Client ────────────────────────────────────────────────

let _db: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (_db) return _db;
  const client = createClient({
    url: process.env.DATABASE_URL ?? "file:./data/sharon.db",
  });
  _db = drizzle(client, { schema: { dealers, salesTeam } });
  return _db;
}

// ── Auto-init: create tables + seed on first run ──────────

export async function initDb() {
  const db = getDb();

  // Create tables
  await db.run(sql`CREATE TABLE IF NOT EXISTS dealers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    contact_person TEXT,
    address TEXT,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    pincode TEXT,
    phone TEXT,
    email TEXT,
    website TEXT,
    division TEXT NOT NULL DEFAULT 'Both',
    lat REAL,
    lng REAL,
    active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT DEFAULT (datetime('now'))
  )`);

  await db.run(sql`CREATE TABLE IF NOT EXISTS sales_team (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    designation TEXT,
    department TEXT,
    phone TEXT,
    email TEXT,
    region TEXT,
    photo_url TEXT,
    linkedin TEXT,
    sort_order INTEGER DEFAULT 0,
    active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT DEFAULT (datetime('now'))
  )`);

  // Seed if empty
  const existingDealers = await db.run(sql`SELECT COUNT(*) as count FROM dealers`);
  const dealerCount = (existingDealers.rows[0] as { count: number }).count;

  if (!dealerCount) {
    await seedDealers(db);
  }

  const existingTeam = await db.run(sql`SELECT COUNT(*) as count FROM sales_team`);
  const teamCount = (existingTeam.rows[0] as { count: number }).count;

  if (!teamCount) {
    await seedSalesTeam(db);
  }
}

async function seedDealers(db: ReturnType<typeof drizzle>) {
  const data = [
    // Tamil Nadu
    { name: "Sri Lakshmi Timber & Ply", contactPerson: "Rajan Kumar", address: "23, Anna Salai", city: "Chennai", state: "Tamil Nadu", pincode: "600002", phone: "+91 98400 11234", email: "srilakshmi@example.com", division: "Both", lat: 13.0827, lng: 80.2707 },
    { name: "Annamalai Plywood Depot", contactPerson: "Suresh Annamalai", address: "45, Gandhi Road", city: "Chennai", state: "Tamil Nadu", pincode: "600018", phone: "+91 94440 22345", email: "annamalai@example.com", division: "Plywood", lat: 13.0569, lng: 80.2425 },
    { name: "Coimbatore Ply Centre", contactPerson: "Muthu Krishnan", address: "12, Nehru Street", city: "Coimbatore", state: "Tamil Nadu", pincode: "641001", phone: "+91 98421 33456", email: "coimbply@example.com", division: "Plywood", lat: 11.0168, lng: 76.9558 },
    { name: "Madurai Wood Works", contactPerson: "Selvam Pandian", address: "78, Main Road", city: "Madurai", state: "Tamil Nadu", pincode: "625001", phone: "+91 96000 44567", email: "maduraiwood@example.com", division: "Both", lat: 9.9252, lng: 78.1198 },
    { name: "Salem Ply & Veneer", contactPerson: "Karthik Raj", address: "34, Omalur Road", city: "Salem", state: "Tamil Nadu", pincode: "636001", phone: "+91 94890 55678", email: "salemply@example.com", division: "Veneer", lat: 11.6643, lng: 78.1460 },
    { name: "Trichy Timber Traders", contactPerson: "Balaji Murugan", address: "56, Bharathi Nagar", city: "Trichy", state: "Tamil Nadu", pincode: "620001", phone: "+91 98430 66789", email: "trichytimber@example.com", division: "Plywood", lat: 10.7905, lng: 78.7047 },
    { name: "Vellore Ply Solutions", contactPerson: "Senthil Kumar", address: "19, Katpadi Road", city: "Vellore", state: "Tamil Nadu", pincode: "632001", phone: "+91 97860 77890", email: "velloreply@example.com", division: "Both", lat: 12.9165, lng: 79.1325 },
    // Pondicherry
    { name: "Pondy Ply & Interiors", contactPerson: "Anand Rajan", address: "8, MG Road", city: "Pondicherry", state: "Pondicherry", pincode: "605001", phone: "+91 98440 88901", email: "pondyply@example.com", division: "Both", lat: 11.9416, lng: 79.8083 },
    { name: "French Quarter Timber", contactPerson: "Pierre Kannan", address: "22, Suffren Street", city: "Pondicherry", state: "Pondicherry", pincode: "605001", phone: "+91 94880 99012", email: "frenchquarter@example.com", division: "Veneer", lat: 11.9342, lng: 79.8290 },
    // Andhra Pradesh
    { name: "Vizag Ply Distributors", contactPerson: "Rao Venkat", address: "67, Beach Road", city: "Visakhapatnam", state: "Andhra Pradesh", pincode: "530001", phone: "+91 98490 10123", email: "vizagply@example.com", division: "Plywood", lat: 17.6868, lng: 83.2185 },
    { name: "Vijayawada Timber Hub", contactPerson: "Krishna Reddy", address: "34, Eluru Road", city: "Vijayawada", state: "Andhra Pradesh", pincode: "520001", phone: "+91 94440 21234", email: "vjwtimber@example.com", division: "Both", lat: 16.5062, lng: 80.6480 },
    { name: "Guntur Wood Palace", contactPerson: "Prasad Naidu", address: "12, Brodipet", city: "Guntur", state: "Andhra Pradesh", pincode: "522002", phone: "+91 96000 32345", email: "gunturwood@example.com", division: "Plywood", lat: 16.3067, lng: 80.4365 },
    { name: "Tirupati Ply Mart", contactPerson: "Subramaniam T", address: "45, TP Area", city: "Tirupati", state: "Andhra Pradesh", pincode: "517501", phone: "+91 97890 43456", email: "tirupatiply@example.com", division: "Both", lat: 13.6288, lng: 79.4192 },
    // Telangana
    { name: "Hyderabad Ply World", contactPerson: "Ahmed Khan", address: "89, Secunderabad", city: "Hyderabad", state: "Telangana", pincode: "500003", phone: "+91 98490 54567", email: "hydply@example.com", division: "Both", lat: 17.3850, lng: 78.4867 },
    { name: "Banjara Interiors & Ply", contactPerson: "Priya Sharma", address: "23, Banjara Hills", city: "Hyderabad", state: "Telangana", pincode: "500034", phone: "+91 94440 65678", email: "banjara@example.com", division: "Veneer", lat: 17.4126, lng: 78.4482 },
    { name: "Warangal Timber Co", contactPerson: "Ravi Chandran", address: "56, Hanamkonda", city: "Warangal", state: "Telangana", pincode: "506001", phone: "+91 96560 76789", email: "warangaltimber@example.com", division: "Plywood", lat: 17.9784, lng: 79.5941 },
  ];

  for (const d of data) {
    await db.run(sql`INSERT INTO dealers (name, contact_person, address, city, state, pincode, phone, email, division, lat, lng, active)
      VALUES (${d.name}, ${d.contactPerson}, ${d.address}, ${d.city}, ${d.state}, ${d.pincode}, ${d.phone}, ${d.email}, ${d.division}, ${d.lat}, ${d.lng}, 1)`);
  }
}

async function seedSalesTeam(db: ReturnType<typeof drizzle>) {
  const data = [
    { name: "Rajesh Subramaniam", designation: "Regional Sales Manager", department: "Sales", phone: "+91 98400 10001", email: "rajesh.s@sharonply.com", region: "South India", sortOrder: 1 },
    { name: "Priya Venkatesh", designation: "Sales Executive", department: "Sales", phone: "+91 94440 10002", email: "priya.v@sharonply.com", region: "Tamil Nadu", sortOrder: 2 },
    { name: "Mohammed Salim", designation: "Area Sales Manager", department: "Sales", phone: "+91 98490 10003", email: "salim.m@sharonply.com", region: "Andhra Pradesh & Telangana", sortOrder: 3 },
    { name: "Anitha Krishnamurthy", designation: "Dealer Relations Executive", department: "Channel Sales", phone: "+91 96000 10004", email: "anitha.k@sharonply.com", region: "Pondicherry & Tamil Nadu", sortOrder: 4 },
    { name: "Karthik Sundar", designation: "Technical Sales Consultant", department: "Technical", phone: "+91 97890 10005", email: "karthik.sun@sharonply.com", region: "South India", sortOrder: 5 },
    { name: "Deepa Murali", designation: "Customer Success Manager", department: "Customer Success", phone: "+91 94880 10006", email: "deepa.m@sharonply.com", region: "Chennai & Suburbs", sortOrder: 6 },
    { name: "Venkat Raman", designation: "Senior Sales Executive", department: "Sales", phone: "+91 98430 10007", email: "venkat.r@sharonply.com", region: "Hyderabad", sortOrder: 7 },
    { name: "Lakshmi Narayanan", designation: "Product Specialist", department: "Technical", phone: "+91 96550 10008", email: "lakshmi.n@sharonply.com", region: "South India", sortOrder: 8 },
  ];

  for (const m of data) {
    await db.run(sql`INSERT INTO sales_team (name, designation, department, phone, email, region, sort_order, active)
      VALUES (${m.name}, ${m.designation}, ${m.department}, ${m.phone}, ${m.email}, ${m.region}, ${m.sortOrder}, 1)`);
  }
}

export type Dealer = typeof dealers.$inferSelect;
export type NewDealer = typeof dealers.$inferInsert;
export type SalesTeamMember = typeof salesTeam.$inferSelect;
export type NewSalesTeamMember = typeof salesTeam.$inferInsert;
