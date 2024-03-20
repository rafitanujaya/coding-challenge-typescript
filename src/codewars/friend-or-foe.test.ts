describe('Friend or Foe', () => {
  it('should barbar', () => {
    function friend(friends: string[]): string[]{
        let friend: string[] = [];
        for(let i = 0; i < friends.length; i++){
          if(friends[i].length == 4){
            friend.push(friends[i])
          }
        }
        return friend
      }

    expect(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])).toEqual(["Jimm", "Cari", "aret"])
  });

  it('should one line', () => {
    function friend(friends: string[]): string[]{
        return friends.filter(val => val.length == 4);
      }

    expect(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])).toEqual(["Jimm", "Cari", "aret"])
  });
})
