import UserRepository from '../../src/repositories/UserRepository';
import UserService from '../../src/services/UserService';

class UserRepositoryTest {
  getUser(id: string) {
    return id;
  }

  getAllUser() {
    return 'All users';
  }
}

describe(UserService.name, () => {
  const userRepo = new UserRepositoryTest();
  const userService = new UserService(userRepo as unknown as UserRepository);
  test('should return all users', async () => {
    const result = userService.getAllUser();

    expect(result).toBe('All users'); // rewrite
  });
});

describe(UserService.name, () => {
  const userRepo = new UserRepositoryTest();
  const id = '5';
  const userService = new UserService(userRepo as unknown as UserRepository);

  test('should return all users', async () => {
    const result = userService.getUser(id);

    expect(result).toBe(id);
  });
});
