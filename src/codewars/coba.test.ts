describe('coba aja dulu', () => {
  it('should change user', () => {
    interface User {
      username:string;
    }
    let user : User  = {
      username: 'rafi'
    };
    const editUser = (user : User) : void =>  {
      user.username = `edit ${user.username}`
    }
    editUser(user)
    expect(user.username).toBe('edit rafi')
  });

  it('should pass by refrence', () => {
    const array1: number[] = [1,2,3]
    const array2: number[] = array1

    array2[0] = 2

    expect(array1[0]).toBe(1)
  });
})
