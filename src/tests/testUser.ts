import { createUser, getAllUsers, RoleAuth } from '../models/user.model';

async function testUserOperations() {
  try {
    // Test create user
    const newUser = {
      userName: 'testuser',
      phoneNumber: '0123456789',
      email: 'test@example.com',
      password: 'password123',
      role: RoleAuth.STUDENT,
      isBlocked: false
    };

    const createdUser = await createUser(newUser);
    console.log('Created user:', createdUser);

    // Test get all users
    const allUsers = await getAllUsers();
    console.log('All users:', allUsers);

  } catch (error) {
    console.error('Test failed:', error);
  }
}

testUserOperations();
