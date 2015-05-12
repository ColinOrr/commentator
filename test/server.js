describe('server', function(){

  describe('retrieve comments', function(){
    describe('single comment', function(){
      it('should parse the posted date from the filename')
      it('should parse the email address from the filename')
      it('should parse the author from the front matter')
      it('should include the markdown from the file content')
    })

    describe('multiple comments', function(){
      it('should return comments matching the current URL path')
      it('should ignore comments in other folders')
    })

    describe('no comments', function(){
      it('should return an empty list')
    })

    describe('invalid comments', function(){
      it('should skip comments with an invalid filename')
      it('should skip comments without front matter')
    })
  })

})
