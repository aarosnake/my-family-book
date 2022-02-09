var images = 
["https://th.bing.com/th/id/R.93bb28a5ad473ab2cbe9b6576b3db615?rik=tYQgD6D%2b3aijlA&riu=http%3a%2f%2fclipartmag.com%2fimages%2fgrandfather-clipart-free-2.jpg&ehk=nelGcSBbA4Ho6%2fNUQCfGTjNMFAJr2LNbaLe93qvBGQw%3d&risl=&pid=ImgRaw&r=0" , 
"https://th.bing.com/th/id/R.4f4f5dbd7085e7208b2263c0371baf74?rik=2Nr4oFwtNEyO%2fA&riu=http%3a%2f%2fclipground.com%2fimages%2fgrandmother-clipart-4.jpg&ehk=%2f%2bYsFoFfsvYEHa6Qe8XLItZ%2fWn35Z4qIk3EUk1UeN64%3d&risl=&pid=ImgRaw&r=0" , 
"https://i.pinimg.com/originals/87/b8/3b/87b83ba77a10a1d3313ed7872918524d.jpg" , 
"https://static.vecteezy.com/system/resources/previews/000/367/530/original/daughter-kissing-her-mother-vector.jpg" , 
"https://i.pinimg.com/736x/8c/19/df/8c19df7cee8319ec9123ac10e41568e6.jpg" , 
"https://www.pngitem.com/pimgs/m/251-2515454_sister-clip-art-two-sisters-clipart-hd-png.png"]
 var names = ["family book","ranbir singh","dijeet singh","rocky singh","alia singh","soni singh","rani singh"]
 
var i = 0;
function update()
{
    i++
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
    {
        i = 0
    }
    var updatedImage = image[i]
    var updatedName = names[i]
    document.getElementById("family_member_image").src = updatedImage
    document.getElementById("family_member_name").innerHTML = updatedName
}