describe("You're a square!", () => {
  it('should barbar', () => {

    // ? Bilangan kuadrat adalah bilangan dari hasil pangkat 2
    // ? example bilangan kuadrat 4 hasil dari bilangan 2 X 2 = 4

    // ! Bilangan negatif bukan bilangan kuadrat

     function isSquare(n: number ) : boolean{
  
        if(n < 0) {
          return false
        }
        
        if(n == 0 || n == 1) {
          return true
        }
        
        // ! kenapa disini dibagi 2 ??
        // ! karena jika kita melewati setengah bilangan itu sendiri, 
        // ! kita tidak akan pernah menemukan bilangan bulat yang ketika 
        // ! dipangkatkan akan menghasilkan bilangan itu.
        for(let i = 1; i <= n / 2; i++) {
          if(i * i == n) {
            return true;
          } else if ( i * i > n){ 
            return false;
          }
        }
        // ? Jika tidak ada bilangan bulat yang memiliki kuadrat sama dengan bilangan aslinya
        return false;
      }

    expect(isSquare(26)).toBeFalsy()
    expect(isSquare(25)).toBeTruthy()
  });

  
})
