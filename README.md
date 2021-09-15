# Live coding app for Prisma talk

## Database

A PostgreSQL database containing 2 tables about Star Wars world:
- People
- Planet

**Start and init the database:**
```
docker compose up -d --force-recreate
```

**Stop the database:**
```
docker compose down
```

**Initialize existing schema:**
```
yarn prisma migrate dev
```

**Generate client:**
```
yarn prisma generate
```

**Load seeds:**
```
yarn prisma db seed;
```

**Load seeds:**
```
yarn prisma migrate reset;
```