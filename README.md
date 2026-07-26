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



## API Testing (Postman)

 Postman Collection in frontend/root :
`BBL Bookmark API.postman_collection.json`

### sol. test access token
1. Postman -> Import -> choose `BBL Bookmark API.postman_collection.json`
2. Set Authorization:
   - Collection -> Authorization -> Bearer Token
   - ใส่  access_token from localStorage `http://localhost:5173`
3. run Backend `npm run dev`  port 3000  Send 

### Endpoints 
- `GET /collections` - Get All Collections
- `POST /collections` - Create Collection
- `DELETE /collections/:id` - Delete Collection by ID
- `GET /bookmarks?collectionId=&search=` - Get Bookmarks (Search & Filter)
- `POST /bookmarks` - Create Bookmark
- `DELETE /bookmarks/:id` - Delete Bookmark by ID