export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}
type Users = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: Users = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};