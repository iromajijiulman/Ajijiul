# Security Specification - WeShare Social

## Data Invariants
1. A **Post** must have a valid `authorId` that matches the authenticated user's UID.
2. A **Post** content must be a string and cannot exceed 2000 characters.
3. A **User** profile can only be modified by the user who owns it.
4. **Events** and **Products** are read-only for standard users (system-created in this phase).
5. All timestamps (`createdAt`, `updatedAt`) must be set using `request.time`.

## The "Dirty Dozen" Payloads

### 1. Identity Spoofing (Post)
**Target:** `/posts/{postId}`
**Payload:** `{ "authorId": "attacker_id", "content": "Spoofed post", "timestamp": "2026-05-04T15:43:00Z" }`
**Expected Result:** `PERMISSION_DENIED` (authorId must match `request.auth.uid`).

### 2. Large Payload Attack
**Target:** `/posts/{postId}`
**Payload:** `{ "authorId": "valid_id", "content": "A".repeat(1000000), "timestamp": "request.time" }`
**Expected Result:** `PERMISSION_DENIED` (size limit exceeded).

### 3. Orphaned Write (Post)
**Target:** `/posts/{postId}`
**Payload:** `{ "authorId": "valid_id", "content": "Post without timestamp" }`
**Expected Result:** `PERMISSION_DENIED` (missing required fields).

### 4. Cross-User Update
**Target:** `/users/victim_id`
**Payload:** `{ "name": "Hacked Name" }`
**Expected Result:** `PERMISSION_DENIED` (userId does not match `request.auth.uid`).

### 5. ID Poisoning
**Target:** `/users/very-long-id-that-exceeds-128-characters...`
**Payload:** `{ "name": "Valid Name", ... }`
**Expected Result:** `PERMISSION_DENIED` (ID size/match validation fail).

### 6. PII Leak (List Query)
**Target:** `/users`
**Query:** `db.collection('users').get()`
**Expected Result:** `PERMISSION_DENIED` (no blanket user reads allowed without specific filters).

### 7. Ghost Field Injection
**Target:** `/posts/{postId}`
**Payload:** `{ "authorId": "valid_id", "content": "Valid", "timestamp": "request.time", "isAdmin": true }`
**Expected Result:** `PERMISSION_DENIED` (shadow/ghost fields not allowed).

### 8. Immutable Field Mutation (Post)
**Target:** `/posts/{postId}`
**Update Payload:** `{ "authorId": "new_id" }`
**Expected Result:** `PERMISSION_DENIED` (authorId is immutable).

### 9. Future Timestamp Attack
**Target:** `/posts/{postId}`
**Payload:** `{ "authorId": "valid_id", "content": "Valid", "timestamp": "2099-01-01T00:00:00Z" }`
**Expected Result:** `PERMISSION_DENIED` (timestamp must be `request.time`).

### 10. Unauthorized Event Creation
**Target:** `/events/{eventId}`
**Payload:** `{ "title": "Free Party", ... }`
**Expected Result:** `PERMISSION_DENIED` (standard users cannot create events).

### 11. Unauthorized Product Creation
**Target:** `/products/{productId}`
**Payload:** `{ "name": "Counterfeit Item", ... }`
**Expected Result:** `PERMISSION_DENIED` (standard users cannot create products).

### 12. Non-String Post Content
**Target:** `/posts/{postId}`
**Payload:** `{ "authorId": "valid_id", "content": 12345, "timestamp": "request.time" }`
**Expected Result:** `PERMISSION_DENIED` (type safety validation).
