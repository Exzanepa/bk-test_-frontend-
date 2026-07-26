# BBL Bookmark

Bookmark manager with Collections.

## Run

Backend:
cd backend
npm install
npx prisma migrate dev
npm run dev

Frontend:
cd frontend
npm install
npm run dev

## Feature
- Collections CRUD
- Bookmarks CRUD
- Search by title/url
- Filter by collection

## API
GET /collections
POST /collections
DELETE /collections/:id
GET /bookmarks?search=&collectionId=
POST /bookmarks
DELETE /bookmarks/:id