# Monster API

## To Do:
    
- [x] Installer `mongoose`
- [x] Création du model
```javascript
const monsterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});    
```    

- [x] CRUD API - Update
