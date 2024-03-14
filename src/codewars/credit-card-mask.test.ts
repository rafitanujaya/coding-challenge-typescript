describe('Credit Card Mask', () => {
  it('should barbar', () => {
    function maskify(cc :string) :string {
        let mask: string = '';
        
        if(cc.length > 4) {
          for(let i = 0; i < cc.length - 4; i++){
            mask += '#'
          }
          for(let i = cc.length - 4; i < cc.length ; i++){
            mask += cc[i];
          }
          return mask
        } else {
          return cc
        }    
      }

      expect(maskify('11111')).toBe('#1111')
  });
})
